import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminAllUsersTable from "../../../components/tables/AdminAllUsersTable";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionHeading from "../../../shared/SectionHeading";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

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
        <div className="relative min-h-screen">
            <Helmet>
                <title>All User || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'All Users'}></SectionHeading>
            <div>
                <AdminAllUsersTable users={users} refetch={refetch}></AdminAllUsersTable>
            </div>
            <div className="space-x-2 absolute -bottom-8 lg:bottom-5 w-full flex justify-center">
                {
                    pages.map(i => <button className={currentPage === i ? 'bg-blue-500 text-white font-semibold px-3 py-1 rounded-full  ' : 'px-3 py-1 rounded-full border text-orange-400 font-medium border-orange-400'} onClick={() => setCurrentPage(i)} key={i}>{i}</button>)
                }
            </div>
        </div>
    );
};

export default AllUsers;