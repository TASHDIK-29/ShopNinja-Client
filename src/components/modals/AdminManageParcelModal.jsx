import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AdminManageParcelModal = ({ isOpen, setIsOpen, setPatchData, deliveryMans }) => {

    const [startDate, setStartDate] = useState(new Date());

    

    console.log(deliveryMans);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const deliveryManId = form.deliveryMan.value;
        const approxDeliveryDate = form.deliveryDate.value;

        setPatchData({deliveryManId, approxDeliveryDate})

        setIsOpen(false)
    }

    return (
        <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                    &#8203;
                </span>

                <div
                    className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"

                >
                    <h3 className="text-lg font-medium text-center underline leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Manage Parcel
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                        Select delivery man and approximate delivery date for the parcel.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            Select Delivery Man
                        </label>

                        <label className="block mt-1 mb-3" htmlFor="email">
                            <select
                                name="deliveryMan"
                                className="select select-bordered w-full px-11">
                                {
                                    deliveryMans.map(deliveryMan => <option key={deliveryMan._id} 
                                        value={deliveryMan._id}>{deliveryMan?.name}</option>)
                                }
                                

                            </select>
                        </label>


                        <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            Approximate Delivery Date
                        </label>

                        <label className="block mt-1" htmlFor="email">
                            <DatePicker name="deliveryDate" className="p-2 w-full rounded-md border border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>





                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                            {/* <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                            >
                                Cancel
                            </button> */}

                            <input
                                type="submit"
                                value="Assign"
                                className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminManageParcelModal;