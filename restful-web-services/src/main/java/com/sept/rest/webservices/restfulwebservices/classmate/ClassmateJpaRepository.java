package com.sept.rest.webservices.restfulwebservices.classmate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassmateJpaRepository extends JpaRepository<Classmate, Long> {
	List<Classmate> findByUsername(String username);
}