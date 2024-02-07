import React, { useState } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LeftList from "./LeftList";

import AppBarr from "./AppBarr";
// import Bookings from "./Bookings";
import ResetPassword from "./ResetPassword";
import { Link, Route, Routes } from "react-router-dom";
import Bookings from "./Bookings";
import Payment from "./Payment";
import Account from "./Account";
import Subscriptions from "./Subscriptions";
import Memories from "./Memories";
import Api from "../api/api";
import MemoriesAPI from "../api/MemoriesAPI";
import MemoriesDeatils from "./MemoriesDeatils";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HeaderAcounts = ({ selected }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectedIndex = (index) => {
    setSelectedComponent(index);
  };

  return (
    <>
      <AppBarr text="Accounts" />
      <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
        <Box sx={{ bgcolor: "", height: "" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={5}>
                <Box>
                  <LeftList />
                </Box>
              </Grid>
              <Grid item xs={6} md={7}>
                <Box>
                  <Routes>
                    {/* <Route path="" element={<Api />} /> */}
                    <Route path="" element={<ResetPassword />} />
                    <Route path="booking" element={<Api />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="subsciption" element={<Subscriptions />} />
                    <Route path="memories" element={<MemoriesAPI />} />
                    <Route
                      path="/memoriesdetails/:id"
                      element={<MemoriesDeatils />}
                    />
                  </Routes>
                  {/* <Bookings /> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderAcounts;
