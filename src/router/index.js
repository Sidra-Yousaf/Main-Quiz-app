import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Home from "../pages/Home/Home";
import AdminDashboard from "../Dashboard/AdminDashboard";
import Dasboard from "../Dashboard/Dasboard";
import UserProfile from "../Modules/UserProfile/UserProfile";
import Logout from "../pages/Logout/Logout";
import Table from "../Users/Table/Table";
import AddUser from "../Users/Adduser/AddUser";
import DeleteUser from "../Users/DeleteUser/DeleteUser";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/dashboard",
    element: <Dasboard />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "/deleteuser",
    element: <DeleteUser />,
  },
  {
    path: "/edituser",
    element: <EditUser />,
  },
];

const router = createBrowserRouter(routes);
export default router;
