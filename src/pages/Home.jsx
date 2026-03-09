import { Link } from "react-router-dom";

function Home(){

return(

<div className="home-banner">

<div className="banner-content">

<h1>Welcome to Job Application Portal</h1>

<p>
Find your dream job from top companies like 
Google, Infosys, Wipro and more.
</p>

<div className="banner-buttons">

<Link to="/login">
<button className="primary-btn">User Login</button>
</Link>

<Link to="/register">
<button className="secondary-btn">Register</button>
</Link>

<Link to="/admin-login">
<button className="admin-btn">Admin</button>
</Link>

</div>

</div>

</div>

);

}

export default Home;