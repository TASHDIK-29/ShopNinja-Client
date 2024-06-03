
const AdminAllDeliveryManTable = ({deliveryMans, refetch}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>User’s Name</th>
                        <th>User’s Phone</th>
                        <th>Number of parcel Booked</th>
                        <th>Total Spent Amount</th>
                        <th>Make Admin</th>
                        <th>Make D Man</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deliveryMans.map((deliveryMan, index) => <tr key={deliveryMan._id}>
                            <th>{index + 1}</th>
                            <td>{deliveryMan?.name}</td>
                            <td>{deliveryMan?.phone}</td>
                            <td>{deliveryMan?.totalBookings}</td>
                            <td>{deliveryMan?.totalSpent}</td>
                            <td><button className='btn'>Admin</button></td>
                            <td><button className='btn'>Delivery Man</button></td>

                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AdminAllDeliveryManTable;