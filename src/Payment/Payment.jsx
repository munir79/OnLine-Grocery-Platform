import React from 'react';
import SectionTittle from '../Component/SectionTittle/SectionTittle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheekOutForm from './CheekOutForm';

const stripePromise=loadStripe("pk_test_51PNufw2KHGlFTrJGt4n0UpHKZvmUUHu2dGMlrQs4h1X1riE6ZOViRFR83y1yDwHLnhwiIPueDGoVxtGYxbnDB7KP00bhQSOlgz")


const Payment = () => {
    return (
        <div>
            <SectionTittle heading="payment" Subheading="please Pay "></SectionTittle>
            <div>
          <Elements stripe={stripePromise}>

             <CheekOutForm></CheekOutForm>
          </Elements>
            </div>
        </div>

    );
};

export default Payment;