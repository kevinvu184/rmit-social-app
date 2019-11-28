package com.sept.rest.webservices.restfulwebservices.classmate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.sept.rest.webservices.restfulwebservices.classmate.Classmate;

@Entity
public class Classmate {

	@Id
	@GeneratedValue
	private Long id;
	private String username;

	private Long snumber;
	private String name;
	private String mail;
	private String course;
	private String link;
	private String image;

	public Classmate() {

	}

	public Classmate(Long id, String username, Long snumber, String name, String mail, String course, String link,
			String image) {
		super();
		this.id = id;
		this.snumber = snumber;
		this.username = username;
		this.name = name;
		this.mail = mail;
		this.course = course;
		this.link = link;
		this.image = image;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSnumber() {
		return snumber;
	}

	public void setSnumber(Long snumber) {
		this.snumber = snumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Classmate other = (Classmate) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
