import {  Outlet } from "react-router-dom";
// import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaSearch, FaStar, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
// import { FaBookJournalWhills, FaMoneyBill, FaSpoon } from "react-icons/fa6";
// import { MdOutlineRestaurantMenu, MdPhone } from "react-icons/md";
// import useUserRole from "../hooks/useUserRole";
// import { useState } from "react";
// import { AiOutlineBars } from "react-icons/ai";
import Sidebar from "../components/sidebar/Sidebar";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    // // TODO : get isAdmin value from Db
    // const isAdmin = true;
    // // const [isAdmin] = useAdmin();
    // // console.log('from dashboard', isAdmin);

    // const [role] = useUserRole();
    // console.log('Role = ', role);


    // // Responsive
    // const [isActive, setActive] = useState(true)

    // // Sidebar Responsive Handler
    // const handleToggle = () => {
    //     setActive(!isActive)
    // }

    return (
        <div className="relative md:flex">

           <div className="">
                <Sidebar></Sidebar>
           </div>

            <div className="flex-1 md:ml-64 px-10 py-2 border border-red-600">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;