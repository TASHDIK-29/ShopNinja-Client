import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelUpdateForm from "../../../components/forms/ParcelUpdateForm";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SectionHeading from "../../../shared/SectionHeading";

const UpdateParcel = () => {

    const { id } = useParams();
    console.log(id);

    const [updateParcel, setUpdateParcel] = useState({});

    const axiosSecure = useAxiosSecure();

    const { data: parcel = {} } = useQuery({
        queryKey: ['parcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/parcel/${id}`);

            return res.data;
        }
    })

    console.log('single : ',parcel);


    // Update parcel data 
    // useEffect(() => {
    //     if (parcel.parcelWeight > 0) {
    //         axiosSecure.patch(`/parcels/${id}`, updateParcel)
    //             .then(res => {
    //                 console.log(res.data);

    //                 if (res.data.modifiedCount) {
    //                     Swal.fire({
    //                         position: "top-center",
    //                         icon: "success",
    //                         title: "Parcel updated successfully. Please wait for admin approval",
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     });
    //                 }
    //             })
    //     }
    // }, [updateParcel])

    return (
        <div>
            <SectionHeading heading={'Update Your Parcel'}></SectionHeading>
            <ParcelUpdateForm parcel={parcel} setUpdateParcel={setUpdateParcel} id={id}></ParcelUpdateForm>
        </div>
    );
};

export default UpdateParcel;