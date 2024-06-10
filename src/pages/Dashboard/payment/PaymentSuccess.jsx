// import Confetti from 'react-confetti'
// import image from '../../../assets/pay.jpg'

// const PaymentSuccess = () => {


//     return (
//         <div>
//             <Confetti
//                 width={1300}
//                 height={window.innerHeight}
//             />

//             <div  className='h-screen flex justify-center '>
//                 <img className='h-screen ' src={image} alt="" />
//             </div>
//         </div>
//     );
// };

// export default PaymentSuccess;


import Confetti from 'react-confetti';
import image from '../../../assets/pay.jpg';
import { useEffect, useState } from 'react';

const PaymentSuccess = () => {
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Confetti
                width={dimensions.width}
                height={dimensions.height}
            />

            <div className="h-screen flex justify-center items-center">
                <img className="max-w-full max-h-full" src={image} alt="Payment Success" />
            </div>
        </div>
    );
};

export default PaymentSuccess;
