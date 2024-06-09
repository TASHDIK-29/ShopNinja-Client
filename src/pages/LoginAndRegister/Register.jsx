import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { FaClipboardUser } from "react-icons/fa6";
// import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { imageUpload } from "../../utils/imageURL";
import { useState } from "react";

import image from '../../assets/reg.jpg'

const Register = () => {

    const [imagePreview, setImagePreview] = useState();
    const [img, setImg] = useState(null);

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const { createUser, updateUserProfile, logoutUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        // console.log('Photo = ', data.photo[0]);

        // const image = data.photo[0];

        const imageURL = await imageUpload(img)

        console.log('URL = ', imageURL);

        if (imageURL) {
            createUser(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log('User registered', user);



                    updateUserProfile(data.name, imageURL)
                        .then(() => {
                            // Post User data to DB
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                                role: data.type,
                                image: imageURL,
                                phone: data.phone
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {

                                        console.log('user added to the db');

                                        Swal.fire({
                                            position: "top-center",
                                            icon: "success",
                                            title: "You have successfully create an account",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });

                                        // navigate('/');
                                    }
                                })

                            logoutUser();
                            navigate('/login');  // initial 
                        })
                        .catch(err => console.log(err))


                })
                .then(err => {
                    console.log(err);
                })
        }
    }

    const handelImage = image => {
        setImg(image);
        setImagePreview(URL.createObjectURL(image));
        // setImageText(image.name);
    }



    return (
        <section className="bg-white lg:flex">
            <Helmet>
                <title>Sign Up || Ship Ninja</title>
            </Helmet>
            <div className="lg:w-1/3 flex flex-col items-center justify-center min-h-screen px-6 py-4 mx-auto">
                <div className="flex justify-center my-2">
                    <SocialLogin></SocialLogin>
                </div>
                <div className="divider divider-neutral">Or</div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md border-2 border-black p-4">
                    {/* <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                    </div> */}

                    <div className="flex items-center justify-center">
                        <h1 className="w-1/3 pb-4 text-center text-blue-400 font-semibold capitalize border-b-2 border-orange-500 dark:border-orange-400">
                            sign up
                        </h1>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <input type="text" {...register("name", { required: true })} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />

                    </div>
                    {errors.name && <span className="text-red-600 font-bold">Name is required</span>}

                    <div className="relative flex items-center mt-8">
                        


                        {/* ******** */}
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer  dark:border-gray-700 rounded-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8 text-gray-500 dark:text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">Upload Image</h2>
                            <input
                                id="dropzone-file"
                                {...register("photo", { required: true })}
                                type="file"
                                // name='image'
                                onChange={(e) => handelImage(e.target.files[0])}
                                accept="image/*"
                                className="hidden" />
                        </label>
                        <div className="w-24 object-cover overflow-hidden flex items-center">
                            {imagePreview && <img src={imagePreview} />}
                        </div>
                    </div>
                    {errors.photo && <span className="text-red-600 font-bold">Photo URL is required</span>}


                    {/* User type */}
                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <FaClipboardUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                        </span>

                        <select {...register("type", { required: true })}
                            className="select select-bordered w-full px-11">
                            {/* <option disabled selected>Select a Type</option> */}
                            <option value="user">User</option>
                            <option value="deliveryMan">DeliveryMan</option>

                        </select>


                    </div>
                    {errors.type && <span className="text-red-600 font-bold">Please select your user type</span>}

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <FiPhone className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" {...register("phone", { required: true })} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="phone number" />

                    </div>
                    {errors.phone && <span className="text-red-600 font-bold">Phone number is required</span>}


                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input type="email" {...register("email", { required: true })} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>
                    {errors.email && <span className="text-red-600 font-bold">Email is required</span>}

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/ })} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>
                    {errors.password?.type === 'required' && <span className="text-red-600 font-bold">Password is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold">Password must be 6 characters</span>}
                    {errors.password?.type === 'maxLength' && <span className="text-red-600 font-bold">Password must be less than 20 characters</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold">Password must contain at least one Uppercase and Special character</span>}


                    

                    <div className="mt-6">
                        <input className="w-full px-6 py-3 text-sm font-medium bg-blue-500 hover:bg-blue-400 rounded-lg text-white cursor-pointer" type="submit" value="Sign Up" />

                        <div className="mt-6 text-center">
                            <Link to='/login' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already Have an account? Login Now
                            </Link>
                        </div>

                    </div>
                </form>

            </div>
            <div className="lg:w-1/2 flex items-center">
                <img className="w-3/4" src={image} alt="" />
            </div>
        </section>
    );
};

export default Register;