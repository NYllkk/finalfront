import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Buttonn from "../../constants/Button";
import { createTheme } from "@mui/material/styles";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import plane from "../../../assets/plane.jpg";
import backendUrl from "../../api/apiconfig";
const theme = createTheme({
  breakpoints: {},
});
const ResetPage = () => {
  const navigate = useNavigate();
  const initialState = {
    cpassword: "",
    password: "",
    showPassword: false,
  };
  const validationSchema = Yup.object({
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required")
      .test({
        name: "password-match",
        exclusive: false,
        message: "Passwords must match",
        test: function (value) {
          return (
            !(this.parent.password && this.parent.cpassword) ||
            this.parent.password === value
          );
        },
      }),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password must not contain spaces"),
  });
  const { token } = useParams();
  const [data, setdata] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    axios
      .get(`${backendUrl}/verifyToken/${token}`)
      .then((res) => {
        console.log(res);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

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
          [name]: null,
        }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error.message,
        }));
      });
  };
  const handletogglePassowrd = () => {
    setdata({
      ...data,
      showPassword: !data.showPassword,
    });
  };
  const handleSubmit = async () => {
    try {
      await validationSchema.validate(data, { abortEarly: false });

      axios
        .post(`${backendUrl}/resetPassword/${token}`, {
          password: data.password,
        })

        .then((res) => {
          console.log(res);
        })
        .catch((errors) => {
          console.log(errors);
        });

      setErrors({});

      // const response = axios.get(
      //   `http://192.168.1.27:5001/resetPassword${token}`
      // );

      console.log(token, "Form submitted successfully!");
      localStorage.setItem(
        "AUTHLOGGEDIN",
        JSON.stringify({ email: data.email, password: data.password })
      );
      navigate("/");
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
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
          <CardMedia sx={{ height: 140 }} image={plane} title="Forgot Image" />
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
              name="password"
              label="Password"
              type={data.showPassword ? "text" : "password"}
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
              value={data.password}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" onClick={handletogglePassowrd}>
                    {data.showPassword ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="cPassword"
              type={data.showPassword ? "text" : "password"}
              id="cpassword"
              onChange={handleChange}
              autoComplete="current-password"
              value={data.cpassword}
              error={Boolean(errors.cpassword)}
              helperText={errors.cpassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" onClick={handletogglePassowrd}>
                    {data.showPassword ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
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

export default ResetPage;
