import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeliveryListTable from "../../../components/tables/DeliveryListTable";
import SectionHeading from "../../../shared/SectionHeading";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const DeliveryList = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

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
            <Helmet>
                <title>Delivery List || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'Your Delivery List'}></SectionHeading>
            <DeliveryListTable deliveryList={deliveryList} refetch={refetch}></DeliveryListTable>
        </div>
    );
};

export default DeliveryList;