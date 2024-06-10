import { useEffect } from "react";
import AdminAllDeliveryManTable from "../../../components/tables/AdminAllDeliveryManTable";
import useAllDeliveryMan from "../../../hooks/useAllDeliveryMan";
import SectionHeading from "../../../shared/SectionHeading";
import { Helmet } from "react-helmet-async";

const AllDeliveryMan = () => {

    const [deliveryMans, refetch] = useAllDeliveryMan();
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>All Deliveryman || Ship Ninja</title>
            </Helmet>
            <SectionHeading heading={'All Deliveryman'}></SectionHeading>
            <AdminAllDeliveryManTable deliveryMans={deliveryMans} refetch={refetch}></AdminAllDeliveryManTable>
        </div>
    );
};

export default AllDeliveryMan;