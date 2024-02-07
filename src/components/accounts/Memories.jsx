import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const Memories = ({ data, handleClick }) => {
  // const abc = (bcd) => {
  //   console.log("abc");
  // };

  // const bcd = (test) => {
  //   console.log("bcd");
  // };
  // abc(bcd("ritik"));  wrong hai
  // abc(() => {
  //   bcd("ritik");
  // });
  return (
    <CardActionArea
      sx={{ display: "flex", gap: "20px", margin: "20px", marginLeft: "-70px" }}
    >
      <CardMedia
        onClick={() => handleClick(data.id)}
        component="img"
        image={data.image}
        alt={data.image}
        sx={{ width: "95px" }}
      />
      <Box>
        <Typography gutterBottom variant="h6" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Memories Location Lorem ipsum dolor sit amet.
        </Typography>
      </Box>
    </CardActionArea>
  );
};

export default Memories;
