import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const StripeCheckout = () => {
  const stripePromise = loadStripe(
    "pk_test_51OKZAzSBbrWp9KWdcW5uh5RghYJC1isC3TA1rUeRpGPGzK2CCQx62PHoesZEXjrFzB3JMS8lGuh7HRi2UwQWlgYG00gKaPL3FO"
  );
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default StripeCheckout;
