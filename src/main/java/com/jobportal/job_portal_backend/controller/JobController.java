
package com.jobportal.job_portal_backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.jobportal.job_portal_backend.dao.Job;
import com.jobportal.job_portal_backend.repository.JobRepository;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

private final JobRepository jobRepository;

public JobController(JobRepository jobRepository){
this.jobRepository = jobRepository;
}

@GetMapping
public List<Job> getAllJobs(){
return jobRepository.findAll();
}

@GetMapping("/{id}")
public Job getJobById(@PathVariable Long id){
return jobRepository.findById(id).orElse(null);
}

@PostMapping
public Job addJob(@RequestBody Job job){
return jobRepository.save(job);
}

@DeleteMapping("/{id}")
public void deleteJob(@PathVariable Long id){
jobRepository.deleteById(id);
}

}