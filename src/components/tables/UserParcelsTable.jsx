
const UserParcelsTable = ({ parcels }) => {
    console.log(parcels);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parcel Type</th>
                        <th>Requested Delivery Date</th>
                        <th>Approximate Delivery Date,</th>
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
                            <td>{parcel?.deliveryManId}</td>
                            <td>{parcel?.status}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default UserParcelsTable;