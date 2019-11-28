package com.sept.rest.webservices.restfulwebservices.registration;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class RegistrationController {

   @GetMapping(path = "/register")
   public String Register() {
       return "Successfully hit /register api endpoint";
   }

}
