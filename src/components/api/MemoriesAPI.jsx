import axios from "axios";
import React, { useEffect, useState } from "react";
import Memories from "../accounts/Memories";
import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import { Stack } from "rsuite";
import { useNavigate, useParams } from "react-router-dom";

const MemoriesAPI = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);
  let { id } = useParams();
  const handleClick = (id) => {
    console.log("working");
    navigate(`/memoriesdetails${id}`);
  };
  useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data, "in api ");

  return (
    <>
      {loading ? (
        <CircularProgress
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "250px",
            marginTop: "100px",
          }}
        />
      ) : (
        displayedData.map((item) => (
          <Memories data={item} key={item.id} handleClick={handleClick} />
        ))
      )}

      <Box>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            onChange={(_, value) => setpages(value)}
            page={page}
          />
        </Stack>
        <Typography>Page: {currentPage}</Typography>
      </Box>
    </>
  );
};

export default MemoriesAPI;
