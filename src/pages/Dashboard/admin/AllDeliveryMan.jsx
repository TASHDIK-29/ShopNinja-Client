import AdminAllDeliveryManTable from "../../../components/tables/AdminAllDeliveryManTable";
import useAllDeliveryMan from "../../../hooks/useAllDeliveryMan";
import SectionHeading from "../../../shared/SectionHeading";

const AllDeliveryMan = () => {

    const [deliveryMans, refetch] = useAllDeliveryMan();


    return (
        <div>
            <SectionHeading heading={'All Deliveryman'}></SectionHeading>
            <AdminAllDeliveryManTable deliveryMans={deliveryMans} refetch={refetch}></AdminAllDeliveryManTable>
        </div>
    );
};

export default AllDeliveryMan;