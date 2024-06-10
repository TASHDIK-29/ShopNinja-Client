import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AdminAllDeliveryManTable = ({deliveryMans, refetch}) => {

    useEffect( () =>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Deliveryman’s Name</th>
                        <th>Deliveryman’s Phone</th>
                        <th>Number of parcel Delivered</th>
                        <th>Avg. Review</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        deliveryMans.map((deliveryMan, index) => <tr key={deliveryMan._id} data-aos="fade-up">
                            <th>{index + 1}</th>
                            <td>{deliveryMan?.name}</td>
                            <td>{deliveryMan?.phone}</td>
                            <td>{deliveryMan?.totalDelivery}</td>
                            <td>{deliveryMan?.totalRating / deliveryMan?.totalReview}</td>
                            
                        </tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AdminAllDeliveryManTable;