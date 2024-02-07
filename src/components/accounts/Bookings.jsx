import React from "react";
import AppBarr from "./AppBarr";
import { Box, Button, Pagination, Paper, Typography } from "@mui/material";
import Buttonn from "../constants/Button";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { IoFilterSharp } from "react-icons/io5";
import { Stack } from "rsuite";

const Bookings = ({ data, onDelete }) => {
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const itemsPerPage = 4;
  const handleChange = (event, value) => {
    setPage(1);
    setSearchTerm(value);
  };
  const filteredData = Array.isArray(data)
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          margin: "20px",
          padding: "12px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h4>{data.name}</h4>

          <Buttonn
            text="Cancel Booking"
            backgroundColor="#FFADBC"
            color="#FF3358"
            onClick={() => onDelete(data.id)}
          />
        </Box>
        <Box>
          <h4>Organized BY :{data.name}</h4>
        </Box>
        <Box sx={{ marginTop: "60px" }}>
          {" "}
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <div>Date and Time</div>
              {data.createdAt}
            </Grid>
            <Grid item xs={3}>
              <div>Event Type</div>
              {data.name}
            </Grid>
            <Grid item xs={3}>
              <div>Total Passes</div>
              {data.id}
            </Grid>
            <Grid item xs={3}>
              <div>Price</div>
              {data.price}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Bookings;
