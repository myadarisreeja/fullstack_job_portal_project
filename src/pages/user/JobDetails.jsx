import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";

function JobDetails(){

const { id } = useParams();
const [job,setJob] = useState(null);

useEffect(()=>{

API.get(`/jobs/${id}`)
.then(res=>{
setJob(res.data);
});

},[id]);

if(!job){
return <h2>Loading job details...</h2>;
}

return(

<div className="job-details-container">

<h1 className="job-title">{job.role}</h1>
<h2 className="company-name">{job.company}</h2>

<div className="job-info">

<p><b>Posted Date:</b> {job.postedDate}</p>
<p><b>Apply Before:</b> {job.endDate}</p>

</div>

<div className="job-description">

<h3>Job Description</h3>
<p>{job.description}</p>

</div>

<div className="apply-section">

<a href={job.applyLink} target="_blank" rel="noreferrer">
<button className="apply-btn">
Apply on Company Website
</button>
</a>

</div>

</div>

);

}

export default JobDetails;