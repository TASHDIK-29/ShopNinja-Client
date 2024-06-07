import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminAllUsersTable from "../../../components/tables/AdminAllUsersTable";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUsers = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/usersCount')
            .then(res => {
                console.log('Count = ', res.data.count);
                setCount(res.data.count)
            })

    }, [])

    const numberOfPages = Math.ceil(count / 5);
    const pages = [...Array(numberOfPages).keys()];

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', currentPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?page=${currentPage}`);

            return res.data;
        }
    })

    return (
        <div className="relative h-screen ">
            Total users = {users.length}
            <AdminAllUsersTable users={users} refetch={refetch}></AdminAllUsersTable>
            <div className="space-x-2 absolute bottom-5 w-full flex justify-center">
                {
                    pages.map(i => <button className={currentPage === i ? 'bg-blue-500 px-3 py-1 rounded-full  ' : 'px-3 py-1 rounded-full border border-gray-400'} onClick={() => setCurrentPage(i)} key={i}>{i}</button>)
                }
            </div>
        </div>
    );
};

export default AllUsers;