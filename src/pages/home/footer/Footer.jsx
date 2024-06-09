import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-6">
                    <div className="sm:col-span-2 px-4">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white ">Our CEO’s Statement</h1>
                        <span className="inline-block w-10 h-1 bg-orange-500 rounded-full"></span>
                        <p className="text-white">
                            At ShopNinja, we prioritize your parcels' safety and swift delivery. Our advanced technology and dedicated team ensure every shipment is secure and on time. Trust us to handle your deliveries with care and efficiency. Thank you for choosing us.
                        </p>
                    </div>

                    <div className="sm:col-span-1 pl-6">
                        <p className=" font-semibold text-gray-800 dark:text-white text-xl">Quick Link</p>
                        <span className="inline-block w-10 h-1 bg-orange-500 rounded-full"></span>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 pb-2 pr-8 hover:text-blue-500 border-b">Ground Shipping</a>
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 pb-2 pr-8 hover:text-blue-500 border-b">Rail Shipping</a>
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 pb-2 pr-8 hover:text-blue-500 border-b">Cargo Shipping</a>
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 pb-2 pr-8 hover:text-blue-500 ">Logistic Solutions</a>

                        </div>
                    </div>

                    

                    <div className="sm:col-span-3 flex flex-col items-center">
                        <div>
                            <h1 className=" pl-6 max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
                            <span className="inline-block w-10 h-1 ml-6 bg-orange-500 rounded-full"></span>
                        </div>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-blue-800 rounded-lg hover:bg-blue-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="md:flex items-center justify-between space-y-3">
                    <h1 className="flex items-center justify-center md:justify-start gap-2 text-2xl text-gradient font-semibold">
                        <TbTruckDelivery className="text-3xl text-orange-500" />
                        ShopNinja
                    </h1>
                    <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2024 - All rights reserved</p>
                    <div className="flex justify-around -mx-2">
                        <FaFacebook className="text-xl mx-2 text-orange-500" />
                        <FaSquareXTwitter className="text-xl mx-2 text-orange-500" />
                        <FaInstagramSquare className="text-xl mx-2 text-orange-500" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;