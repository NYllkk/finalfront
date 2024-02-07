import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../../../Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import backendUrl from "../../api/apiconfig";

// http://192.168.1.18:5001/signup
const defaultTheme = createTheme();

const Signup = () => {
  const initialstate = {
    firstName: "",
    lastName: "",
    email: "",
    zipCode: null,
    password: "",
    Cpassword: "",
    showPassword: false,
    state: "",
    country: "",
  };
  const [data, setdata] = useState(initialstate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [Country, setCountry] = useState("");
  useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => setCountry(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(Country, "in signup");

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

  const handlePasswordVisibilityToggle = () => {
    setdata({
      ...data,
      showPassword: !data.showPassword,
    });
    console.log("working");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(data, { abortEarly: false });
      const res = await axios.post(`${backendUrl}/signup`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        state: data.state,
        zipCode: data.zipCode,
        password: data.password,
        country: data.country,
      });
      console.log(backendUrl, "in api in singup ");
      dispatch(registerSuccess(data));
      localStorage.setItem("AUTH", JSON.stringify(data));
      console.log("klwdjckwn");
      setdata(initialstate);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setErrors({
          email:
            "User with this email already exists. Please use a different email.",
        });
      } else {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      }
    }
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Name is required")
      .matches(/^\S*$/, "Name must not contain spaces"),
    lastName: Yup.string()
      .required("lastName is required")
      .matches(/^\S*$/, "lastName must not contain spaces"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    zipCode: Yup.number().required("zipCode is required"),
    state: Yup.string()
      .required("State is required")
      .matches(/^\S*$/, "State must not contain spaces"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password must not contain spaces"),
    Cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(6, "Password must be at least 6 characters")
      .required("Confirm Password is required")
      .matches(/^\S*$/, "Password must not contain spaces"),
    country: Yup.string()
      .required("Country is required")
      .matches(/^\S*$/, "Country must not contain spaces"),
  });

  const handleCountryChange = () => {};
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
        }}
        padding="20px"
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

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          elevation={6}
          square
          sx={{ display: "flex" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "left", width: "100%", padding: "10px" }}
            >
              Sign Up
            </Typography>
            <Typography sx={{ padding: "10px" }}>
              Join Our Wine Community and get exiting Offers, evenyt invitation
              and , and update on New Realeses. Sign up Now !
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, padding: "10px" }}
            >
              <div
                className="upperField"
                style={{
                  display: "flex",
                  gap: "2px",
                  justifyContent: "space-between",
                }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  sx={{ color: "black" }}
                >
                  First Name
                </InputLabel>
                <InputLabel
                  sx={{ marginRight: "220px", color: "black" }}
                  id="demo-simple-select-helper-label"
                >
                  {" "}
                  Last Name
                </InputLabel>
              </div>
              <div
                className="upperField"
                style={{ display: "flex", gap: "12px" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  autoComplete="text"
                  autoFocus
                  value={data.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  helperText={errors.firstName}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  value={data.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "black" }}
              >
                email
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="text"
                value={data.email}
                autoFocus
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email}
              />
              <div
                className="upperField"
                style={{
                  display: "flex",
                  gap: "2px",
                  justifyContent: "space-between",
                }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  sx={{ color: "black" }}
                >
                  State
                </InputLabel>
                <InputLabel
                  sx={{ marginRight: "230px", color: "black" }}
                  id="demo-simple-select-helper-label"
                >
                  Zip Code
                </InputLabel>
              </div>
              <div
                className="downfield"
                style={{ display: "flex", gap: "12px" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="state"
                  label="state"
                  name="state"
                  autoComplete="text"
                  autoFocus
                  value={data.state}
                  onChange={handleInputChange}
                  error={errors.state}
                  helperText={errors.state}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="zipCode"
                  label="zipCode"
                  name="zipCode"
                  autoComplete="number"
                  autoFocus
                  value={data.zipCode}
                  onChange={handleInputChange}
                  error={errors.zipCode}
                  helperText={errors.zipCode}
                />
              </div>
              {/* select Country */}
              {/* mapping of data  */}
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "black", padding: "10px", marginLeft: "-9px" }}
              >
                Select Country
              </InputLabel>
              <Select
                sx={{ minWidth: "620px" }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={data.country}
                name="country"
                onChange={handleInputChange}
                error={errors.country}
                helperText={errors.country}
              >
                {Array.isArray(Country) && Country.length > 0 ? (
                  Country.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="null">No countries available</MenuItem>
                )}
              </Select>
              {/* mapping of data  */}
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "black", padding: "10px", marginLeft: "-9px" }}
              >
                Password
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="text"
                type={data.showPassword ? "text" : "password"}
                value={data.password}
                autoFocus
                onChange={handleInputChange}
                error={errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={handlePasswordVisibilityToggle}
                    >
                      {data.showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  ),
                }}
              />
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ color: "black", padding: "" }}
              >
                Confirm Password
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Cpassword"
                label="Confirm password"
                name="Cpassword"
                autoComplete="text"
                value={data.Cpassword}
                autoFocus
                onChange={handleInputChange}
                type={data.showPassword ? "text" : "password"}
                error={errors.Cpassword}
                helperText={errors.Cpassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={handlePasswordVisibilityToggle}
                    >
                      {data.showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="By Signing in agree to our terms and conditions "
              />
              <Button
                style={{ background: "#5f03a6", padding: "10px" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {/* {errors && (
                <Typography sx={{ color: "red", padding: "10px" }}>
                  {errors.email}
                </Typography>
              )} */}
              <Grid container>
                {/* <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid> */}
                <Grid item>
                  <Link to="/login" style={{ color: "black", padding: "10px" }}>
                    {"Already have acc login "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
