import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const ParcelUpdateForm = ({parcel, setUpdateParcel}) => {

    const { user } = useAuth();

    const [startDate, setStartDate] = useState(new Date());

    const [weight, setWeight] = useState(parcel?.parcelWeight);
    const [price, setPrice] = useState(parcel?.price);

    useEffect( () =>{

        if (weight === 0) {
            setPrice(0);
        }
        else if (weight === 1) {
            setPrice(50);
        }
        else if (weight === 2) {
            setPrice(100);
        }
        else {
            setPrice(150);
        }
    }, [weight])

    const handelBook = e => {
        e.preventDefault();

        const form = e.target;

        const userName = form.userName.value;
        const email = form.email.value;
        const userPhone = form.userPhone.value;
        const parcelType = form.parcelType.value;
        const parcelWeight = parseFloat(form.parcelWeight.value);
        const deliveryDate = form.deliveryDate.value;
        const bookingDate = new Date().toLocaleDateString();
        const receiverName = form.receiverName.value;
        const receiverPhone = form.receiverPhone.value;
        const deliveryAddress = form.deliveryAddress.value;
        const latitude = parseFloat(form.latitude.value);
        const longitude = parseFloat(form.longitude.value);

        
        const parcel = {
            userName,
            email,
            userPhone,
            parcelType,
            parcelWeight,
            deliveryDate,
            bookingDate,
            receiverName,
            receiverPhone,
            deliveryAddress,
            latitude,
            longitude,
            price,
            status: 'pending'
        }

        console.log(parcel);

        setUpdateParcel(parcel);

        

    }


    const handelPrice = e => {
        setWeight(parseFloat(e.target.value))
        
    }
    console.log('weight = ',weight, 'price = ',price);



    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            {/* <h2 className="text-lg font-semibold text-gray-700 capitalize ">Account settings</h2> */}

            <form onSubmit={handelBook}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Username</label>
                        <input
                            name="userName"
                            defaultValue={user?.displayName}
                            readOnly
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="emailAddress">Email Address</label>
                        <input
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Phone</label>
                        <input
                            name="userPhone"
                            defaultValue={parcel?.userPhone}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="emailAddress">Parcel Type</label>
                        <input
                            name="parcelType"
                            defaultValue={parcel?.parcelType}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Parcel Weight</label>
                        <input
                            name="parcelWeight"
                            // defaultValue={parcel?.parcelWeight}
                            type="number"
                            value={weight}
                            onChange={handelPrice}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-gray-700 " htmlFor="username">Delivery Date</label>
                        {/* <input
                            name="username"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        /> */}
                        <DatePicker name="deliveryDate" className="p-2 w-full rounded-md border border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={parcel?.deliveryDate ? parcel?.deliveryDate : startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="emailAddress">Receiver’s Name</label>
                        <input
                            name="receiverName"
                            defaultValue={parcel?.receiverName}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Receiver's Phone Number</label>
                        <input
                            name="receiverPhone"
                            defaultValue={parcel?.receiverPhone}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="text-gray-700 " htmlFor="emailAddress">Delivery Address</label>
                        <input
                            name="deliveryAddress"
                            defaultValue={parcel?.deliveryAddress}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label className="text-gray-700 " htmlFor="emailAddress">Address Latitude</label>
                        <input
                            name="latitude"
                            defaultValue={parcel?.latitude}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 " htmlFor="username">Address Longitude</label>
                        <input
                            name="longitude"
                            defaultValue={parcel?.longitude}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>


                </div>

                <div className="flex justify-between mt-6">
                    {/* <h1>Price : {weight === 0 ? 0 : weight === 1 ? 50 : weight === 2 ? 100 : 150}</h1> */}
                    <h1>Price : {price}</h1>
                    <input className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" type="submit" value="Book Now" />
                </div>
            </form>
        </section>
    );
};

export default ParcelUpdateForm;