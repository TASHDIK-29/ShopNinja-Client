import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserParcels = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: parcels=[]} = useQuery({
        queryKey: [user.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/parcel/${user?.email}`);

            return res.data;
        }
    })

    console.log('parcels : ', parcels);

    return (
        <div>
            my parcels
        </div>
    );
};

export default UserParcels;