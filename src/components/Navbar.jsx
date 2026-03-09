import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar(){

const [user,setUser] = useState(null);

useEffect(()=>{
const storedUser = JSON.parse(localStorage.getItem("user"));
setUser(storedUser);
},[]);

const handleLogout = ()=>{
localStorage.removeItem("user");
window.location.href="/";
};

return(

<nav className="navbar">

<h2 className="logo">JobPortal</h2>

<div className="nav-links">

{/* ADMIN always visible */}
<Link to="/admin-login">Admin</Link>

{/* Not Logged In */}
{!user && (
<>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
)}

{/* USER */}
{user && user.role === "USER" && (
<>
<Link to="/dashboard">Dashboard</Link>
<button className="logout-btn" onClick={handleLogout}>
Logout
</button>
</>
)}

{/* ADMIN */}
{user && user.role === "ADMIN" && (
<>
<Link to="/admin">Admin Panel</Link>
<Link to="/add-job">Add Job</Link>
<Link to="/manage-jobs">Manage Jobs</Link>
<button className="logout-btn" onClick={handleLogout}>
Logout
</button>
</>
)}

</div>

</nav>

);

}

export default Navbar;