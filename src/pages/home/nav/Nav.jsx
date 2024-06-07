import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import useUserRole from "../../../hooks/useUserRole";
import { MdEditNotifications } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Nav = () => {

    const { user, logoutUser } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handelLogout = () => {
        logoutUser();
    }




    // Role

    const role = useUserRole();





    return (
        <nav className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-2 text-2xl text-blue-400 font-semibold">
                    <TbTruckDelivery className="text-3xl text-orange-500" />
                        ShopNinja
                    </h1>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="flex flex-col items-center md:flex-row md:mx-6">
                        <NavLink to='/' className="my-2 text-gray-700 transition-colors duration-300 transform  md:mx-4 md:my-0">
                            Home
                        </NavLink>
                        {role === 'admin' && <Link to='/dashboard/adminHome' className="my-2 text-gray-700 transition-colors duration-300 transform  md:mx-4 md:my-0">
                            Dashboard
                        </Link>}
                        {role === 'user' && <Link to='/dashboard/userParcel' className="my-2 text-gray-700 transition-colors duration-300 transform  md:mx-4 md:my-0">
                            Dashboard
                        </Link>}
                        {role === 'deliveryMan' && <Link to='/dashboard/deliveryList' className="my-2 text-gray-700 transition-colors duration-300 transform  md:mx-4 md:my-0">
                            Dashboard
                        </Link>}
                        <MdEditNotifications />
                    </div>

                    <div className="flex justify-center md:block">

                        {
                            user ? <>

                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1 w-12 h-12 rounded-full">
                                        <img className="w-full rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className="mx-4 cursor-default">{user?.displayName}</li>
                                        <li>
                                            {role === 'admin' && <Link to='/dashboard/adminHome' className=" text-gray-700 transition-colors duration-300 transform">
                                                Dashboard
                                            </Link>}
                                            {role === 'user' && <Link to='/dashboard/userParcel' className=" text-gray-700 transition-colors duration-300 transform">
                                                Dashboard
                                            </Link>}
                                            {role === 'deliveryMan' && <Link to='/dashboard/deliveryList' className=" text-gray-700 transition-colors duration-300 transform">
                                                Dashboard
                                            </Link>}
                                        </li>
                                        <li><button onClick={handelLogout}>Logout</button></li>
                                    </ul>
                                </div>





                            </>
                                : <Link to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;