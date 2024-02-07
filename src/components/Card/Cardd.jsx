import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import plane from "../../assets/plane.jpg";
import { Box } from "@mui/material";

const Cardd = ({
  backgroundColor,
  text,
  p,
  color,
  width,
  p1,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderRadius,
  planee,
  marginBottom,
}) => {
  return (
    <Box
      sx={{
        maxWidth: 345,
        backgroundColor: backgroundColor,
        text: text,
        color: color,
        p: p,
        p1: p1,
        // width: width
        borderTopRightRadius: borderTopRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        marginBottom: marginBottom,
        // plane: plane
      }}
    >
      <CardMedia
        component="img"
        // height="140"
        width="350px"
        image={planee}
        // style={{ height: "215px", width: "250px" }}
        sx={{
          borderTopRightRadius: borderTopRightRadius,
          borderTopLeftRadius: borderTopLeftRadius,
          width: width,
          // height: height,
          borderRadius: borderRadius,
        }}
        alt="Loading"
      />
      <CardContent>
        <p style={{ color: "#4D0179" }}> {p1}</p>
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
        <Typography variant="body2">{p}</Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button style={{ color: "white" }}>Read More --</Button>
      </CardActions>
    </Box>
  );
};

export default Cardd;
