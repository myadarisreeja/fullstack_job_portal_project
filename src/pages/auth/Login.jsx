import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleLogin = async () => {

try{

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("user", JSON.stringify(res.data));

if(res.data.role === "ADMIN"){

navigate("/admin");

}else{

navigate("/dashboard");

}

}catch(err){

alert("Invalid Email or Password");

}

};

return(

<div className="auth-container">

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

<p>
Don't have account?
<a href="/register"> Register</a>
</p>

</div>

);

}

export default Login;