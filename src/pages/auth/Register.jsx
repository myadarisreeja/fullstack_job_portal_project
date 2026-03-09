import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleRegister = async () => {

try{

await API.post("/auth/register",{
name,
email,
password
});

alert("Registered Successfully");

navigate("/login");   // 🔥 redirect to login

}catch(err){

alert("Registration Failed");

}

};

return(

<div className="auth-container">

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

</div>

);

}

export default Register;