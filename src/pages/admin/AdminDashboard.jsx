import { Link } from "react-router-dom";

function AdminDashboard(){

return(

<div className="admin-dashboard">

<h1>Admin Dashboard</h1>

<div className="admin-buttons">

<Link to="/add-job">
<button>Add Job</button>
</Link>

<Link to="/manage-jobs">
<button>Manage Jobs</button>
</Link>

</div>

</div>

)

}

export default AdminDashboard;