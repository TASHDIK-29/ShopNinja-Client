import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserParcelsTable from "../../../components/tables/UserParcelsTable";

const UserParcels = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: parcels=[], refetch} = useQuery({
        queryKey: ['parcels'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/parcels/${user?.email}`);

            return res.data;
        }
    })

    console.log('parcels : ', parcels);

    return (
        <div>
            my parcels
            <UserParcelsTable parcels={parcels} refetch={refetch}></UserParcelsTable>
        </div>
    );
};

export default UserParcels;