// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// const GoogleMap = () => {
//     const mapOptions = {
//
//     };

//     const mapCenter = {
//
//         lat: 0,
//         lng: 0,
//     };

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "100vh",
//                 width: "100%",
//             }}
//         >
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places' }}
//                 options={mapOptions}
//                 zoom={10} // Adjust the zoom level as needed
//                 center={mapCenter}
//                 defaultMapTypeId="roadmap"
//                 style={{ width: "100%", height: "100%" }}
//                 onGoogleApiLoaded={({ map, maps }) => console.log("Map Component Loaded...")}
//             />
//         </div>
//     );
// };

// export default GoogleMap;
//  // // // // // // // // // // /// ///////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import CardContent from "@mui/material/CardContent";
import { IoLocationOutline } from "react-icons/io5";
import {
  Box,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import axios from "axios";
import dayjs from "dayjs";
import * as Yup from "yup";

import Buttonn from "../components/constants/Button";
import { IoGridOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import Card from "../components/Card/Card";

import vine from "../assets/vine.jpg";
import plane from "../assets/plane.jpg";

import EventDetails from "../components/pages/EventCatagories/EventDetails.jsx";
import { useNavigate } from "react-router-dom";
import Mycomponent from "./Mycomponent.jsx";

const GoogleMap = ({}) => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [distance, setDistance] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(10);
  const [errors, setErrors] = useState({});
  const [data, setdata] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [value, setValue] = useState([
    dayjs("2023-10-17"),
    dayjs("2024-04-21"),
  ]);

  const markers = [
    { lat: 30.72927, lng: 76.779582 },
    // upeer is for city bird
    { lat: 30.704649, lng: 76.717873 },
    // uper for mohali
    { lat: 30.694208, lng: 76.860565 },
    // upper for panchkula ,
    { lat: 30.748882, lng: 76.641357 },
    // upper for kharar
    { lat: 30.65678, lng: 76.807358 },
  ];

  function valuetext(value) {
    return `${(value, "miles")}°C`;
  }
  console.log(value, "in miles valuetext");
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };

  // map  start
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    maxZoom: 15,
    minZoom: 5,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
  //

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  const handleSliderChange = (event, newValue) => {
    setSelectedDistance(newValue);

    if (mapCenter) {
      const milesToKilometers = 1.60934;
      const distanceInKm = newValue * milesToKilometers;

      const filtered = markers.filter((marker) => {
        const markerDistance = calculateDistance(
          mapCenter.lat,
          mapCenter.lng,
          marker.lat,
          marker.lng
        );
        return markerDistance <= distanceInKm;
      });

      setFilteredMarkers(filtered);
      setSelectedMarker(null);
    }
  };

  const handleMarkerClick = (event, marker) => {
    setSelectedMarker(marker);
    if (mapCenter) {
      const markerDistance = calculateDistance(
        mapCenter.lat,
        mapCenter.lng,
        marker.lat,
        marker.lng
      );
      setDistance(markerDistance);
    }
  };
  // work here l2wjidiowhdiuhduhgdugdugugugudg

  const validationSchema = Yup.object().shape({
    location: Yup.string().required("Location is required"),
  });
  const valueget = (e) => {
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
  const handleSubmit = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });

      console.log("Form is valid!", values);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      console.error("Validation error:", validationErrors);
    }
  };

  // work here lkewjwehjidehifdhifhiehfiehfiheifheihfi
  //   new handleChange

  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const itemsPerPage = 4;

  const handleChange = (event, value) => {
    setPage(1);
    setSearchTerm(value);
  };

  // new HandleChange
  const handleClick = () => {
    console.log("invoked in google map");
  };
  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const mapCenter = {
    lat: 30.738006,
    lng: 76.774167,
  };

  const handleMarkerHover = (event, marker) => {
    console.log("hovere.......", marker);
  };

  const handleGridClick = () => {
    setShowGrid(true);
    setShowButton(false);
  };

  const handleMapClick = () => {
    setShowButton(true);
    setShowGrid(false);
  };
  // ///l3eidodoeudouudiduiuidihdi
  useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data, "in gogole map");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  // for paginaton
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const postsPerPage = 3;
  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  // for paginaton
  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //   };
  //   const createdAt = currentPosts.length > 0 ? currentPosts[1].createdAt : null;
  //   const createdAt1 = currentPosts.length > 0 ? currentPosts[0].createdAt : null;
  //   const firstName = currentPosts.length > 0 ? currentPosts[0].name : null;
  //   const secondName = currentPosts.length > 1 ? currentPosts[1].name : null;
  //   const image = currentPosts.length > 0 ? currentPosts[0].image : null;
  //   const secondimage = currentPosts.length > 1 ? currentPosts[1].image : null;

  const handleButtonClick = () => {
    console.log("Button clicked on Page1");
  };

  // for pagination
  const handleInputChange = (e) => [console.log("handleChange")];
  const Marker = ({ onClick, onMouseOver }) => (
    <div onClick={onClick} onMouseOver={onMouseOver}>
      <IoLocationOutline style={{ fontSize: "24px", color: "red" }} />
    </div>
  );
  const InfoWindow = ({ onClose, lat, lng, children }) => (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontWeight: "bold",
        fontSize: "10px",
      }}
    >
      <IconButton
        onClick={onClose}
        style={{ position: "absolute", right: "0px", top: "0px" }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </div>
  );
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#4D0179",
          height: "50px",
          margin: "20px",
          color: "white",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        Events
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          [breakpoints.md]: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h4>Filter By</h4>
              <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="text"
                autoFocus
                // onChange={valueget}
                // value={value.location}
                // error={Boolean(errors.location)}
                // helperText={errors.location}
              />
              <h4>Select Distance</h4>
              <Typography variant="body2">
                Distance: {selectedDistance} miles
              </Typography>
              <Slider
                aria-label="Temperature"
                value={selectedDistance}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
                onChange={handleSliderChange}
                style={{ color: "#4D0179" }}
              />
              <h4>Wine Type</h4>
              <Select
                sx={{ minWidth: "370px" }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={data.data}
                name="country"
                onChange={handleInputChange}
                error={errors.country}
                helperText={errors.country}
              >
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="null">No Wines Available</MenuItem>
                )}
              </Select>

              {/* date Component start*/}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateRangePicker", "DateRangePicker"]}
                >
                  <DemoItem label="Date" component="DateRangePicker">
                    <DateRangePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>

              {/* date Component finish*/}
              {/* button place start  */}
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  width: "100%",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Buttonn
                  backgroundColor="#4D0179"
                  color="white"
                  text="Apply"
                  marginTop="25px"
                  width="350px"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
                <Buttonn
                  backgroundColor="white"
                  color="#4D0179"
                  text="Clear"
                  marginTop="25px"
                  width="350px"
                  marginBottom="12px"
                />
                {/*  */}
              </div>

              {/* button place finish  */}
            </Grid>
            <Grid item xs={8}>
              {/* search box */}
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "120px",
                  marginRight: "300px",
                  bgcolor: "",
                  marginLeft: "20px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "12px",
                    borderColor: "black",
                    borderStyle: "",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Here"
                    inputProps={{ "aria-label": "search Here" }}
                    value={searchTerm}
                    onChange={(e) => handleChange(e, e.target.value)}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    disableRipple
                  >
                    <SearchIcon sx={{ marginLeft: "120px" }} />
                  </IconButton>
                </Box>
              </Paper>
              {/* new component will gets add here  */}
              {/* search box end  */}
              <Grid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    marginLeft: "444px",
                    marginTop: "-34px",
                    display: "flex",
                    justifyContent: "end",
                    gap: "12px",
                    marginRight: "15px",
                    alignContent: "",
                    alignItems: "",
                  }}
                >
                  <div>View as:</div>
                  <div>
                    {" "}
                    <IoGridOutline onClick={handleGridClick} />{" "}
                  </div>
                  <div>
                    <BiMap onClick={handleMapClick} />
                  </div>
                </Grid>
                <CardContent>
                  <div>
                    {/* upeer one is for map  */}
                    <div style={{ height: "400px", padding: "20px" }}>
                      {showButton && (
                        <GoogleMapReact
                          options={{
                            maxZoom: 12,
                            minZoom: 12,
                          }}
                          zoom={10}
                          center={mapCenter}
                          defaultMapTypeId="roadmap"
                          onGoogleApiLoaded={({ map, maps }) =>
                            console.log("Map Component Loaded...")
                          }
                        >
                          {filteredMarkers.map((marker, index) => (
                            <Marker
                              key={index}
                              lat={marker.lat}
                              lng={marker.lng}
                              text={marker.text}
                              onClick={(event) =>
                                handleMarkerClick(event, marker)
                              }
                              onMouseOver={(event) =>
                                handleMarkerHover(event, marker)
                              }
                            />
                          ))}
                          {selectedMarker && (
                            <InfoWindow
                              lat={selectedMarker.lat}
                              lng={selectedMarker.lng}
                              onClose={handleInfoWindowClose}
                            >
                              <div>
                                <h3>{selectedMarker.locationName}</h3>
                                <p>
                                  Distance: {distance && distance.toFixed(2)} km
                                </p>
                              </div>
                            </InfoWindow>
                          )}
                        </GoogleMapReact>
                      )}
                    </div>
                    {/* after  Show grid  data */}
                    {showGrid && (
                      <div>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            marginTop: "-390px",
                            flexWrap: "wrap",
                            gap: "16px",
                          }}
                        >
                          {/* will return here cards with api  */}
                          {/* <Card
                            text="@Clearview Vineyard"
                            p="Organized By"
                            p1={`Date & Time: ${createdAt}`}
                            pic={vine}
                            onButtonClick={handleButtonClick}
                          />
                          <Card
                            text="@Clearview Vineyard"
                            p={firstName}
                            p1={createdAt}
                            pic={image}
                          />
                          <Card
                            text="@Clearview Vineyard"
                            p={firstName}
                            p1={createdAt1}
                            pic={image}
                          />
                          <Card
                            text="@Clearview Vineyard"
                            p="Oragnized By :`Frank & Karen Graessele"
                            p1={createdAt}
                            pic={image}
                          /> */}

                          {displayedData.map((item) => (
                            <Mycomponent data={item} key={item.id} />
                          ))}
                          {/* will return here cards with api  */}
                        </Box>
                        <Stack spacing={2}>
                          <Pagination
                            count={Math.ceil(
                              filteredData.length / itemsPerPage
                            )}
                            onChange={(_, value) => setPage(value)}
                            page={page}
                          />
                        </Stack>
                        <Typography>Page: {page}</Typography>
                      </div>
                    )}
                    {/* after  Show grid  data */}
                    {!showButton && !showGrid && (
                      <div style={{ height: "", width: "" }}>
                        <GoogleMapReact
                          options={{
                            maxZoom: 12,
                            minZoom: 12,
                          }}
                          zoom={10}
                          center={mapCenter}
                          defaultMapTypeId="roadmap"
                          onGoogleApiLoaded={({ map, maps }) =>
                            console.log("Map Component Loaded...")
                          }
                        >
                          {filteredMarkers.map((marker, index) => (
                            <Marker
                              key={index}
                              lat={marker.lat}
                              lng={marker.lng}
                              text={marker.text}
                              onClick={(event) =>
                                handleMarkerClick(event, marker)
                              }
                              onMouseOver={(event) =>
                                handleMarkerHover(event, marker)
                              }
                            />
                          ))}
                          {selectedMarker && (
                            <InfoWindow
                              lat={selectedMarker.lat}
                              lng={selectedMarker.lng}
                              onClose={handleInfoWindowClose}
                            >
                              <div>
                                <h3>{selectedMarker.locationName}</h3>
                                <p>
                                  Distance: {distance && distance.toFixed(2)} km
                                </p>
                              </div>
                            </InfoWindow>
                          )}
                        </GoogleMapReact>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const CloseIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="#000000"
      d="M18.36 6L12 12.37 5.64 6 4 7.64l6 6-6 6L5.64 18 12 11.63 18.36 18 20 16.36l-6-6 6-6z"
    />
  </svg>
);
export default GoogleMap;

// xs, extra - small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra - large: 1536px

//

// <>
//     {/* Button to show the map */}
//     <Buttonn
//         backgroundColor="rgb(161, 211, 5)"
//         color="white"
//         text="Show Map"
//         marginTop="25px"
//         width="350px"
//         onClick={handleMapClick}
//     />

//     {/* Grid (or any other element) that shows the button when clicked */}
//     <div onClick={handleGridClick}>
//         {showButton && (
//             <Buttonn
//                 backgroundColor="rgb(161, 211, 5)"
//                 color="white"
//                 text="Show Button"
//                 marginTop="25px"
//                 width="350px"
//                 onClick={() => setShowButton(false)}
//             />
//         )}
//     </div>

//     {/* Conditionally render the map */}
//     {!showButton && (
//         <GoogleMapReact
//             options={{
//                 maxZoom: 12,
//                 minZoom: 12,
//             }}
//             zoom={10}
//             center={mapCenter}
//             defaultMapTypeId="roadmap"
//             onGoogleApiLoaded={({ map, maps }) => console.log("Map Component Loaded...")}
//         >
//             {/* ... (previous markers and components) */}
//         </GoogleMapReact>
//     )}
// </>
//   );
