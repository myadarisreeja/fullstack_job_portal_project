package com.jobportal.job_portal_backend.controller;


import org.springframework.web.bind.annotation.*;
import com.jobportal.job_portal_backend.dao.*;
import com.jobportal.job_portal_backend.repository.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

private final UserRepository userRepository;

public AuthController(UserRepository userRepository){
this.userRepository = userRepository;
}

@PostMapping("/register")
public User register(@RequestBody User user){

user.setRole("USER");

return userRepository.save(user);
}

@PostMapping("/login")
public User login(@RequestBody User user){

User existingUser = userRepository.findByEmail(user.getEmail());

if(existingUser != null && existingUser.getPassword().equals(user.getPassword())){
return existingUser;
}

throw new RuntimeException("Invalid email or password");

}

}
