import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useAllDeliveryMan = () => {

    const axiosSecure = useAxiosSecure();

    const { data: deliveryMans = [] , refetch} = useQuery({
        queryKey: ['deliveryMan'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/deliveryMan`);

            return res.data;
        }
    })

    return [deliveryMans, refetch];
};

export default useAllDeliveryMan;