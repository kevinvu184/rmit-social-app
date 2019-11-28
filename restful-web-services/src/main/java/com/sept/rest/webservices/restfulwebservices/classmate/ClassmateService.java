package com.sept.rest.webservices.restfulwebservices.classmate;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ClassmateService {
	private static List<Classmate> classmates = new ArrayList<>();

	public List<Classmate> findAll() {
		return classmates;
	}

	public Classmate save(Classmate classmate) {
		if (classmate.getId() == -1 || classmate.getId() == 0) {
			classmates.add(classmate);
		} else {
			deleteById(classmate.getId());
			classmates.add(classmate);
		}
		return classmate;
	}

	public Classmate deleteById(long id) {
		Classmate classmate = findById(id);
		if (classmate == null)
			return null;
		if (classmates.remove(classmate)) {
			return classmate;
		}
		return null;
	}

	public Classmate findById(long id) {
		for (Classmate classmate : classmates) {
			if (classmate.getId() == id) {
				return classmate;
			}
		}
		return null;
	}
}
