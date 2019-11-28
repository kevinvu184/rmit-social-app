package com.sept.rest.webservices.restfulwebservices.classmate;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClassmateJpaResource {


	@Autowired
	private ClassmateService classmateService;


	@Autowired
	private ClassmateJpaRepository classmateJpaRepository;

	@GetMapping("/jpa/users/{username}/classmates")
	public List<Classmate> getAllClassmates(@PathVariable String username) {
		return classmateJpaRepository.findByUsername(username);
	}

	@GetMapping("/jpa/users/{username}/classmates/{id}")
	public Classmate getClassmate(@PathVariable String username, @PathVariable long id) {
		return classmateJpaRepository.findById(id).get();
	}

	@DeleteMapping("/jpa/users/{username}/classmates/{id}")
	public ResponseEntity<Void> deleteClassmate(@PathVariable String username, @PathVariable long id) {
		classmateJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/jpa/users/{username}/classmates/{id}")
	public ResponseEntity<Classmate> updateClassmate(@PathVariable String username, @PathVariable long id,
			@RequestBody Classmate classmate) {
		classmate.setUsername(username);
		Classmate classmateUpdated = classmateJpaRepository.save(classmate);
		return new ResponseEntity<Classmate>(classmate, HttpStatus.OK);
	}

	@PostMapping("/jpa/users/{username}/classmates")
	public ResponseEntity<Void> createClassmate(@PathVariable String username, @RequestBody Classmate classmate) {
		classmate.setUsername(username);
		Classmate createdClassmate = classmateJpaRepository.save(classmate);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdClassmate.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}
