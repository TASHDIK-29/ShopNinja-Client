import AdminAllDeliveryManTable from "../../../components/tables/AdminAllDeliveryManTable";
import useAllDeliveryMan from "../../../hooks/useAllDeliveryMan";

const AllDeliveryMan = () => {

    const [deliveryMans, refetch] = useAllDeliveryMan();


    return (
        <div>
            Total deliveryMan = {deliveryMans.length}
            <AdminAllDeliveryManTable deliveryMans={deliveryMans} refetch={refetch}></AdminAllDeliveryManTable>
        </div>
    );
};

export default AllDeliveryMan;