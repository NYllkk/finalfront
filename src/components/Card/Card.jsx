import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import vine from "../../assets/vine.jpg";
import Buttonn from "../constants/Button";
import { Link, useNavigate } from "react-router-dom";

const CustomCard = ({
  text,
  p,
  p1,
  color,
  pic,
  onButtonClick,
  handletrigger,
  data,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // if (onButtonClick) {
    //   navigate("/eventdetails");
    // }
    if (handletrigger) {
      handletrigger();
    }
  };
  return (
    <Card
      style={{
        backgroundColor: "#ffffff",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
      }}
    >
      <CardMedia
        component="img"
        alt="Card Image"
        height="200"
        image={pic}
        title="Card Image"
        style={{
          width: "215px",
          height: "120px",
          borderRadius: "15px",
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {p}
          <br />
          {p1}
        </Typography>
      </CardContent>

      <Buttonn
        texthero="Read More"
        backgroundColor="#4D0179"
        color="white"
        width="250px"
        onClick={handleClick}
      />
    </Card>
  );
};

export default CustomCard;

// const Card = ({ text, p, p1, pic }) => {
//     const handleClick = () => {
//         // Add logic to handle navigation, for example, redirect to '/details' when the button is clicked
//         // You can use useHistory hook or any other navigation method provided by your routing solution
//         // For simplicity, using Link to navigate to '/details'
//         // You should replace '/details' with the actual route you want to navigate to
//         console.log('Button clicked! Navigating...');
//     };

//     return (
//         <div>
//             <h2>{text}</h2>
//             <p>{p}</p>
//             <p>{p1}</p>
//             <img src={pic} alt="Card" />

//             {/* Button that triggers navigation */}
//             <Link to="/details">
//                 <button onClick={handleClick}>Navigate</button>
//             </Link>
//         </div>
//     );
// };

// export default Card;
