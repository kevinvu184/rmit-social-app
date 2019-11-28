package com.sept.rest.webservices.restfulwebservices.Events;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Event {

	@Id
	@GeneratedValue
	private long id;
	private String username;
	@ElementCollection
	private List<String> attendees;
	private String title;
	private String details;
	private String location;
	private LocalDateTime startDate, endDate;
	// private Long creatorNum;
	// ArrayList<user> attendees;

	public Event(long id, String username, String title, String details, String location, LocalDateTime startDate, LocalDateTime endDate) {
		this.id = id;
		this.username = username;
		this.title = title;
		this.details = details;
		this.location = location;
		this.startDate = startDate;
		this.endDate = endDate;
		attendees = new ArrayList<String>();
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public boolean addAttendee(String username) {
		if(!attendees.contains(username)) {
			return attendees.add(username);
		}
		return false;
	}
		
	public boolean removeAttendee(String username) {
		if(attendees.contains(username)) {
			return attendees.remove(username);
		}
		return false;
	}
	
	public List<String> getAttendees(){
		return attendees;
	}
	
	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public boolean isExpired() {
		return endDate.isBefore(LocalDateTime.now());
	}


//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Todo other = (Todo) obj;
//		if (id != other.getId())
//			return false;
//		return true;
//	}
	

}
