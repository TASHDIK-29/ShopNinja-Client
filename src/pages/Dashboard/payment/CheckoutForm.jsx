import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const CheckoutForm = () => {

    const { id } = useParams();

    const [error, setError] = useState('');

    // stripe builtin hooks
    const stripe = useStripe();
    const elements = useElements();


    const [clientSecret, setClientSecret] = useState("");

    const [transactionId, setTransactionId] = useState('');

    const axiosSecure = useAxiosSecure();


    const { data: parcel = {} } = useQuery({
        queryKey: ['parcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/parcel/${id}`);

            return res.data;
        }
    })

    console.log(parcel);

    useEffect(() => {
        if (parcel.price) {
            axiosSecure.post('/create-payment-intent', { price: parcel.price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, parcel.price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[Payment error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }


        // Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: parcel?.email || 'Anonymous',
                    name: parcel?.userName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);

            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);


                // save payment history at db
                const payment = {
                    email: parcel?.email,
                    price: parcel.price,
                    date: new Date(),
                    parcelId: id,
                    transactionId: paymentIntent.id
                }

                const resPost = await axiosSecure.post('/payments', payment);
                console.log('Post = ',resPost.data);
                const resUserPut = await axiosSecure.put(`/payments/user/${parcel?.email}`, {cost : parcel.price});
                console.log('Put user = ',resUserPut.data);
                const resParcelPut = await axiosSecure.put(`/payments/parcel/${id}`);
                console.log('Put parcel = ',resParcelPut.data);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="px-2 py-1 font-semibold bg-orange-500 rounded-md my-4" type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-sm text-red-600 font-semibold">{error}</p>
            {transactionId && <p className="text-sm text-green-600 font-semibold">Your Transaction Id : {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;