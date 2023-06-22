// import React from 'react';

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
// todo provide publis key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
             <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2>money tranfer gate wayyyyyyyyyy</h2>
       <Elements stripe={stripePromise}>

        <CheckoutForm></CheckoutForm>
       </Elements>
        </div>
    );
};

export default Payment;