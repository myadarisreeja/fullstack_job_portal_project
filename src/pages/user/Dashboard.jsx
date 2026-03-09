import { useEffect,useState } from "react";
import API from "../../services/api";
import JobCard from "../../components/JobCard";

function Dashboard(){

const [jobs,setJobs]=useState([]);

useEffect(()=>{

API.get("/jobs")
.then(res=>{
setJobs(res.data);
});

},[]);

return(

<div className="job-container">

{jobs.map(job => (
<JobCard key={job.id} job={job}/>
))}
</div>

);

}

export default Dashboard;