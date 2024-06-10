import { useNavigate } from 'react-router-dom';
import err from '../../assets/error.jpg';
const ErrorPage = () => {

    const navigate = useNavigate();

    const handelGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className='h-screen'>
            <div className='flex justify-center p-4'>
                <img className='w-1/3' src={err} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-xl font-semibold">Oopss !! Page not found</h1>
                <button onClick={handelGoBack} className="text-blue-500 font-bold text-lg underline">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;