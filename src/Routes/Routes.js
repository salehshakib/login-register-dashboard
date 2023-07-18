import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-Register/Login/Login";
import Register from "../Pages/Login-Register/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ]);

export default router