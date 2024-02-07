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
import { useNavigate } from "react-router-dom";
import backendUrl from "../../api/apiconfig";
// import plane from "";
// import { Navigate } from "react-router-dom";
const theme = createTheme({
  breakpoints: {},
});
const ForgotPassword = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
  };
  const [errors, setErrors] = useState({});
  const [data, setdata] = useState(initialState);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const handleChange = (e) => {
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
  //   const { email } = response;
  // const navigate = Navigate();
  const handleSubmit = async () => {
    try {
      await validationSchema.validate(data, { abortEarly: false });
      const response = await axios.post(`${backendUrl}/forgot-password`, {
        email: data.email,
      });
      if (response.status == 200) {
        navigate("/check");
      }

      console.log("submitted");
    } catch (error) {
      if (error && error.inner) {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

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
              Forgot Password ?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              hic omnis molestias!
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={data.email}
              error={errors.email}
              helperText={errors.email}
              autoFocus
            />
          </CardContent>

          <Buttonn
            backgroundColor="#4D0179"
            color="white"
            text="Submit"
            marginTop="1px"
            width="530px"
            marginBottom="12px"
            padding="12px"
            onClick={handleSubmit}
          />
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
