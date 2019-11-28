package com.sept.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class JWTokenGenerator {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		for (int i = 0; i <= 10; i++) {
			String token = encoder.encode("qwerty123!@#");
			System.out.println(token);
		}
	}

}
