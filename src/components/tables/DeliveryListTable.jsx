import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DeliveryListTable = ({ deliveryList, refetch }) => {

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
                        text: "Your canceled the parcel.",
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
                        deliveryList.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel?.userName}</td>
                            <td>{parcel?.userPhone}</td>
                            <td>{parcel?.receiverName}</td>
                            <td>{parcel?.receiverPhone}</td>
                            <td>{parcel?.deliveryAddress}</td>
                            <td>{parcel?.deliveryDate}</td>
                            <td>{parcel?.approxDeliveryDate}</td>
                            <td>{parcel?.status}</td>
                            <td><button className="btn">View</button></td>
                            <td>
                                {
                                    parcel?.status === 'On The Way' ?
                                        <button
                                            onClick={() => handelParcelCancel(parcel._id, 'Canceled')}
                                            className="btn">Cancel</button>
                                        : <button disabled className="btn cursor-not-allowed">Cancel</button>
                                }
                            </td>
                            <td>
                                {
                                    parcel?.status === 'On The Way' ?
                                        <button
                                            // onClick={() => handelParcelCancel(parcel._id)}
                                            className="btn">Delivered</button>
                                        : <button disabled className="btn cursor-not-allowed">Delivered</button>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DeliveryListTable;