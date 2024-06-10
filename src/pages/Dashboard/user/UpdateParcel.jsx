import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelUpdateForm from "../../../components/forms/ParcelUpdateForm";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SectionHeading from "../../../shared/SectionHeading";
import { Helmet } from "react-helmet-async";

const UpdateParcel = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

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

    // console.log('single : ',parcel);


    return (
        <div>
            <Helmet>
                <title>Update || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'Update Your Parcel'}></SectionHeading>
            <ParcelUpdateForm parcel={parcel} setUpdateParcel={setUpdateParcel} id={id}></ParcelUpdateForm>
        </div>
    );
};

export default UpdateParcel;