import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCart from "../Hooks/UseCart";
import UseAuth from "../Hooks/UseAuth";


const CheekOutForm = () => {
    const {user}=UseAuth();
    const [error,setError]=useState('');
    const [clientSecret,setClientSecrect]=useState('');
    const [transactionId,setTransationId]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    const axiousSecure=UseAxiosSecure();

    const [cart]=UseCart();
    const totalPrice=cart.reduce((total,item)=>total=item.price ,0)

    useEffect(()=>{
        axiousSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecrect(res.data.clientSecret);
        })

    } ,[axiousSecure,totalPrice])
    const handlePaymentSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card=elements.getElement(CardElement)
        if(card===null){
            return;
        }

        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card

        })
        if(error){
            console.log("payment error",error);
            setError(error.message);
        }
        else{
            console.log("payment method ",paymentMethod);
            setError('');
        }
        //confirm payment 
        const {paymentIntent,error:confirmError}=await stripe.
       confirmCardPayment(clientSecret,
            {
            payment_method:{
                card:card,
                billing_details:{
                    email:user.email 

                }
            }
        })
        if(confirmError){
            console.log("confirm error");
        }
        else{
            console.log("payment intent",paymentIntent);
            if(paymentIntent.status==="succeeded"){
                console.log("Trnsaction id",paymentIntent.id);
                setTransationId(paymentIntent.id);

                // now payment set in the database
                const payment={
                    email:user.eamil,
                    price:totalPrice,
                    transactionId:paymentIntent.id,
                    date:new Date(),
                    cartIds:cart.map(item=>item._id),
                    menuItemIds:cart.map(item=>item.menuId),
                    status:"pending"
                }
               const res= await axiousSecure.post('/payments',payment);
               console.log("payment saving..", res.data);

            }
        }
    }



    return (
      
<form onSubmit={handlePaymentSubmit}>

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
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-500">your transaction id : {transactionId} </p>}
            </form>
        
    );
};

export default CheekOutForm;