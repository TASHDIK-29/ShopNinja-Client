import { RiAdminFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AdminAllUsersTable = ({ users, refetch }) => {

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])

    console.log('users = ', users);

    const axiosPublic = useAxiosPublic();

    const handelRole = async (user, role) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to make ${user?.name} a ${role} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosPublic.patch(`/changeRole/${user?._id}?role=${role}`)
                console.log(res.data);

                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        title: "Role Changed!",
                        text: `${user?.name} is now ${role}`,
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div className="overflow-x-auto my-10">
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
                        users.map((user, index) => <tr key={user._id} data-aos="fade-up">
                            <th>{index + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.phone}</td>
                            <td>{user?.totalParcel}</td>
                            <td>{user?.totalSpent}</td>
                            <td>
                                <button onClick={() => handelRole(user, 'admin')} className='text-xl text-orange-400'>
                                    <RiAdminFill />
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handelRole(user, 'deliveryMan')} className='text-xl text-orange-400'>
                                    <GrUserWorker />
                                </button>
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AdminAllUsersTable;