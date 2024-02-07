import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Buttonn from "../constants/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import * as Yup from "yup";
const Subscriptions = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [opend, setopend] = useState(false);
  const handleopend = () => {
    setopend(true);
  };
  const handleClose = () => {
    setopend(false);
  };
  const WineryMemberShip = () => {
    handleopend();
    console.log("in Winery MemberShip");
  };
  const handleSubmit = () => {
    console.log("in hankdeSubmit ");
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

  const [count, setCount] = useState(1);

  const [opeeen, setOpeeen] = useState(false);
  const AssociateMemeberShip = () => {
    handleopend();
    console.log("in AssociateMemeberShip ");
  };
  const VineyardMemeberShip = () => {
    handleopend();
    console.log("VineyardMemeberShip");
  };
  const initialstate = {
    name: "",
    email: "",
    number: "",
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
  const [errors, setErrors] = useState({});
  const [data, setdata] = useState(initialstate);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
    console.log(data);
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      })
      .catch((error) => {
        setErrors((prev) => ({
          ...prev,
          [name]: error.message,
        }));
      });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "centre",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Choose Your Subscription Plan Wisely{" "}
        </h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Winery Membership
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Price:$1000/Year
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, quo aliquid. Ex dolores fuga nostrum, ad consequatur
                ipsum labore mollitia.
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Buttonn
                onClick={WineryMemberShip}
                text="Buy Plan"
                backgroundColor="#4D0179"
                color="white"
              />
            </Box>
          </Box>
        </Card>
        <Box>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Accociate Membership
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Price:$1000/Year
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, quo aliquid. Ex dolores fuga nostrum, ad consequatur
                  ipsum labore mollitia.
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <Buttonn
                  onClick={AssociateMemeberShip}
                  text="Buy Plan"
                  backgroundColor="#4D0179"
                  color="white"
                />
              </Box>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Vineyard Membership
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Price:$1000/Year
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, quo aliquid. Ex dolores fuga nostrum, ad consequatur
                  ipsum labore mollitia.
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <Buttonn
                  onClick={VineyardMemeberShip}
                  text="Buy Plan"
                  backgroundColor="#4D0179"
                  color="white"
                />
              </Box>
            </Box>
          </Card>
        </Box>
        <Box>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={opend}
          >
            <DialogTitle
              sx={{ m: 0, p: 2, textAlign: "center" }}
              id="customized-dialog-title"
            >
              Book Now
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
            <form action="" onSubmit={handleSubmit}>
              <DialogContent sx={{ padding: "20px" }}>
                <Typography
                  variant="p"
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, delectus?
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
                padding: "20px",
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
                  marginTop="-25px"
                  onClick={handleSubmit}
                />
              </div>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};
export default Subscriptions;
