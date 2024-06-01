import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import Dashboard from "../layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        }
      ]
    }
  ]);

