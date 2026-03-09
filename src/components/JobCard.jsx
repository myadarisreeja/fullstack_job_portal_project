import { Link } from "react-router-dom";

function JobCard({job}){

return(

<div className="job-card">

<h3>{job.company}</h3>

<h4 className="role">{job.role}</h4>

<div className="job-info">
<p>Posted: {job.postedDate}</p>
<p>Apply Before: {job.endDate}</p>
</div>

<Link to={`/job/${job.id}`}>
<button className="details-btn">View Details</button>
</Link>

</div>

);

}

export default JobCard;