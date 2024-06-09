import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/socialLogin/SocialLogin';

import image from '../../assets/log.jpg'
const Login = () => {

    const { loginUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    // const page = location?.state || "/";
    const from = location.state?.from?.pathname || "/";
    // console.log(from);

    if (location.state?.from?.pathname) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have to login first!",
        });
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        console.log(email, password, captcha);

        if (validateCaptcha(captcha) == true) {
            loginUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "You have successfully logged in",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate(from, { replace: true })
                })
                .then(err => {
                    // console.log(err.message);
                })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You put wrong captcha!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }


    }



    return (
        <section className="bg-white lg:flex flex-row-reverse">
            <Helmet>
                <title>Login || Ship Ninja</title>
            </Helmet>
            <div className="lg:w-1/3 flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
                <div className="flex justify-center my-2">
                    <SocialLogin></SocialLogin>
                </div>
                <div className="divider divider-neutral">Or</div>
                <form onSubmit={handelLogin} className="w-full max-w-md border-2 border-black p-4">
                    <div className="flex items-center justify-center ">
                        <h1 className="w-1/3 pb-4 font-semibold text-center text-blue-400 capitalize border-b-2 border-orange-400 ">
                            sign in
                        </h1>

                        {/* <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            sign up
                        </a> */}
                    </div>

                    {/* <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div> */}

                    {/* <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label> */}

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>

                    <div>
                        <LoadCanvasTemplate />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute right-2">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg> */}
                            {/* <button onClick={handelValidateCaptcha} className='py-1 px-2 rounded-lg bg-blue-700 text-white font-semibold'>Check</button> */}
                        </span>
                        <input name='captcha' type="text" className="block w-full px-2 py-3 text-gray-700 bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="type the captcha" />
                    </div>

                    <div className="mt-6">
                        {/* <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign In
                        </button> */}

                        <input className="w-full px-6 py-3 text-sm font-medium bg-blue-500 rounded-lg text-white cursor-pointer" type="submit" value="Sign In" />

                        <div className="mt-6 text-center">
                            <Link to='/register' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Have no account? Create One
                            </Link>
                        </div>
                    </div>
                </form>

            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <img className="w-3/4" src={image} alt="" />
            </div>
        </section>
    );
};

export default Login;