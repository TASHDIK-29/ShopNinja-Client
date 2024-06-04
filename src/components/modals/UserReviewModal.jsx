import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserReviewModal = ({ setIsOpen, id }) => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();


    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;

        const userName = form.userName.value;
        const image = form.image.value;
        const deliveryManId = form.deliveryManId.value;
        const rating = parseFloat(form.rating.value);
        const feedback = form.feedback.value;

        const review = {
            userName,
            image,
            deliveryManId,
            rating,
            feedback,
        }
        console.log('review',review);

        // Save Review to DB
        const res = await axiosSecure.post('/review', review);
        console.log(res.data);

        if(res.data.insertedId){
            try{
                const res = await axiosPublic.put(`/totalReview/${deliveryManId}?rating=${rating}`)

                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        }

        setIsOpen(false);
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
                            User Name
                        </label>

                        <label className="block mt-1 mb-3" htmlFor="email">
                            <input defaultValue={user?.displayName} readOnly className="w-full p-2" type="text" name="userName" id="" />
                        </label>

                        <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            User Image
                        </label>

                        <label className="block mt-1 mb-3" htmlFor="email">
                            <input defaultValue={user?.photoURL} readOnly className="w-full p-2" type="text" name="image" id="" />
                        </label>

                        <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            Deliveryman ID
                        </label>

                        <label className="block mt-1 mb-3" htmlFor="email">
                            <input defaultValue={id} readOnly className="w-full p-2" type="text" name="deliveryManId" id="" />
                        </label>

                        <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            Rating (0-5)
                        </label>

                        <label className="block mt-1 mb-3" htmlFor="email">
                            <input className="w-full p-2" type="text" name="rating" id="" />
                        </label>

                        

                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text text-white">Feedback</span>
                                
                            </div>
                            <textarea 
                            name="feedback"
                            className="textarea textarea-bordered h-24" 
                            placeholder="Write anything..."></textarea>
                            
                        </label>

                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2 justify-center">


                            <input
                                type="submit"
                                value="Submit"
                                className="w-full px-2 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReviewModal;