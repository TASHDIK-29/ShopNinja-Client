import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllReviews = () => {

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const {data: reviews=[]} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/reviews/${user?.email}`);

            return res.data;
        }
    })

    return reviews;
   
};

export default useAllReviews;