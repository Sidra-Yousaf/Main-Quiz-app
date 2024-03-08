import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Home from "../pages/Home/Home";
import AdminDashboard from "../Dashboard/AdminDashboard";
import Dasboard from "../Dashboard/Dasboard";
import UserProfile from "../Modules/UserProfile/UserProfile";
import Logout from "../pages/Logout/Logout";

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
    path: "/logout",
    element: <Logout/>,
  },
];

const router = createBrowserRouter(routes);
export default router;
