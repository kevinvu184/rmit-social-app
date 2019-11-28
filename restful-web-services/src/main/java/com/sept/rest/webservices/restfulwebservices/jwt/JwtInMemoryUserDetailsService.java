package com.sept.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "sept",
				"$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));

		inMemoryUserList.add(new JwtUserDetails(2L, "Kevin",
				"$2a$10$/SbTriCQouFfbMCWwRh4eeDpSsF9vpOUNcgU1H/XlSgy1w0fPmxu2", "ROLE_USER_2"));

		inMemoryUserList.add(new JwtUserDetails(1L, "Joshua",
				"", "ROLE_USER_2"));

		inMemoryUserList.add(new JwtUserDetails(1L, "TestUser",
				"$2a$10$1lDDONjTdh6aeNdNPx9Ya.DTzC70omikY7zKYRjbrdVDXUNz0X2Ci", "ROLE_USER_2"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

}
