import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import Dashboard from "../layout/DashboardLayout";
import AdminHome from "../pages/Dashboard/admin/AdminHome";
import DeliveryMan from "../pages/Dashboard/deliveryMan/DeliveryMan";
import BookParcel from "../pages/Dashboard/user/BookParcel";
import UserParcels from "../pages/Dashboard/user/UserParcels";
import UserProfile from "../pages/Dashboard/user/UserProfile";
import DeliveryList from "../pages/Dashboard/deliveryMan/DeliveryList";
import AllParcels from "../pages/Dashboard/admin/AllParcels";
import AllUsers from "../pages/Dashboard/admin/AllUsers";
import AllDeliveryMan from "../pages/Dashboard/admin/AllDeliveryMan";
import UpdateParcel from "../pages/Dashboard/user/UpdateParcel";
import AllReviews from "../pages/Dashboard/deliveryMan/AllReviews";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import DeliverymanRoute from "./DeliverymanRoute";

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // Admin
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allParcels',
          element: <AdminRoute><AllParcels></AllParcels></AdminRoute>
        },
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'allDeliveryMans',
          element: <AdminRoute><AllDeliveryMan></AllDeliveryMan></AdminRoute>
        },

        // User
        {
          path: 'userParcel',
          element: <UserRoute><UserParcels></UserParcels></UserRoute>
        },
        {
          path: 'bookParcel',
          element: <UserRoute><BookParcel></BookParcel></UserRoute>
        },
        {
          path: 'userProfile',
          element: <UserRoute><UserProfile></UserProfile></UserRoute>
        },
        {
          path: 'update/:id',
          element: <UserRoute><UpdateParcel></UpdateParcel></UserRoute>
        },

        // Delivery Man
        {
          path: 'deliveryList',
          element: <DeliverymanRoute><DeliveryList></DeliveryList></DeliverymanRoute>
        },
        {
          path: 'allReviews',
          element: <DeliverymanRoute><AllReviews></AllReviews></DeliverymanRoute>
        },
      ]
    }
  ]);

