import { ImCancelCircle } from "react-icons/im";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdReviews } from "react-icons/md";
import { BsStripe } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const UserParcelsTable = ({ parcels, refetch }) => {
    console.log(parcels);

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
        }).then(async(result) => {
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
                        parcels.map((parcel, index) => <tr key={parcel._id}>
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
                            <td className="uppercase">{parcel?.status}</td>
                            <td>
                                {parcel?.status != 'pending' ?
                                    <button disabled className="cursor-not-allowed">
                                        <GrDocumentUpdate className="text-lg" />
                                    </button>
                                    : <Link to={`/dashboard/update/${parcel?._id}`}>
                                        <GrDocumentUpdate className="text-lg" />
                                    </Link>
                                }
                            </td>
                            <td>
                                <button onClick={() => handelParcelCancel(parcel?._id, 'Canceled')} disabled={parcel?.status != 'pending'}>
                                    <ImCancelCircle
                                        className={`text-lg ${parcel?.status != 'pending' ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
                                </button>
                            </td>
                            <td>
                                <button disabled={parcel?.status != 'delivered'}>
                                    <MdReviews
                                        className={`text-lg ${parcel?.status != 'delivered' ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
                                </button>
                            </td>
                            <td>
                                <button disabled={parcel?.status != 'delivered'}>
                                    <BsStripe
                                        className={`text-lg ${parcel?.status != 'delivered' ? 'cursor-not-allowed' : 'cursor-pointer'}`} />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default UserParcelsTable;