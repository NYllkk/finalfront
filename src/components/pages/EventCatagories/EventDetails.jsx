import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  DialogContentText,
  Divider,
  Fade,
  Grid,
  InputBase,
  InputLabel,
  Paper,
  Popper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Buttonn from "../../constants/Button";
import plane from "../../../assets/plane.jpg";
import { BsShare } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import * as Yup from "yup";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { FaCopy } from "react-icons/fa";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
} from "react-share";
import StripePaymentForm from "./StripePaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const stripePromise = loadStripe(
  "pk_test_51M4ns1SBx6KtlGUSdnIZL9ehhRylPddDkOoWuIl1DGLDHXm9FR4C3CSjNB9KOWgVLSJiKNbylvPl8s3s7dDtYJg200FK52NvMb"
);
const EventDetails = () => {
  let { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://642d4d6dbf8cbecdb4027745.mockapi.io/plane/${id}`)
      .then((res) => setEventData(res.data))
      .catch((errors) => {
        console.log(errors);
      });
  }, [id]);
  console.log(eventData, "check details");
  console.log(id, "in event details");

  const initialstate = {
    name: "",
    email: "",
    number: "",
  };
  const [opeen, setOpeen] = useState(false);
  const [opeeen, setOpeeen] = useState(false);
  const [opeeeeeen, setopeeeeen] = useState(false);
  const [data, setdata] = useState(initialstate);
  const [count, setCount] = useState(1);
  const [errors, setErrors] = useState({});
  const [share, setshare] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  //
  // share

  const handleClickOpenshare = () => {
    setshare(true);
  };

  const handleCloseshare = () => {
    setshare(false);
  };
  const paymentSubmit = () => {
    console.log("payment Submitted");
  };
  const shareUrl = "http://localhost:5173";
  // share
  // //////
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("AUTHLOGGEDIN");
  const handleClickOpeeen = () => {
    setOpeeen(true);
  };
  const handleClosee = () => {
    setOpeeen(false);
  };
  const handleClickOpen = () => {
    setOpeen(true);
  };
  const handleClose = () => {
    setOpeen(false);
  };
  const handleClickOpeeeen = () => {
    setopeeeeen(true);
  };
  const handleCloseeeee = () => {
    setopeeeeen(false);
  };

  // ///////

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //   const backgroundImage = `url(${plane})`;

  const heroContainerStyle = {
    minHeight: "40vh",
    background: eventData ? `url(${eventData.image})` : "Image Loading",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const textContainerStyle = {
    display: "flex",
    alignItems: "centre",
    flexDirection: "column",
    padding: "28px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "1.5",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  };
  const overlay = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: "0",
    left: "0",
  };

  const handleBooked = (event) => {
    if (isLoggedIn) {
      console.log("User is logged in");
      handleClickOpeeen();
    } else {
      console.log("User is not logged in. Opening Dialog.");
      handleClickOpen();
    }
  };
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const handleWhatsAppShare = () => {
    console.log("sharing");
  };

  const handleIncrement = () => {
    console.log("incriment");
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .matches(/^\S*$/, "Name must not contain spaces"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^\d{10}$/, "Number must be a 10-digit phone number"),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: undefined,
        }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error.message,
        }));
      });
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(data, { abortEarly: false });
      console.log("form submitted");
      setIsFormSubmitted(true);
      setdata(initialstate);
      setIsPaymentDialogOpen(true);

      handleClosee(true);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };
  const handleClosePaymentDialog = () => {
    // Close the payment dialog
    setIsPaymentDialogOpen(false);
  };

  return (
    <>
      {/* card one  */}
      <Container maxWidth="lg" sx={{ padding: "20px", marginBottom: "12px" }}>
        <Box
          style={heroContainerStyle}
          sx={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536" }}
        >
          <Container style={{ position: "relative", zIndex: "2" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </Container>
          <div style={overlay}></div>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <h1>ClearView Vineyard</h1>
              <p style={{ textAlign: "justify", marginTop: "10px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis pariatur sit vel consectetur, obcaecati velit ducimus
                debitis, quis culpa quod esse voluptas nisi, voluptate mollitia
                eius repudiandae repellendus dolores. Doloremque sed dolorum
                dolor vel quo dolore in, aspernatur eum beatae aperiam laborum
                impedit itaque odio quos eaque eligendi doloribus? Itaque vel
                quo atque sequi cumque placeat fuga maiores doloremque. Beatae
                commodi doloribus officia voluptates quos rerum maxime ipsa
                reprehenderit saepe enim quidem quibusdam, impedit adipisci?
                Dicta at beatae ipsa nisi vitae quam fuga, veritatis facere vel
                optio magnam dolores eligendi? Repellendus tempore expedita
                architecto a beatae distinctio quaerat! Deserunt perferendis
                fuga distinctio quisquam exercitationem nisi, natus fugit ipsam
                temporibus ipsum unde inventore totam, error non molestiae.
                Nostrum eligendi temporibus cupiditate optio! Exercitationem
                culpa ab doloremque eveniet ut aperiam deleniti perspiciatis non
                alias praesentium amet assumenda nemo, nulla, iste numquam et
                autem voluptate facilis officia voluptas quae. Debitis cumque
                repudiandae laboriosam quas dolores fugiat eaque labore
                provident quidem atque tempore, ipsa explicabo quia praesentium
                aspernatur natus doloribus sunt dolorem voluptatibus aliquam
                commodi magnam sit quisquam cum? Illo modi dolor sequi ab
                eligendi aspernatur ad! Beatae iste quos modi non ex. Recusandae
                debitis accusamus fuga mollitia sapiente repudiandae suscipit
                hic ut sequi!
              </p>
            </Grid>
            <Grid item xs={6}>
              <div style={{ float: "right", padding: "10px" }}>
                <Card sx={{ minWidth: 275, margin: "20px" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 14, textAlign: "left" }}
                      color="bold"
                      gutterBottom
                    >
                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3>Details</h3>
                        <BsShare size={18} onClick={handleClickOpenshare} />
                        <Dialog
                          open={share}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          sx={{ padding: "120px" }}
                        >
                          <DialogTitle
                            id="alert-dialog-title"
                            sx={{ padding: "20px", marginLeft: "5px" }}
                          >
                            {"Share"}
                          </DialogTitle>
                          <DialogContent sx={{ padding: "20px" }}>
                            <DialogContentText
                              id="alert-dialog-description"
                              sx={{ gap: "18px", display: "flex" }}
                            >
                              <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={40} round />
                              </FacebookShareButton>

                              <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={40} round={true} />
                              </TwitterShareButton>
                              <OKShareButton url={shareUrl}>
                                <OKIcon size={40} round={true} />
                              </OKShareButton>
                              <PinterestShareButton url={shareUrl}>
                                <PinterestIcon size={40} round={true} />
                              </PinterestShareButton>
                              <PocketShareButton url={shareUrl}>
                                <PocketIcon size={40} round={true} />
                              </PocketShareButton>
                              <RedditShareButton url={shareUrl}>
                                <RedditIcon size={40} round={true} />
                              </RedditShareButton>
                            </DialogContentText>
                          </DialogContent>
                          {/* workinggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg */}
                          <Box
                            sx={{
                              borderRadius: "12px",
                              borderColor: "black",
                              borderStyle: "",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ padding: "12px" }}>
                              <InputBase
                                sx={{
                                  ml: 1,
                                  flex: 1,
                                  borderRadius: "12px",
                                  border: "1px solid #ced4da",
                                  padding: "4px",
                                  width: "300px",
                                }}
                                placeholder={shareUrl}
                                value={shareUrl}
                                inputProps={{ "aria-label": "search Here" }}
                              />

                              <IconButton
                                type="button"
                                sx={{ p: "10px" }}
                                aria-label="search"
                                disableRipple
                              >
                                <FaCopy sx={{ marginLeft: "-100px" }} />
                              </IconButton>
                            </Box>
                          </Box>
                          <DialogActions>
                            <Button onClick={handleCloseshare}>Close</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      <Divider variant="fullWidth" />
                    </Typography>
                    {eventData ? (
                      <Typography>Organized by :{eventData.name}</Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}

                    {eventData ? (
                      <Typography>
                        Time and Date:{eventData.createdAt}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}
                    {eventData ? (
                      <Typography>Event Type:{eventData.createdAt}</Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}
                    {eventData ? (
                      <Typography>Distance:{eventData.id}:KM</Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}
                    {eventData ? (
                      <Typography>Price:{eventData.price}</Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}
                    {eventData ? (
                      <Typography>Passes Available:{eventData.time}</Typography>
                    ) : (
                      <Skeleton animation="wave" width={200} />
                    )}
                  </CardContent>
                  <CardActions>
                    <Buttonn
                      text="Book Now"
                      textAlign="centre"
                      width="325px"
                      backgroundColor=" #4D0179"
                      margin="10px"
                      padding="5px"
                      color="white"
                      marginBottom="12px"
                      onClick={handleBooked}
                    />
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
      {/* card one  */}

      {/*  */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opeen}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "center" }}
          id="customized-dialog-title"
        >
          <ImCross
            style={{
              backgroundColor: "red",
              color: "white",
              width: "60px",
              borderRadius: "135px",
              height: "60px",
              padding: "5px",
            }}
          />
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
        <DialogContent>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Registration is Required
          </Typography>
          <Typography gutterBottom sx={{ textAlign: "center" }}>
            It is Necessary First to Login Before Proceeding
          </Typography>
        </DialogContent>
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
            <Link style={{ textDecoration: "none" }} to="/login">
              <Buttonn
                text="Log In "
                width="350px"
                backgroundColor="rgb(77, 1, 121)"
                color="white"
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <Buttonn text="Sign UP " width="350px" />
            </Link>
          </div>
        </DialogActions>
      </BootstrapDialog>

      {/*  */}
      {/*  */}

      <BootstrapDialog
        onClose={handleClosee}
        aria-labelledby="customized-dialog-title"
        open={opeeen}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "center" }}
          id="customized-dialog-title"
        >
          Book Now
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClosee}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <form action="" onSubmit={handleSubmit}>
          <DialogContent sx={{ padding: "20px" }}>
            <Typography variant="p" gutterBottom sx={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              delectus?
            </Typography>
            <Typography gutterBottom sx={{ marginTop: "10px" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Name
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="text"
                autoFocus
                value={data.name}
                onChange={handleInputChange}
                error={errors.name}
                helperText={errors.name}
              />
            </Typography>
            <Typography gutterBottom sx={{ margin: "" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Email
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Email"
                name="email"
                autoComplete="text"
                autoFocus
                value={data.email}
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Typography>
            <Typography gutterBottom sx={{ margin: "" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Phone Number
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Number"
                name="number"
                autoComplete="number"
                autoFocus
                value={data.number}
                onChange={handleInputChange}
                error={errors.number}
                helperText={errors.number}
              />
            </Typography>
            <Typography gutterBottomsx={{ margin: "" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Number of passes
              </InputLabel>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    sx={{ width: "550px" }}
                    margin="normal"
                    required
                    fullWidth
                    onChange={handleInputChange}
                    id="name"
                    label="Passes"
                    name="passes"
                    autoComplete="text"
                    autoFocus
                    value={count}
                    InputProps={{
                      readOnly: false,
                    }}
                    error={count === 0}
                    helperText={
                      count === 0 ? "Passes cannot be less than one" : ""
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <IconButton onClick={handleIncrement} color="primary">
                    <IoAddSharp />
                  </IconButton>
                  <IconButton onClick={handleDecrement} color="secondary">
                    <RiSubtractFill />
                  </IconButton>
                </Grid>
              </Grid>
            </Typography>
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
              text="checkout "
              width="350px"
              backgroundColor="rgb(77, 1, 121)"
              color="white"
              onClick={handleSubmit}
            />
          </div>
        </DialogActions>
      </BootstrapDialog>
      {/*  */}
      {/*payment one  */}
      {/* <BootstrapDialog
        onClose={handleCloseeeee}
        aria-labelledby="customized-dialog-title"
        open={opeeeeeen}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "center" }}
          id="customized-dialog-title"
        >
          Payment
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseeeee}
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
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Card
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Card"
                name="card"
                autoComplete="text"
                autoFocus
                // value={data.name}
                // onChange={handleInputChange}
                // error={errors.name}
                // helperText={errors.name}
              />
            </Typography>
            <Typography gutterBottom sx={{ margin: "" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                Expiry Date
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Expiry Date"
                name="date"
                autoComplete="text"
                autoFocus
                // value={data.email}
                // onChange={handleInputChange}
                // error={errors.email}
                // helperText={errors.email}
              />
            </Typography>
            <Typography gutterBottom sx={{ margin: "" }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "" }}
              >
                {" "}
                CVV
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="cvv"
                name="cvv"
                autoComplete="number"
                autoFocus
                // value={data.number}
                // onChange={handleInputChange}
                // error={errors.number}
                // helperText={errors.number}
              />
            </Typography>
            <InputLabel id="demo-simple-select-helper-label" sx={{ color: "" }}>
              {" "}
              Card Holder
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="cardholder"
              name="cardholder"
              autoComplete="text"
              autoFocus
              // value={data.number}
              // onChange={handleInputChange}
              // error={errors.number}
              // helperText={errors.number}
            />
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
              text="Pay Now "
              width="350px"
              backgroundColor="rgb(77, 1, 121)"
              color="white"
              onClick={paymentSubmit}
            />
          </div>
        </DialogActions>
      </BootstrapDialog> */}
      {isPaymentDialogOpen && (
        <Elements stripe={stripePromise}>
          <StripePaymentForm onClose={handleClosePaymentDialog} />
        </Elements>
      )}

      {/* payment one  */}
    </>
  );
};

export default EventDetails;
