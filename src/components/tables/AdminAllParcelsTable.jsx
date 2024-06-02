
const AdminAllParcelsTable = ({ parcels }) => {
    console.log('parcels :', parcels);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>User’s Name</th>
                        <th>User’s Phone</th>
                        <th>Booking Date</th>
                        <th>Requested Delivery Date</th>
                        <th>Cost</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcels.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel?.userName}</td>
                            <td>{parcel?.userPhone}</td>
                            <td>{parcel?.bookingDate}</td>
                            <td>{parcel?.deliveryDate}</td>
                            <td>{parcel?.price}</td>
                            <td>{parcel?.status}</td>
                            <td><button className="btn">Manage</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AdminAllParcelsTable;