import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Buttonn from "../constants/Button";
import { MdForwardToInbox } from "react-icons/md";

const listItemStyle = {
  listStyle: "none",
  padding: 0,
};

const Footer = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#4D0179",
          padding: "40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          sm: "600px",
          md: "900px",
          lg: "1200px",
          xl: "1536",
          color: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h6"> Our Newsletter</Typography>
              <Typography variant="body1">
                We'll send you nice letter per week.No spam{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                borderRadius: "12px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: "16px",
                  marginLeft: "15px",
                  color: "black",
                }}
              >
                <MdForwardToInbox />
              </div>
              <input
                style={{
                  border: "none",
                  borderRadius: "12px",
                  width: "374px",
                  outline: "none",
                  fontWeight: "12px",
                  marginLeft: "30px",
                  padding: "6px",
                }}
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
            </div>
          </Grid>
          <Buttonn
            backgroundColor="white"
            text="Subscribe"
            color="#980cff"
            marginLeft="30px"
            borderRadius="10px"
            width="123px"
            padding="0px"
            paddingTOp="0px"
            marginTop="20px"
          />
        </Grid>
      </Box>
      {/* second one  */}
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          marginTop: "60px",
          sm: "600px",
          md: "900px",
          lg: "1200px",
          xl: "1536",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <h2>Logo</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit minus accusamus fugit? Quisquam debitis aspernatur
                iure nostrum, eum et temporibus beatae numquam facilis inventore
                incidunt exercitationem architecto cupiditate! Iusto, minima
                soluta veniam, recusandae, voluptatibus odio commodi quisquam
                repellendus sed perspiciatis voluptate quae pariatur optio
                aliquam quas? Odio fuga aspernatur maiores.
              </p>
            </Grid>
            <Grid item xs>
              <h2>Useful Links</h2>
              <ul style={listItemStyle}>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
              </ul>
            </Grid>
            <Grid item xs>
              <h2>Legal </h2>
              <ul style={listItemStyle}>
                <li>term & Condition</li>
                <li>term & Condition</li>
              </ul>
            </Grid>
            <Grid item xs>
              <h2>Contact Us</h2>
              <ul style={listItemStyle}>
                <li>98475564322</li>
                <li>98475564322</li>
                <li>98475564322</li>
                <li>98475564322</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
