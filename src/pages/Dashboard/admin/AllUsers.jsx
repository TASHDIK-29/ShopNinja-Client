import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminAllUsersTable from "../../../components/tables/AdminAllUsersTable";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');

            return res.data;
        }
    })

    return (
        <div>
            Total users = {users.length}
            <AdminAllUsersTable users={users} refetch={refetch}></AdminAllUsersTable>
        </div>
    );
};

export default AllUsers;