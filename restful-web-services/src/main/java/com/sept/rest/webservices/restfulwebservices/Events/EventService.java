package com.sept.rest.webservices.restfulwebservices.Events;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

	private static List<Event> events = new ArrayList<Event>();	
	
	static long idCounter = 0;
	
	
	static {
		
		
		events.add(new Event(++idCounter,"sept","Events 1", "These are the details","RMIT building 80", LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES), LocalDateTime.now().plusDays(4).truncatedTo(ChronoUnit.MINUTES)));
		events.add(new Event(++idCounter,"sept","Events 2", "These are the details", "RMIT building 14", LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES), LocalDateTime.now().plusDays(2).truncatedTo(ChronoUnit.MINUTES)));
		events.add(new Event(++idCounter,"sept","Events 3", "These are the details", "RMIT building 12", LocalDateTime.now().truncatedTo(ChronoUnit.MINUTES), LocalDateTime.now().plusDays(1).truncatedTo(ChronoUnit.MINUTES)));

	}
	
	public List<Event> getEvents(){
		return events;
	}
	
	public List<Event> getEventsByUsername(String username){
		List<Event> ret = new ArrayList<Event>();
		for(Event event: events) {
			if(event.getUsername().equals(username)) {
				ret.add(event);
			}
		}
		return ret;
	}
	
	public boolean deleteById(long id) {
		Event event = getEventById(id);
		if(event == null) {
			return false;
		}else {
			return events.remove(event);
		}
	}
	
	public Event getEventById(long id) {
		for(Event event: events) {
			if(event.getId()== id) {
				return event;
			}
		}
		return null;
	}
	
	public void attendEvent(String username, long id) {
		Event ev = getEventById(id);
		boolean status = ev.getAttendees().contains(username);
		
		if(status) {
			ev.removeAttendee(username);
		}else {
			ev.addAttendee(username);
		}

	}
	
	public boolean addEvent(Event event) {
		event.setId(++idCounter);
		return events.add(event);
	}
	
	public boolean editEvent(long id, Event event) {
		Event rm = getEventById(id);
		if(rm != null) {
			events.remove(rm);
			return events.add(event);
		}
		return false;
	}
	
}
