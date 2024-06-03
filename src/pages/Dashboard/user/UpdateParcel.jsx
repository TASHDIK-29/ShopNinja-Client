import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelUpdateForm from "../../../components/forms/ParcelUpdateForm";
import { useState } from "react";

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

    return (
        <div>
            update now
            <ParcelUpdateForm parcel={parcel} setUpdateParcel={setUpdateParcel}></ParcelUpdateForm>
        </div>
    );
};

export default UpdateParcel;