import { ImCancelCircle } from "react-icons/im";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdReviews } from "react-icons/md";
import { BsStripe } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import UserReviewModal from "../modals/UserReviewModal";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const UserParcelsTable = ({ parcels, refetch }) => {
    console.log(parcels);

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])


    const axiosSecure = useAxiosSecure();

    const handelParcelCancel = async (id, status) => {
        console.log('id', id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/parcel/cancel/${id}?status=${status}`)

                console.log(res.data);

                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        title: "Canceled!",
                        text: "Your parcel has been canceled.",
                        icon: "success"
                    });

                }


            }
        });




    }



    // Review 
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');

    const handelReview = deliveryManId => {
        setId(deliveryManId);
        setIsOpen(true);
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parcel Type</th>
                        <th>Requested <br /> Delivery Date</th>
                        <th>Approximate <br /> Delivery Date,</th>
                        <th>Booking Date</th>
                        <th>Delivery Men ID</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Cancel</th>
                        <th>Review</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcels.map((parcel, index) => <tr key={parcel._id} data-aos="fade-up">
                            <th>{index + 1}</th>
                            <td>{parcel?.parcelType}</td>
                            <td>{parcel?.deliveryDate}</td>
                            <td>{parcel?.approxDeliveryDate}</td>
                            <td>{parcel?.bookingDate}</td>
                            <td>
                                {parcel?.deliveryManId ? parcel.deliveryManId.slice(0, 4) : ''}
                                {parcel?.deliveryManId ? '***' : ''}
                                {parcel?.deliveryManId ? parcel.deliveryManId.slice(20, parcel.deliveryManId.length) : ''}
                            </td>
                            {/* <td className="capitalize">{parcel?.status}</td> */}
                            <td><span className={`${parcel?.status === 'pending' ? 'border border-yellow-400 text-yellow-300' : parcel?.status === 'Delivered' ? 'border border-green-400 text-green-400' : parcel?.status === 'On The Way' ? 'border border-blue-400 text-blue-400' : parcel?.status === 'Canceled' ? 'border border-red-400 text-red-400' : ''} px-2 py-1 rounded-md font-semibold capitalize`}>{parcel?.status}</span></td>
                            <td>
                                {parcel?.status != 'pending' ?
                                    <button disabled className="cursor-not-allowed">
                                        <GrDocumentUpdate className="text-lg text-green-600" />
                                    </button>
                                    : <Link to={`/dashboard/update/${parcel?._id}`}>
                                        <GrDocumentUpdate className="text-lg text-green-600" />
                                    </Link>
                                }
                            </td>
                            <td>
                                <button onClick={() => handelParcelCancel(parcel?._id, 'Canceled')} disabled={parcel?.status != 'pending'}>
                                    <ImCancelCircle
                                        className={`text-lg ${parcel?.status != 'pending' ? 'cursor-not-allowed' : 'cursor-pointer'} text-red-500`} />
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handelReview(parcel?.deliveryManId)}
                                    disabled={parcel?.status != 'Delivered'}>
                                    <MdReviews
                                        className={`text-lg ${parcel?.status != 'Delivered' ? 'cursor-not-allowed' : 'cursor-pointer'} text-orange-400`} />
                                </button>
                            </td>
                            {parcel?.paymentStatus ?
                                <td><span className="text-lg font-bold text-gradient">Paid</span></td>
                                : <td>
                                    <Link to={`/dashboard/payment/${parcel._id}`}>
                                        <button disabled={parcel?.status != 'Delivered'}>
                                            <BsStripe
                                                className={`text-lg ${parcel?.status != 'Delivered' ? 'cursor-not-allowed' : 'cursor-pointer'} text-blue-600`} />
                                        </button>
                                    </Link>
                                </td>}
                        </tr>)
                    }

                </tbody>
            </table>


            {
                isOpen && <UserReviewModal setIsOpen={setIsOpen} id={id}></UserReviewModal>
            }
        </div>
    );
};

export default UserParcelsTable;