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
        {
          path: 'allParcels',
          element: <AllParcels></AllParcels>
        },
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'allDeliveryMans',
          element: <AllDeliveryMan></AllDeliveryMan>
        },

        // User
        {
          path: 'userParcel',
          element: <UserParcels></UserParcels>
        },
        {
          path: 'bookParcel',
          element: <BookParcel></BookParcel>
        },
        {
          path: 'userProfile',
          element: <UserProfile></UserProfile>
        },
        {
          path: 'update/:id',
          element: <UpdateParcel></UpdateParcel>
        },

        // Delivery Man
        {
          path: 'deliveryList',
          element: <DeliveryList></DeliveryList>
        },
        {
          path: 'allReviews',
          element: <AllReviews></AllReviews>
        },
      ]
    }
  ]);

