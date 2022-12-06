import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PaymentForm from '../../Components/Form/PaymentForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
     const { productName, resalePrice, buyerEmail, location } = booking;
     console.log(resalePrice);
    return (
      <div>
        <h3 className="text-3xl">Payment for {productName}</h3>
        <p className="text-xl">
          Please pay <strong>${resalePrice}</strong> for
          {productName} 
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <PaymentForm booking={booking} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;