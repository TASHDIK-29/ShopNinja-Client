import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeliveryListTable from "../../../components/tables/DeliveryListTable";

const DeliveryList = () => {

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: deliveryList=[]  , refetch} = useQuery({
        queryKey: ['deliveryList'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/deliveryList/${user?.email}`);

            return res.data;
        }
    })

    console.log(deliveryList);

    return (
        <div>
            Total deliveryList = {deliveryList.length}
            <DeliveryListTable deliveryList={deliveryList} refetch={refetch}></DeliveryListTable>
        </div>
    );
};

export default DeliveryList;