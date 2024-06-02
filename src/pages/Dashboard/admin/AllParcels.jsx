import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminAllParcelsTable from "../../../components/tables/AdminAllParcelsTable";

const AllParcels = () => {

    const axiosSecure = useAxiosSecure();

    const {data: parcels=[]} = useQuery({
        queryKey: ['parcels'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/parcels');

            return res.data;
        }
    })
    return (
        <div>
            Total Parcels = {parcels.length}
            <AdminAllParcelsTable parcels={parcels}></AdminAllParcelsTable>
        </div>
    );
};

export default AllParcels;