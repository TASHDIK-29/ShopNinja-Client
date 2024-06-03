
const DeliveryListTable = ({ deliveryList, refetch }) => {
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
                            <td>{parcel?.approxDeliveryDate}</td>
                            <td>{parcel?.bookingDate}</td>
                            <td>{parcel?.status}</td>
                            <td><button className="btn">View</button></td>
                            <td><button className="btn">Cancel</button></td>
                            <td><button className="btn">Delivered</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DeliveryListTable;