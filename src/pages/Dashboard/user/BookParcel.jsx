import { useEffect, useState } from "react";
import ParcelForm from "../../../components/forms/ParcelForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const BookParcel = () => {

    const { user } = useAuth();

    const [parcel, setParcel] = useState({});
    // console.log(parcel);

    const axiosSecure = useAxiosSecure();

    // Send parcel data to server
    useEffect(() => {
        if (parcel.parcelWeight > 0) {
            axiosSecure.post('/parcels', parcel)
                .then(res => {
                    console.log(res.data);

                })
        }
    }, [parcel])


    return (
        <div>
            <h1>Book Your Parcel</h1>
            <ParcelForm setParcel={setParcel}></ParcelForm>
        </div>
    );
};

export default BookParcel;