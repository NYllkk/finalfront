import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Fade,
  Grid,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Dailog = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [opeen, setOpeen] = React.useState(false);

  const handleClickOpen = () => {
    setOpeen(true);
  };
  const handleClose = () => {
    setOpeen(false);
  };

  const backgroundImage = `url(${plane})`;

  const heroContainerStyle = {
    minHeight: "40vh",
    background: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  const navigate = useNavigate();
  // yugyuguygugugugugugugugugugugugugu
  const isLoggedIn = localStorage.getItem("AUTHLOGGEDIN");

  const handleBooked = (event) => {
    if (isLoggedIn) {
      console.log("User is logged in");
      navigate("/about");
    } else {
      console.log("User is not logged in. Opening Dialog.");
      handleClickOpen();
    }
  };

  const handleWhatsAppShare = () => {
    console.log("sharing");
  };
  return (
    <>
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
                <Card sx={{ minWidth: 275 }}>
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
                        <BsShare size={18} onClick={handleWhatsAppShare} />
                      </div>
                      <Divider variant="fullWidth" />
                    </Typography>
                    <Typography>Organized by :</Typography>
                    <Typography>Time and Date:</Typography>
                    <Typography>Event Type:</Typography>
                    <Typography>Distance:</Typography>
                    <Typography>Price:</Typography>
                    <Typography>Passes Available:</Typography>
                  </CardContent>
                  <CardActions>
                    <Buttonn
                      text="Book Now"
                      textAlign="centre"
                      width="274px"
                      backgroundColor=" #4D0179"
                      color="white"
                      onClick={handleBooked}
                    />
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
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
          }}
        >
          <div
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
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
    </>
  );
};

export default Dailog;
