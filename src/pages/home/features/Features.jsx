import { useEffect } from 'react';
import featureImg from '../../../assets/feature.jpg'
import Statistics from './Statistics';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-gradient">explore our <br /> awesome Features</h1>

                            <div className="mt-2">
                                <span className="inline-block w-28 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-12 h-1 ml-1 bg-orange-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                            </div>
                        </div>

                        <div className="md:flex md:items-start md:-mx-4 " data-aos="fade-up">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Insurance Options</h1>

                                <p className="mt-3 text-gray-500 ">
                                    Offer users the option to insure their parcels against loss, damage, or theft during transit. Various insurance plans can be provided based on the value of the items being shipped. <br />
                                    <span className="font-bold">Benefits:</span> Provides peace of mind to users by ensuring financial protection for their valuable shipments.
                                </p>
                            </div>
                        </div>

                        <div className="md:flex md:items-start md:-mx-4 " data-aos="fade-up">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Real-Time Tracking and Geofencing</h1>

                                <p className="mt-3 text-gray-500 ">
                                    Implement advanced real-time tracking with geofencing capabilities. Users receive alerts if their parcel leaves a predefined geographical area unexpectedly.<br />
                                    <span className="font-bold">Benefits:</span> Enhances security by allowing users to monitor their parcels closely and react quickly to any unusual activity.
                                </p>
                            </div>
                        </div>

                        <div className="md:flex md:items-start md:-mx-4 " data-aos="fade-up">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize ">Express Delivery Services</h1>

                                <p className="mt-3 text-gray-500 ">
                                    Description: Offer various express delivery options, such as same-day, next-day, and two-day delivery. Users can choose the delivery speed that best suits their needs.<br />
                                    <span className="font-bold">Benefits:</span> Provides flexibility and meets the urgent delivery needs of users, enhancing customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={featureImg} alt="" />
                    </div>
                </div>

                <hr className="my-12 border-gray-200 dark:border-gray-700" />

                <div data-aos="zoom-in-up">
                    <Statistics></Statistics>
                </div>
            </div>
        </section>
    );
};

export default Features;