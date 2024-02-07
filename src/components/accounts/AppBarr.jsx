import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const AppBarr = ({ text }) => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#4D0179", color: "white" }}
      >
        <Toolbar>
          <Typography variant="h6">{text}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarr;
