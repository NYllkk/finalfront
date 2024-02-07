import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero.jsx";
import axios from "axios";
import Bookings from "../accounts/Bookings.jsx";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Buttonn from "../constants/Button.jsx";
import { Stack } from "rsuite";
const Api = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [data, Setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const itemsPerPage = 8;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => {
        console.log(res.data, "in api.js");
        Setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err, "errorrr");
      });
  }, []);
  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(
        `https://642d4d6dbf8cbecdb4027745.mockapi.io/plane/${bookingId}`
      );

      const updatedBookings = data.filter(
        (booking) => booking.id !== bookingId
      );
      Setdata(updatedBookings);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  const handleDate = () => {
    const TargetDateString = "2023-09-12T23:38:23.796Z";
    const TargetDate = new Date(TargetDateString);

    const filteredData = data.filter(
      (date) => new Date(date.createdAt) > TargetDate
    );

    Setdata(filteredData);
  };
  const handleLogoutt = () => {
    console.log("handleLogout");
  };

  const handleMonth = () => {
    const yourTargetMonthString = "09";
    const yourTargetMonth = parseInt(yourTargetMonthString, 10);

    const filteredData = data.filter((booking) => {
      const bookingMonth = new Date(booking.createdAt).getMonth() + 1;
      return bookingMonth === yourTargetMonth;
    });

    Setdata(filteredData);
  };

  const handleYear = () => {
    console.log("in handleYear");
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
        <h3>Filter BY:</h3>
        <IoFilterSharp
          onClick={handleClick}
          size={25}
          style={{ marginBottom: "28px" }}
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleDate}>
                {" "}
                <FormControlLabel
                  value="Date"
                  control={<Radio />}
                  label="Date"
                />
              </MenuItem>
              <MenuItem onClick={handleMonth}>
                <FormControlLabel
                  value="Month"
                  control={<Radio />}
                  label="Month"
                />
              </MenuItem>
              <MenuItem onClick={handleYear}>
                {" "}
                <FormControlLabel
                  value="Year"
                  control={<Radio />}
                  label="Year"
                />
              </MenuItem>
            </Menu>
          </RadioGroup>
        </FormControl>
      </Box>
      {/* {data &&
        data.map((item) => {
          console.log(item, "in API s ");
          return <Bookings data={item} key={item.id} />;
        })} */}
      {loading ? (
        <CircularProgress
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "250px",
            marginTop: "50px",
          }}
        />
      ) : (
        displayedData.map((booking) => (
          <Bookings key={booking.id} data={booking} onDelete={handleDelete} />
        ))
      )}
      <Box>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            onChange={(_, value) => setPage(value)}
            page={page}
          />
        </Stack>
        <Typography>Page: {currentPage}</Typography>
      </Box>
    </>
  );
};

export default Api;

// with pagination with button
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Bookings from "../accounts/Bookings.jsx";
// import {
//   Box,
//   CircularProgress,
//   FormControl,
//   FormControlLabel,
//   Menu,
//   MenuItem,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import { IoFilterSharp } from "react-icons/io5";
// import Buttonn from "../constants/Button.jsx";

// const Api = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleDate = () => {
//     console.log("in habndlkeDate");
//   };
//   const handleMonth = () => {
//     console.log("in handlemonth");
//   };
//   const handleYear = () => {
//     console.log("in handleyear");
//   };
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Adjust this value based on your preference

//   useEffect(() => {
//     axios
//       .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err, "Error fetching data in api.js");
//       });
//   }, []);

//   const handleDelete = async (bookingId) => {
//     try {
//       await axios.delete(
//         `https://642d4d6dbf8cbecdb4027745.mockapi.io/plane/${bookingId}`
//       );

//       const updatedBookings = data.filter(
//         (booking) => booking.id !== bookingId
//       );
//       setData(updatedBookings);
//     } catch (error) {
//       console.error("Error deleting booking:", error);
//     }
//   };

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const displayedData = data.slice(startIndex, endIndex);

//   return (
//     <>
//       <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
//         <h3>Filter BY:</h3>
//         <IoFilterSharp
//           onClick={handleClick}
//           size={25}
//           style={{ marginBottom: "28px" }}
//         />
//         <FormControl>
//           <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             defaultValue="female"
//             name="radio-buttons-group"
//           >
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             >
//               <MenuItem onClick={handleDate}>
//                 {" "}
//                 <FormControlLabel
//                   value="Date"
//                   control={<Radio />}
//                   label="Date"
//                 />
//               </MenuItem>
//               <MenuItem onClick={handleMonth}>
//                 <FormControlLabel
//                   value="Month"
//                   control={<Radio />}
//                   label="Month"
//                 />
//               </MenuItem>
//               <MenuItem onClick={handleYear}>
//                 {" "}
//                 <FormControlLabel
//                   value="Year"
//                   control={<Radio />}
//                   label="Year"
//                 />
//               </MenuItem>
//             </Menu>
//           </RadioGroup>
//         </FormControl>
//       </Box>
//       {loading ? (
//         <CircularProgress
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginLeft: "250px",
//             marginTop: "50px",
//           }}
//         />
//       ) : (
//         displayedData.map((booking) => (
//           <Bookings key={booking.id} data={booking} onDelete={handleDelete} />
//         ))
//       )}
//       <Box
//         sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
//       >
//         <Buttonn
//           text="Previous Page"
//           backgroundColor="#FFADBC"
//           color="#FF3358"
//           onClick={() =>
//             setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
//           }
//           disabled={currentPage === 1}
//         />
//         <Buttonn
//           text="Next Page"
//           backgroundColor="#FFADBC"
//           color="#FF3358"
//           onClick={() =>
//             setCurrentPage((prevPage) =>
//               Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage))
//             )
//           }
//           disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
//         />
//       </Box>
//     </>
//   );
// };

// export default Api;

// with pagination

// import React, { useState, useEffect } from 'react';
// import Hero from '../Hero/Hero.jsx';
// import axios from 'axios';

// const api = () => {
//     const [data, Setdata] = useState([]);
//     useEffect(() => {
//         axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
//             .then((res) => {
//                 Setdata(res.data);
//                 console.log(res.data, "Data fetched successfully in api.js");
//             })
//             .catch((err) => {
//                 console.log(err, "Error fetching data in api.js");
//             });
//     }, []);

//     console.log(data, "Data before rendering in api.js");

//     return (
//         <>
//             {data && data.map((item) => {
//                 console.log(item, "Data in api s");
//                 return (<Hero data={item} key={item.id} />);
//             })}
//         </>
//     )
// }

// export default api;
