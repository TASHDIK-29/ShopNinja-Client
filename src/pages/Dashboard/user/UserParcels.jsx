import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserParcelsTable from "../../../components/tables/UserParcelsTable";
import { useState } from "react";
import SectionHeading from "../../../shared/SectionHeading";

const UserParcels = () => {

    const [status, setStatus] = useState('');

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', status],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/parcels/${user?.email}?status=${status}`);

            return res.data;
        }
    })

    console.log('parcels : ', parcels);

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <SectionHeading heading={'Your Parcels'}></SectionHeading>

            <div className="flex justify-end py-2">
                {/* Filter Button */}
                <div className="relative inline-block">
                    {/* Dropdown toggle button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-blue-400 focus:outline-none"
                    >
                        <span className="mx-1">Filter By</span>
                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div
                            onClick={() => setIsOpen(false)}
                            className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl "
                            style={{
                                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'scale(100%)' : 'scale(90%)'
                            }}
                        >



                            <button onClick={() => setStatus('pending')} className="w-full block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white">
                                Pending
                            </button>

                            <button onClick={() => setStatus('On The Way')} className="w-full block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white">
                                On The Way
                            </button>

                            <button onClick={() => setStatus('Canceled')} className="w-full block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white">
                                Canceled
                            </button>
                            <button onClick={() => setStatus('Delivered')} className="w-full block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white">
                                Delivered
                            </button>





                        </div>
                    )}
                </div>
            </div>
            
            <UserParcelsTable parcels={parcels} refetch={refetch}></UserParcelsTable>
        </div>
    );
};

export default UserParcels;