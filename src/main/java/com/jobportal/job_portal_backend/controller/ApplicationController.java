package com.jobportal.job_portal_backend.controller;


import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.jobportal.job_portal_backend.dao.*;

import com.jobportal.job_portal_backend.repository.*;

@RestController
@RequestMapping("/applications")
@CrossOrigin
public class ApplicationController {

private final ApplicationRepository applicationRepository;
private final UserRepository userRepository;
private final JobRepository jobRepository;

public ApplicationController(
ApplicationRepository applicationRepository,
UserRepository userRepository,
JobRepository jobRepository
){
this.applicationRepository = applicationRepository;
this.userRepository = userRepository;
this.jobRepository = jobRepository;
}

@PostMapping("/apply")
public Application applyJob(
@RequestParam Long userId,
@RequestParam Long jobId
){

User user = userRepository.findById(userId).orElseThrow();
Job job = jobRepository.findById(jobId).orElseThrow();

Application application = new Application();
application.setUser(user);
application.setJob(job);
application.setStatus("Applied");

return applicationRepository.save(application);
}

@GetMapping("/user/{userId}")
public List<Application> getUserApplications(@PathVariable Long userId){

return applicationRepository.findAll()
.stream()
.filter(a -> a.getUser().getId().equals(userId))
.toList();

}

@DeleteMapping("/{id}")
public void withdrawApplication(@PathVariable Long id){

applicationRepository.deleteById(id);

}

}
