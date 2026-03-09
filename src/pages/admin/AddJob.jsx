import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

function AddJob(){

const [job,setJob] = useState({
company:"",
role:"",
description:"",
applyLink:"",
postedDate:"",
endDate:""
});

const navigate = useNavigate();

const handleChange = (e) => {

setJob({
...job,
[e.target.name]: e.target.value
});

};

const handleSubmit = async () => {

try{

await API.post("/jobs",job);

alert("Job Added Successfully");

navigate("/manage-jobs");

}catch(err){

console.error(err);

}

};

return(

<div className="auth-container">

<h2>Add Job</h2>

<input
name="company"
placeholder="Company"
onChange={handleChange}
/>

<input
name="role"
placeholder="Role"
onChange={handleChange}
/>

<textarea
name="description"
placeholder="Job Description"
onChange={handleChange}
/>

<input
name="applyLink"
placeholder="Application Link"
onChange={handleChange}
/>

<input
type="date"
name="postedDate"
onChange={handleChange}
/>

<input
type="date"
name="endDate"
onChange={handleChange}
/>

<button onClick={handleSubmit}>
Add Job
</button>

</div>

);

}

export default AddJob;