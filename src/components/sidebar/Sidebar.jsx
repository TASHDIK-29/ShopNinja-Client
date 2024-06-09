import { Link, NavLink } from "react-router-dom";
import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaSearch, FaStar, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import { FaBookJournalWhills, FaMoneyBill, FaSpoon } from "react-icons/fa6";
import { MdOutlineRestaurantMenu, MdPhone } from "react-icons/md";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import useUserRole from "../../hooks/useUserRole";
import { TbTruckDelivery } from "react-icons/tb";

const Sidebar = () => {

    // TODO : get isAdmin value from Db
    // const isAdmin = true;
    // const [isAdmin] = useAdmin();
    // console.log('from dashboard', isAdmin);

    const [role] = useUserRole();
    console.log('Role = ', role);


    // Responsive
    const [isActive, setActive] = useState(true)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <h1 className="flex items-center gap-2 text-2xl text-blue-400 font-semibold">
                                <TbTruckDelivery className="text-3xl text-orange-500" />
                                ShopNinja
                            </h1>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div className={`w-64 min-h-screen h-full bg-blue-300 z-50 md:fixed absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}>
                <ul className="pl-4">
                    {/* {({ isActive }) => isActive ? 'text-lg text-rose-700 font-bold my-3' : 'text-lg dark:text-gray-600 font-bold my-3'} */}
                    {
                        role === 'admin' ? <>
                            <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                to='/dashboard/adminHome'>Statistics</NavLink></li>
                            <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                to='/dashboard/allParcels'>All Parcels</NavLink></li>
                            <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                to='/dashboard/allUsers'>All Users</NavLink></li>
                            <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                to='/dashboard/allDeliveryMans'>All DeliveryMans</NavLink></li>

                        </>
                            : role === 'user' ? <>
                                <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                    className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                    to='/dashboard/userParcel'>My Parcels</NavLink></li>
                                <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                    className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                    to='/dashboard/bookParcel'>Book A Parcel</NavLink></li>
                                <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                    className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                    to='/dashboard/userProfile'>My Profile</NavLink></li>
                            </>
                                : <>
                                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                        className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                        to='/dashboard/deliveryList'>My Delivery List</NavLink></li>
                                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink
                                        className={({ isActive }) => isActive ? 'text-base text-white font-bold' : 'text-base dark:text-gray-600 font-bold'}
                                        to='/dashboard/allReviews'>My Reviews</NavLink></li>
                                </>
                    }
                </ul>
                <div className="divider p-4"></div>
                <ul className="pl-4">
                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink className='text-base text-gray-600 font-bold' to='/'>Home</NavLink></li>

                </ul>
            </div>
        </>
    );
};

export default Sidebar;