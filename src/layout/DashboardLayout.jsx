import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartArrowDown, FaHome, FaList, FaSearch, FaStar, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import { FaBookJournalWhills, FaMoneyBill, FaSpoon } from "react-icons/fa6";
import { MdOutlineRestaurantMenu, MdPhone } from "react-icons/md";
import useUserRole from "../hooks/useUserRole";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    // TODO : get isAdmin value from Db
    const isAdmin = true;
    // const [isAdmin] = useAdmin();
    // console.log('from dashboard', isAdmin);

    const role = useUserRole();
    console.log(role);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="pl-4">
                    {
                        role === 'admin' ? <>
                            <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/dashboard/adminHome'>Admin Home</NavLink></li>

                        </>
                            : role === 'user' ? <>
                                <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
                                <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/dashboard/bookParcel'>Book A Parcel</NavLink></li>
                            </>
                                : <>
                                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/dashboard/deliveryManHome'>Delivery Man Home</NavLink></li>
                                </>
                    }
                </ul>
                <div className="divider p-4"></div>
                <ul className="pl-4">
                    <li className="flex items-center gap-2 p-4"><FaHome /><NavLink to='/'>Home</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><MdOutlineRestaurantMenu /><NavLink to='/menu'>Menu</NavLink></li>
                    <li className="flex items-center gap-2 p-4"><MdPhone /><NavLink to='/'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 px-10 py-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;