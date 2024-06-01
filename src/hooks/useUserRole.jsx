import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: role} = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`users/role/${user?.email}`);
            console.log(res.data);

            return res.data;
        }
    })

    return role;
};

export default useUserRole;