package com.jobportal.job_portal_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobportal.job_portal_backend.dao.*;

public interface ApplicationRepository extends JpaRepository<Application,Long>{

}
