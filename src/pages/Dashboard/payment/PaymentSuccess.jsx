import Confetti from 'react-confetti'
import image from '../../../assets/pay.jpg'

const PaymentSuccess = () => {


    return (
        <div>
            <Confetti
                width={1300}
                height={window.innerHeight}
            />

            <div  className='h-screen flex justify-center '>
                <img className='h-screen ' src={image} alt="" />
            </div>
        </div>
    );
};

export default PaymentSuccess;