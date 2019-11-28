package com.sept.rest.webservices.restfulwebservices.Events;

import java.net.URI;
import java.time.LocalDateTime;
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

import com.sept.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventController {

	
	@Autowired
	private EventService eventService;

	
	@GetMapping("/jpa/users/{username}/events")
	public List<Event> getAllEvents(){
		return eventService.getEvents();
	}
	
	@GetMapping("/jpa/users/{username}/myevents")
	public List<Event> getEventByUsername(@PathVariable String username){
		return eventService.getEventsByUsername(username);
	}
	
	@GetMapping("/jpa/users/{username}/events/{eventId}")
	public Event getEvent(@PathVariable int eventId) {
		return eventService.getEventById(eventId);
	}
	
	@DeleteMapping("/jpa/users/{username}/myevents/{id}")
	public void deleteEvent(@PathVariable long id) {
		System.out.println("delete called on " +id );
		eventService.deleteById(id);
	}
	
	@PostMapping("/jpa/users/{username}/myevents/-1")
	public ResponseEntity<Event> createEvent(@PathVariable String username, @RequestBody Event event) {

		event.setUsername(username);
		eventService.addEvent(event);
		return new ResponseEntity<Event>(event, HttpStatus.OK);
	}
	@PutMapping("/jpa/users/{username}/myevents/{id}")
	public ResponseEntity<Event> updateEvent(@PathVariable String username, @PathVariable long id,
			@RequestBody Event event) {

		
		event.setUsername(username);
		
		eventService.editEvent(id, event);	
		
		return new ResponseEntity<Event>(event, HttpStatus.OK);
	}
	
	@PutMapping("/jpa/users/{username}/events/{id}/attend")
	public ResponseEntity<Event> updateAttend(@PathVariable String username, @PathVariable long id, @RequestBody Event event){
		eventService.attendEvent(username, id);
		return new ResponseEntity<Event>(event,HttpStatus.OK);
	}
	
}
