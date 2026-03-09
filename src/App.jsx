import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/user/Dashboard";
import JobDetails from "./pages/user/JobDetails";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddJob from "./pages/admin/AddJob";
import ManageJobs from "./pages/admin/ManageJobs";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/admin-login" element={<AdminLogin/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>

<Route
path="/job/:id"
element={
<ProtectedRoute role="USER">
<JobDetails/>
</ProtectedRoute>
}
/>

<Route
path="/admin"
element={
<ProtectedRoute role="ADMIN">
<AdminDashboard/>
</ProtectedRoute>
}
/>

<Route
path="/add-job"
element={
<ProtectedRoute role="ADMIN">
<AddJob/>
</ProtectedRoute>
}
/>

<Route
path="/manage-jobs"
element={
<ProtectedRoute role="ADMIN">
<ManageJobs/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

);

}

export default App;