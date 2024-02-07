import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import vine from "../../assets/vine.jpg";
import Buttonn from "../constants/Button";
const Bigcard = ({ text, width }) => {
  return (
    <Box
      sx={{
        padding: "35px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: width,
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "black",
          justifyContent: "space-between",
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="white">
              Want to Experience New Jerseys
              <br />
              Award Winning Vintages Found Throughtout The State
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ color: "white" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              <br /> illum quam quisquam! Eligendi in repellat soluta nostrum id
              animi est!
            </Typography>
            <Buttonn
              backgroundColor="white"
              color="#4D0179"
              text="Buy Pass"
              marginTop="25px"
            />
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: 350,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
          image={vine}
          alt="Loading"
        />
      </Box>
    </Box>
  );
};
export default Bigcard;
