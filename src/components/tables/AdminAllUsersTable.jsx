import React from 'react';

const AdminAllUsersTable = ({ users, refetch }) => {

    console.log('users = ', users);

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
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.phone}</td>
                            <td>{user?.totalBookings}</td>
                            <td>{user?.totalSpent}</td>
                            <td><button className='btn'>Admin</button></td>
                            <td><button className='btn'>Delivery Man</button></td>
                            
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AdminAllUsersTable;