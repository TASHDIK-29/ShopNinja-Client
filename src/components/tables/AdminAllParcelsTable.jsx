import { useEffect, useState } from "react";
import AdminManageParcelModal from "../modals/AdminManageParcelModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAllDeliveryMan from "../../hooks/useAllDeliveryMan";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AdminAllParcelsTable = ({ parcels, refetch }) => {
    console.log('parcels :', parcels);

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])

    const [isOpen, setIsOpen] = useState(false);

    const [id, setId] = useState('');

    const [patchData, setPatchData] = useState({});

    const axiosSecure = useAxiosSecure();


    // Get all parcels
    // const { data: deliveryMans = [] } = useQuery({
    //     queryKey: ['deliveryMan'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/deliveryMan`);

    //         return res.data;
    //     }
    // })

    const [deliveryMans] = useAllDeliveryMan();

    const handelManage = async (id) => {
        setIsOpen(true);

        setId(id);

        console.log(id);

    }

    useEffect(() => {
        axiosSecure.put(`/parcels/${id}`, patchData)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Parcel On The Way!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }, [patchData])

    return (
        <div className="overflow-x-auto">
            <table className="table overflow-x-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>User’s Name</th>
                        <th>User’s Phone</th>
                        <th>Booking Date</th>
                        <th>Requested Delivery Date</th>
                        <th>Cost</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcels.map((parcel, index) => <tr key={parcel._id} data-aos="fade-up">
                            <th>{index + 1}</th>
                            <td>{parcel?.userName}</td>
                            <td>{parcel?.userPhone}</td>
                            <td>{parcel?.bookingDate}</td>
                            <td>{parcel?.deliveryDate}</td>
                            <td>{parcel?.price}</td>
                            <td className="capitalize"><span className={`${parcel?.status === 'pending' ? 'border border-yellow-400 text-yellow-300' : parcel?.status === 'Delivered' ? 'border border-green-400 text-green-400' : parcel?.status === 'On The Way' ? 'border border-blue-400 text-blue-400' : parcel?.status === 'Canceled' ? 'border border-red-400 text-red-400' : ''} px-2 py-1 rounded-md font-semibold `}>
                                {/* {parcel?.status === 'On The Way' ? `O.T.Way` : parcel?.status} */}
                                {parcel?.status}
                            </span></td>
                            <td>
                                {
                                    parcel?.status === 'pending' ? <button

                                        onClick={() => handelManage(parcel?._id)}
                                        className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                    >
                                        Manage
                                    </button>
                                        : <button
                                            disabled={parcel?.status != 'pending'}

                                            className="cursor-not-allowed px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                        >
                                            Manage
                                        </button>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>

            {
                isOpen && <AdminManageParcelModal setIsOpen={setIsOpen} setPatchData={setPatchData} deliveryMans={deliveryMans}></AdminManageParcelModal>
            }
        </div>
    );
};

export default AdminAllParcelsTable;