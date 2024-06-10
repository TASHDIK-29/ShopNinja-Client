import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LocationModal from "../modals/LocationModal";
import { useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const DeliveryListTable = ({ deliveryList, refetch }) => {

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const handelParcel = async (id, status) => {
        console.log('id', id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${status} it!`
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/parcel/cancel/${id}?status=${status}`)

                console.log(res.data);

                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        title: `${status}!`,
                        text: `You ${status} the parcel.`,
                        icon: "success"
                    });


                    if (status === 'Delivered') {
                        try {
                            const res = await axiosPublic.put(`/deliveryCount/${user?.email}`)

                            console.log('Delivery count', res.data);
                        } catch (err) {
                            console.log(err);
                        }
                    }

                }


            }
        });




    }


    // Review 
    const [isOpen, setIsOpen] = useState(false);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handelLocation = (lat, long) =>{
        setLatitude(lat);
        setLongitude(long);
        setIsOpen(true);
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Booked <br />User’s Name</th>
                        <th>Booked <br />User’s Phone</th>
                        <th>Receivers <br />Name</th>
                        <th>Receivers <br />phone number</th>
                        <th>Receivers <br />Address</th>
                        <th>Requested <br /> Delivery Date</th>
                        <th>Approximate <br /> Delivery Date,</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Cancel</th>
                        <th>Deliver</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deliveryList.map((parcel, index) => <tr key={parcel._id} data-aos="fade-up">
                            <th>{index + 1}</th>
                            <td>{parcel?.userName}</td>
                            <td>{parcel?.userPhone}</td>
                            <td>{parcel?.receiverName}</td>
                            <td>{parcel?.receiverPhone}</td>
                            <td>{parcel?.deliveryAddress}</td>
                            <td>{parcel?.deliveryDate}</td>
                            <td>{parcel?.approxDeliveryDate}</td>
                            <td>{parcel?.status}</td>
                            <td><button
                            onClick={() => handelLocation(parcel.latitude, parcel.longitude)}
                            >
                                    <MdOutlineLocationOn className="text-2xl text-blue-500" />
                                </button>
                            </td>
                            <td>
                                {
                                    parcel?.status === 'On The Way' ?
                                        <button
                                            onClick={() => handelParcel(parcel._id, 'Canceled')}
                                            className=""><MdCancelPresentation className="text-2xl text-red-500" /></button>
                                        : <button disabled className=" cursor-not-allowed"><MdCancelPresentation className="text-2xl text-red-500" /></button>
                                }
                            </td>
                            <td>
                                {
                                    parcel?.status === 'On The Way' ?
                                        <button
                                            onClick={() => handelParcel(parcel._id, 'Delivered')}
                                            className=""><AiOutlineDeliveredProcedure className="text-2xl text-green-500" /></button>
                                        : <button disabled className=" cursor-not-allowed"><AiOutlineDeliveredProcedure className="text-2xl text-green-500" /></button>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>

            {
                isOpen && <LocationModal setIsOpen={setIsOpen} latitude={latitude} longitude={longitude} ></LocationModal>
            }
        </div>
    );
};

export default DeliveryListTable;