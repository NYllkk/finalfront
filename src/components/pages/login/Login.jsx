import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../../Slices/loginSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import axios from "axios";
import backendUrl from "../../../components/api/apiconfig.js";
const defaultTheme = createTheme();

const Login = () => {
  // const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
    showPassword: false,
  };
  const [data, setdata] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

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
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await validationSchema.validate(data, { abortEarly: false });
  //     dispatch(loginRequest(data));
  //     console.log("hi");
  //     const storedUserData = JSON.parse(localStorage.getItem("AUTH"));
  //     if (
  //       storedUserData &&
  //       data.email === storedUserData.email &&
  //       data.password === storedUserData.password
  //     ) {
  //       dispatch(loginSuccess(data));
  //       console.log("data Submitted");
  //       localStorage.setItem(
  //         "AUTHLOGGEDIN",
  //         JSON.stringify({ email: data.email, name: data.password })
  //       );
  //       console.log("top of naviagte");
  //       navigate("/");
  //     }
  //     console.log("form registered");
  //   } catch (error) {
  //     const errors = {};
  //     error.inner.forEach((e) => {
  //       errors[e.path] = e.message;
  //     });
  //     setErrors(errors);
  //     dispatch(loginFailure(data));
  //     console.log("errors");
  //     console.log("errors");
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Backend URL: ${backendUrl}`);
    try {
      await validationSchema.validate(data, { abortEarly: false });
      // dispatch(loginRequest(data));

      const res = await axios.post(`${backendUrl}/login`, {
        email: data.email,
        password: data.password,
      });
      dispatch(loginSuccess({ user: data, token: res.data.token }));
      console.log("Data Submitted");
      localStorage.setItem(
        "AUTHLOGGEDIN",
        JSON.stringify({ email: data.email, name: data.password })
      );
      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password must not contain spaces"),
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        style={{
          margin: "0px",
          gap: "12px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "centre",
          padding: "20px",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            borderRadius: "8px",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "left", width: "100%" }}
            >
              Welcome Back
            </Typography>
            <Typography>
              Join Our Wine Community and get exiting Offers, evenyt invitation
              and , and update on New Realeses. Sign up Now !
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
                display: "contents",
              }}
            >
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
                error={Boolean(errors.email)}
                helperText={errors.email}
                autoFocus
              />
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
                    <InputAdornment
                      position="end"
                      onClick={handletogglePassowrd}
                    >
                      {data.showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    minWidth: "100%",
                    justifyContent: "end",
                  }}
                >
                  <Link sx={{ color: "purple" }} to="/forget">
                    Forgot Password
                  </Link>
                </Grid>
              </Grid>
              <Button
                style={{ background: " rgb(95, 3, 166)" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;

// //////////

// ... (imports)

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required")
//     .matches(/^\S*$/, "Password must not contain spaces"),
// });

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const initialState = {
//     email: "",
//     password: "",
//     token: "", // Removed the token from initial state as it will be received from the API
//     showPassword: false,
//   };

//   const [data, setData] = React.useState(initialState);
//   const [errors, setErrors] = React.useState({});

//   const handleChange = (e) => {
//     // ... (unchanged)
//   };

//   const handleTogglePassword = () => {
//     // ... (unchanged)
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await validationSchema.validate(data, { abortEarly: false });
//       dispatch(loginRequest(data));

//       const res = await axios.post("http://192.168.1.18:5001/login", {
//         email: data.email,
//         password: data.password,
//       });

//       dispatch(loginSuccess({ user: data, token: res.data.token }));
//       console.log("Data Submitted");
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//       console.log(error);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       {/* ... (rest of the component) */}
//     </ThemeProvider>
//   );
// };

// export default Login;
