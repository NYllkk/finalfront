import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Buttonn from "../constants/Button";
import * as Yup from "yup";
const ResetPassword = ({ selectedIndex }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    cpassword: "",
    npassword: "",
    rnpassword: "",
    showPassword: false,
    showPassword2: false,
    showPassword3: false,
  };
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setdata({
      ...data,
      [name]: value,
    });

    setdata({
      ...data,
      [name]: value,
    });
    ValidationSchema.validateAt(name, { [name]: value })
      .then(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: null,
        }));

        if (name === "npassword" && data.rnpassword === value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            rnpassword: null,
          }));
        } else if (name === "rnpassword" && data.npassword === value) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            rnpassword: null,
          }));
        }
      })
      .catch((error) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error.message,
        }));
      });
  };
  const [data, setdata] = React.useState(initialState);
  const fileInput = useRef(null);
  const handletogglePassowrd = () => {
    setdata({
      ...data,
      showPassword: !data.showPassword,
    });
  };
  const handletogglePassowrd2 = () => {
    setdata({
      ...data,
      showPassword2: !data.showPassword2,
    });
  };
  const handletogglePassowrd3 = () => {
    setdata({
      ...data,
      showPassword3: !data.showPassword3,
    });
  };
  const handleAvatarClick = () => {
    fileInput.current.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ValidationSchema.validate(data, { abortEarly: false });
      console.log("form submitted");
    } catch (error) {
      const validationErrors = {};

      if (error.inner) {
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
      } else {
        validationErrors[error.path] = error.message;
      }

      setErrors(validationErrors);
    }
  };

  const ValidationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    cpassword: Yup.string().required("Current password is required"),
    npassword: Yup.string()
      .required("New password is required")
      .min(6, "New password must be at least 6 characters"),
    rnpassword: Yup.string()
      .required("Confirm new password is required")
      .oneOf([Yup.ref("npassword"), null], "Passwords must match"),
  });

  return (
    <>
      <Stack direction="row" spacing={""}>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Avatar
          onClick={handleAvatarClick}
          sx={{
            height: "85px",
            width: "91px",
            marginLeft: "",
            marginTop: "18px",
            cursor: "pointer",
          }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </Stack>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <TextField
          margin="normal"
          required
          id="firstName"
          label="firstName"
          name="firstName"
          autoComplete="text"
          autoFocus
          fullWidth
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          margin="normal"
          required
          id="lastName"
          label="lastName"
          name="lastName"
          autoComplete="text"
          fullWidth
          autoFocus
          value={data.lastName}
          onChange={handleChange}
          error={errors.lastName}
          helperText={errors.lastName}
        />
      </Box>
      <Box>
        {" "}
        <TextField
          margin="normal"
          required
          fullWidth
          name="cpassword"
          label=" Enter Current Password"
          type={data.showPassword ? "text" : "password"}
          id="cpassword"
          onChange={handleChange}
          //   autoComplete="current-password"
          value={data.cpassword}
          // error={Boolean(errors.cpassword)}
          // helperText={errors.cpassword}
          error={Boolean(errors.cpassword) || undefined}
          helperText={errors.cpassword}
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
          name="npassword"
          label="Enter New password"
          type={data.showPassword2 ? "text" : "password"}
          id="npassword"
          onChange={handleChange}
          //   autoComplete="current-password"
          value={data.npassword}
          error={Boolean(errors.npassword)}
          helperText={errors.npassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handletogglePassowrd2}>
                {data.showPassword2 ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="rnpassword"
          label="ReEnter New password"
          type={data.showPassword3 ? "text" : "password"}
          id="rnpassword"
          onChange={handleChange}
          //   autoComplete="current-password"
          value={data.rnpassword}
          error={Boolean(errors.rnpassword)}
          helperText={errors.cpassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handletogglePassowrd3}>
                {data.showPassword3 ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            ),
          }}
        />
        <Buttonn
          margin="10px"
          marginTop="20px"
          marginBottom="20px"
          backgroundColor="rgb(77 1 121)"
          text="Update Profile"
          color="white"
          onClick={handleSubmit}
        />
      </Box>
    </>
  );
};

export default ResetPassword;
