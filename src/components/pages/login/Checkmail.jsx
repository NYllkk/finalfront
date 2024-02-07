import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Buttonn from "../../constants/Button";
import { createTheme } from "@mui/material/styles";
import { Try } from "@mui/icons-material";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
// import plane from "";
// import { Navigate } from "react-router-dom";
const theme = createTheme({
  breakpoints: {},
});
// const navigate = Navigate();
const Checkmail = () => {
  //   const { email } = response;

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          margin: "",
          padding: "20px",
        }}
      >
        <Card
          sx={{
            borderRadius: "12px",
            border: "",
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={""} title="Forgot Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Check Your Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            </Typography>
          </CardContent>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Buttonn
              backgroundColor="#4D0179"
              color="white"
              text="Done"
              marginTop="1px"
              width="390px"
              marginBottom="12px"
              padding="12px"

              // onClick={handleSubmit}
            />
          </Link>
        </Card>
      </Container>
    </ThemeProvider>
  );
};
//mail.google.com/mail/u/0/#inbox

export default Checkmail;
