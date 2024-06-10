import { useEffect, useState } from "react";
import ParcelForm from "../../../components/forms/ParcelForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHeading from "../../../shared/SectionHeading";
import { Helmet } from "react-helmet-async";

const BookParcel = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { user } = useAuth();

    const [parcel, setParcel] = useState({});
    // console.log(parcel);

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    // Send parcel data to server
    useEffect(() => {
        if (parcel.parcelWeight > 0) {
            axiosSecure.post('/parcels', parcel)
                .then(res => {
                    console.log(res.data);

                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Parcel placed successfully. Please wait for admin approval",
                            showConfirmButton: false,
                            timer: 1500
                        });


                        // Update Total Parcel
                        try {
                            axiosPublic.put(`/totalParcel/${user?.email}`)
                            .then(res =>{
                                console.log(res.data);
                            })
                            
                        } catch (err) {
                            console.log(err);
                        }
                    }

                })
        }
    }, [parcel])


    return (
        <div>
            <Helmet>
                <title>Book Parcel || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'Book Your Parcel'}></SectionHeading>
            <ParcelForm setParcel={setParcel}></ParcelForm>
        </div>
    );
};

export default BookParcel;