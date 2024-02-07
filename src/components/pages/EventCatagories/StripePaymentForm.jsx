import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import Buttonn from "../../constants/Button";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StripePaymentForm = ({ onClose }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const paymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (clientSecret === "") {
      const cardElement = elements.getElement(CardNumberElement);

      if (!cardElement) {
        console.error("CardNumberElement not found");
        return;
      }

      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      console.log(paymentMethod, "wuiejgfuigfuygfyuge");
    }
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }}>
        Payment
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <form action="" onSubmit={paymentSubmit}>
        <DialogContent sx={{ padding: "20px" }}>
          <Typography variant="p" gutterBottom sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            delectus?
          </Typography>
          <Typography gutterBottom sx={{ marginTop: "10px" }}>
            <InputLabel id="card-label" sx={{ color: "" }}>
              {" "}
              Card
            </InputLabel>
            <CardNumberElement
              options={{
                style: {
                  base: {
                    fontSize: "20px",
                    border: "12px",
                    color: "black",
                    "::placeholder": {
                      color: "black",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </Typography>
          <Typography gutterBottom sx={{ margin: "" }}>
            <InputLabel id="expiry-label" sx={{ color: "" }}>
              {" "}
              Expiry Date
            </InputLabel>
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: "20px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </Typography>

          <CardCvcElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                  color: "#424770",
                },
              },
            }}
          />

          <InputLabel id="cardholder-label" sx={{ color: "" }}>
            {" "}
            Card Holder
          </InputLabel>
        </DialogContent>
      </form>
      <DialogActions
        sx={{
          display: "flex",
          maxWidth: "100%",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Buttonn
            text="Pay Now"
            width="350px"
            backgroundColor="rgb(77, 1, 121)"
            color="white"
            onClick={paymentSubmit}
          />
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default StripePaymentForm;
