import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import Dashboard from "../layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import UserHome from "../pages/Dashboard/user/UserHome";
import DeliveryMan from "../pages/Dashboard/deliveryMan/DeliveryMan";

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
        // Admin
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },

        // User
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },

        // Delivery Man
        {
          path: 'deliveryManHome',
          element: <DeliveryMan></DeliveryMan>
        },
      ]
    }
  ]);

