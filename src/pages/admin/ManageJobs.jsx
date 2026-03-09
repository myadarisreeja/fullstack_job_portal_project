import { useEffect, useState } from "react";
import API from "../../services/api";

function ManageJobs(){

const [jobs,setJobs] = useState([]);

useEffect(()=>{
loadJobs();
},[]);

const loadJobs = () => {
API.get("/jobs").then(res=>{
setJobs(res.data);
});
};

const deleteJob = async (id) => {

await API.delete(`/jobs/${id}`);

loadJobs();

};

return(

<div>

<h2>Manage Jobs</h2>

{jobs.map(job=>(

<div key={job.id} className="job-card">

<h3>{job.company}</h3>
<p>{job.role}</p>

<button onClick={()=>deleteJob(job.id)}>
Delete
</button>

</div>

))}

</div>

)

}

export default ManageJobs;