import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      if (!stripe || !elements) {
        return;
      }

      const { paymentIntent } = await stripe.confirmCardPayment(
        "pi_1IuSabcTest123",
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: "Test User",
            },
          },
        }
      );

      if (paymentIntent.status === "succeeded") {
        console.log("Payment succeeded:", paymentIntent);
      } else {
        console.error("Payment failed:", paymentIntent.status);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <div>
      <CardElement
        options={{
          style: {
            fontSize: "16px",
          },
        }}
      />
      <button onClick={handlePayment} disabled={!stripe}>
        Pay
      </button>
    </div>
  );
};

export default CheckoutForm;
