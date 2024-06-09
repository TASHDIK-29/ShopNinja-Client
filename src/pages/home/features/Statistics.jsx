import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { LiaUsersSolid } from "react-icons/lia";
import CountUp from 'react-countup';

const Statistics = () => {

    const axiosPublic = useAxiosPublic();
    const { data: stat = {} } = useQuery({
        queryKey: ['stat'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stat');

            return res.data;
        }
    })
    console.log('Stat = ', stat);
    return (
        <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-8">
                <div className="lg:col-start-2 lg:col-span-2 flex justify-around p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
                            <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                            <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                            <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none text-gradient">
                            <CountUp end={stat.parcel} />
                        </p>
                        <p className="capitalize text-gradient">Parcels</p>
                    </div>
                </div>
                <div className="lg:col-start-4 lg:col-span-2 flex justify-around p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-600">
                    <LiaUsersSolid className="text-white text-4xl" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none text-gradient"><CountUp end={stat.user} /></p>
                        <p className="capitalize text-gradient">Total User</p>
                    </div>
                </div>

                <div className="lg:col-start-6 lg:col-span-2 flex justify-around p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
                            <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none text-gradient"><CountUp end={stat.delivered} /></p>
                        <p className="capitalize text-gradient">Delivered</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;