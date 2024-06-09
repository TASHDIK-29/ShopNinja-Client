import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import TopDeliverymanCard from "../../../components/cards/TopDeliverymanCard";

const TopDeliveryMan = () => {

    const [query, setQuery] = useState('ratings')

    const axiosPublic = useAxiosPublic();
    const { data: topDeliveryMan = [] } = useQuery({
        queryKey: ['topDeliveryMan', query],
        queryFn: async () => {
            const res = await axiosPublic.get(`/topDeliveryMan?query=${query}`);

            return res.data;
        }
    })
    console.log('topDeliveryMan = ', topDeliveryMan);



    return (
        <div>
            

            <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-gradient">Our Top Deliveryman</h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Our professional deliveryman ensures timely, secure, and friendly delivery services, demonstrating exceptional reliability and dedication to customer satisfaction with every package handled.
            </p>

            <div className="flex items-center justify-center">
                <div className="flex items-center p-1 border border-blue-600  rounded-xl">
                    <button
                        onClick={() => setQuery('delivered')}
                        className={query === 'delivered' ? `px-4 py-2 mx-4 text-sm font-medium  capitalize transition-colors duration-300 md:py-3  dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12 bg-blue-600 text-white` :
                            'px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12'
                        }>Delivery</button>
                    <button
                        onClick={() => setQuery('ratings')}
                        className={query === 'ratings' ? `px-4 py-2 mx-4 text-sm font-medium  capitalize transition-colors duration-300 md:py-3  dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12 bg-blue-600 text-white` :
                            'px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12'
                        }>Ratings</button>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-5">
                {
                    topDeliveryMan.map(deliveryMan => <TopDeliverymanCard key={deliveryMan._id} deliveryMan={deliveryMan}></TopDeliverymanCard>)
                }
            </div>
        </div>
    );
};

export default TopDeliveryMan;