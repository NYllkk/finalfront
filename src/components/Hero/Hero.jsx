import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import plane from "../../assets/plane.jpg";
import Buttonn from "../constants/Button";
import Card from "../Card/Card.jsx";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import vine from "../../assets/vine.jpg";
import Cardd from "../Card/Cardd.jsx";
import { PiCrownBold } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import Bigcard from "../Card/Bigcard.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = ({}) => {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://642d4d6dbf8cbecdb4027745.mockapi.io/plane")
      .then((res) => {
        console.log(res.data, "in api.js");
        Setdata(res.data);
      })
      .catch((err) => {
        console.log(err, "errorrr");
      });
  }, []);
  // if (Array.isArray(data) && data.length > 0) {
  //     const firstItemId = data[0].id;

  //     console.log(firstItemId, " in hero component ");
  // }
  const firstName = data.length > 0 ? data[0].name : null;
  const secondName = data.length > 0 ? data[1].name : null;
  const image = data.length > 0 ? data[0].image : null;
  const secondimage = data.length > 0 ? data[1].image : null;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const backgroundImage = `url(${plane})`;

  const heroContainerStyle = {
    minHeight: "100vh",
    background: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const textContainerStyle = {
    display: "flex",
    alignItems: "centre",
    flexDirection: "column",
    padding: "28px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "1.5",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  };
  const overlay = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: "0",
    left: "0",
  };

  return (
    <>
      <Box
        style={heroContainerStyle}
        sx={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536" }}
      >
        <Container style={{ position: "relative", zIndex: "2" }}>
          <div style={textContainerStyle}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Toast The GrapeVine <br />
              <div>
                A Celebration of Fine Wines
                <div>
                  <p>{firstName}</p>
                </div>
                {/* <div>
                                    {data.map((item) => (
                                        <div key={item.id}>
                                            <p>{item.name}</p>
                                        </div>
                                    ))}
                                </div> */}
              </div>
            </Typography>
            <Typography variant="body1" paragraph>
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              expedita aspernatur ab incidunt molestiae, beatae non, voluptatem
              ut nam iusto numquam, minus culpa est dicta nesciunt totam
              reprehenderit. Modi, quae?
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Buttonn text="Buy Pass" backgroundColor="white" color="black" />
          </div>
        </Container>
        <div style={overlay}></div>
      </Box>
      <section style={{ sm: "600px", md: "900px", lg: "1200px", xl: "1536" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "20px",
            }}
          >
            UPcoming Events
          </h1>

          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              margin: "20px",
            }}
          >
            rgvrgvrg
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Card
            text="@Clearview Vineyard"
            p="Oragnized By :`Frank & Karen Graessele"
            p1="Date & Time : k4jjrhgui4rgf4ugf"
            pic={vine}
          />
          <Card
            text="@Clearview Vineyard"
            p="Oragnized By :`Frank & Karen Graessele"
            p1="Date & Time : k4jjrhgui4rgf4ugf"
            pic={plane}
          />
          <Card
            text="@Clearview Vineyard"
            p="Oragnized By :`Frank & Karen Graessele"
            p1="Date & Time : k4jjrhgui4rgf4ugf"
            pic={vine}
          />
        </Box>
      </section>
      <Box
        sx={{
          backgroundColor: "#d5df9f29",
          marginTop: "50px",
          sm: "600px",
          md: "900px",
          lg: "1200px",
          xl: "1536",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} style={{ padding: "105px" }}>
              <Typography
                variant="h3"
                style={{
                  color: "black",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                }}
              >
                About Winery
              </Typography>
              <br />
              <Typography style={{ color: "black", textAlign: "left" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur veniam, earum vel molestias mollitia aliquam doloribus
                minus laudantium, officiis et, expedita molestiae quasi iure
                iste possimus? Doloremque, commodi? Non itaque vitae veritatis
                id excepturi consequatur voluptas velit rem doloremque, iste
                tempore officiis tenetur distinctio, nisi nesciunt eaque
                perferendis nostrum! Iure, nihil aliquid. Ipsa laudantium
                aliquam consectetur voluptate est sed voluptates ab sit quam!
                Deserunt sequi nihil quisquam iusto veniam delectus accusantium,
                officia, fugit neque voluptas illum corporis dolores quidem
                molestiae nobis ducimus? Consequuntur distinctio a sapiente sit
                nulla sunt adipisci aspernatur aliquid delectus dolor possimus
                reiciendis in voluptatum vero quidem quo beatae quasi fuga
                voluptates laboriosam provident, dicta, sint minima? Corporis
                quidem molestiae nobis ducimus? Consequuntur distinctio a
                sapiente sit nulla sunt adipisci aspernatur aliquid delectus
                dolor possimus reiciendis in voluptatum vero quidem quo beatae
                quasi fuga voluptates laboriosam provident, dicta, sint minima?
                Corporis quidem molest
              </Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                {" "}
                <Buttonn
                  text="know more"
                  backgroundColor="#4D0179"
                  color="white"
                  marginTop="30px"
                  padding="5px"
                />
              </Link>
            </Grid>
            <div
              className="image-grid"
              style={{ display: "flex", gap: "20px", padding: "20px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <img
                  style={{
                    width: "220px",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "100px",
                    marginTop: "25px",
                  }}
                  src={vine}
                  alt=""
                />
                <img
                  style={{
                    width: "220px",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                  src={vine}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{
                    width: "220px",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "100px",
                    marginTop: "70px",
                  }}
                  src={vine}
                  alt="Loading"
                />
              </div>
            </div>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#4D0179",
            marginTop: "50px",
            minHeight: "100vh",
            padding: "10px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              color: "white",
              fontFamily: "sans-serif",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Our Categories
          </Typography>
          <Typography
            style={{
              color: "white",
              textAlign: "centre",
              marginBottom: "50px",
              margin: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            veniam, earum vel molestias mollitia aliquam doloribus minus
            laudantium, officiis et, expedita molestiae quasi iure iste
            possimus? Doloremque, commodi? Non itaque vitae veritatis id
            excepturi consequatur voluptas velit rem doloremque, iste tempore
            officiis tenetur distinctio, nisi nesciunt
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: "20px",
            }}
          >
            <Cardd
              backgroundColor="#4D0179"
              text="Wineries"
              p=" Contrary to populars"
              color="white"
              borderRadius="12px"
              planee={vine}
            />
            <Cardd
              backgroundColor="#4D0179"
              text="Wineries"
              p=" Contrary to populars"
              color="white"
              borderRadius="12px"
              planee={vine}
            />
            <Cardd
              backgroundColor="#4D0179"
              text="Wineries"
              p=" Contrary to populars"
              color="white"
              borderRadius="12px"
              planee={vine}
            />
            <Cardd
              backgroundColor="#4D0179"
              text="Wineries"
              p=" Contrary to populars"
              color="white"
              borderRadius="12px"
              planee={vine}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/acc/subsciption" style={{ textDecoration: "none" }}>
              {" "}
              <Buttonn
                text="Get Subscription"
                color="black"
                backgroundColor="white"
                borderRadius="8px"
                marginTop="30px"
                marginBottom="60px"
              />
            </Link>
            {/* <Buttonn
                            text={
                                <div>
                                    <PiCrownBold style={{ fontWeight: "12px" }} /> Get Subscription
                                </div>
                            }
                            color="black"
                            backgroundColor="white"
                            borderRadius="8px"
                            marginTop="38px"
                            textAlign="centre"
                        /> */}
          </Box>
        </Box>
        {/* second One  */}
        <Box
          sx={{ backgroundColor: "white", marginTop: "-20px", padding: "10px" }}
        >
          <Typography
            variant="h3"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              textAlign: "center",
              marginTop: "23px",
              padding: "",
            }}
          >
            Recent Blogs
          </Typography>
          <Typography
            style={{ color: "black", textAlign: "center", margin: "30px" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            veniam, earum vel molestias mollitia aliquam doloribus minus
            laudantium, officiis et, expedita molestiae quasi iure iste
            possimus? Doloremque, commodi? Non itaque vitae veritatis id
            excepturi consequatur voluptas velit rem doloremque, iste tempore
            officiis tenetur distinctio, nisi nesciunt
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Cardd
              p1={firstName}
              text="Wineries "
              p=" Contrary to populars"
              color="black"
              borderTopRightRadius="12px"
              width="350px"
              borderTopLeftRadius="12px"
              planee={image}
            />
            <Cardd
              p1={secondName}
              text="Wineries"
              p=" Contrary to populars"
              color="black"
              width="350px"
              borderTopRightRadius="12px"
              borderTopLeftRadius="12px"
              planee={secondimage}
            />
            <Cardd
              p1="By Danial Sharp"
              text="Wineries"
              p=" Contrary to populars"
              color="black"
              width="350px"
              borderTopRightRadius="12px"
              borderTopLeftRadius="12px"
              planee={image}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/blogs">
              {" "}
              <Buttonn
                text="Read All"
                color="white"
                backgroundColor="#4D0179"
                borderRadius="8px"
                margin="20px"
              />
            </Link>
          </Box>
        </Box>

        <Bigcard />
      </Box>
    </>
  );
};

export default Hero;
