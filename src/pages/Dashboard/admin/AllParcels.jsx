import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminAllParcelsTable from "../../../components/tables/AdminAllParcelsTable";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import SectionHeading from "../../../shared/SectionHeading";


const AllParcels = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', fromDate, toDate],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?fromDate=${fromDate}&toDate=${toDate}`);

            return res.data;
        }
    })

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    

    const handelSearch = e =>{
        e.preventDefault();

        const form = e.target;

        const fromDate = form.fromDate.value;
        const toDate = form.toDate.value;

        setFromDate(fromDate);
        setToDate(toDate);

        console.log('from :', fromDate, 'to ', toDate);
    }

    return (
        <div>
            <SectionHeading heading={'All The Parcels'}></SectionHeading>
            <form onSubmit={handelSearch} className=" my-5">
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-start-6 md:col-span-3 flex flex-col space-y-2">
                        <label className="text-gray-700 " htmlFor="username">From</label>

                        <DatePicker name="fromDate" className="p-2 w-full rounded-md border border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="md:col-span-3 flex flex-col space-y-2">
                        <label className="text-gray-700 " htmlFor="username">To</label>

                        <DatePicker name="toDate" className="p-2 w-full rounded-md border border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>

                    <div className=" flex items-end">
                        <input className="bg-blue-500 p-2 rounded-md font-bold text-white mb-1 cursor-pointer" type="submit" value="Search" />
                    </div>
                </div>

            </form>
            <AdminAllParcelsTable parcels={parcels} refetch={refetch}></AdminAllParcelsTable>
        </div>
    );
};

export default AllParcels;