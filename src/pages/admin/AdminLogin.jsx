import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

function AdminLogin(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async () => {

try{

const res = await API.post("/auth/login",{
email,
password
});

if(res.data.role !== "ADMIN"){
alert("Not an Admin account");
return;
}

localStorage.setItem("user", JSON.stringify(res.data));

navigate("/admin");

}catch(err){

alert("Invalid Admin Credentials");

}

};

return(

<div className="auth-container">

<h2>Admin Login</h2>

<input
placeholder="Admin Email"
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

</div>

)

}

export default AdminLogin;