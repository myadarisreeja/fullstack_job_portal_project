package com.jobportal.job_portal_backend.dao;



import jakarta.persistence.*;
import java.time.LocalDate;


@Entity
public class Job {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String company;
private String role;

@Column(length=2000)
private String description;

private String applyLink;

private String postedDate;
private String endDate;

public Long getId(){ return id; }
public void setId(Long id){ this.id=id; }

public String getCompany(){ return company; }
public void setCompany(String company){ this.company=company; }

public String getRole(){ return role; }
public void setRole(String role){ this.role=role; }

public String getDescription(){ return description; }
public void setDescription(String description){ this.description=description; }

public String getApplyLink(){ return applyLink; }
public void setApplyLink(String applyLink){ this.applyLink=applyLink; }

public String getPostedDate(){ return postedDate; }
public void setPostedDate(String postedDate){ this.postedDate=postedDate; }

public String getEndDate(){ return endDate; }
public void setEndDate(String endDate){ this.endDate=endDate; }

}