
const AdminAllDeliveryManTable = ({deliveryMans, refetch}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Deliveryman’s Name</th>
                        <th>Deliveryman’s Phone</th>
                        <th>Number of parcel Delivered</th>
                        <th>Avg. Review</th>
                        
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
                            
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AdminAllDeliveryManTable;