import * as React from "react";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
const Mycomponent = ({ data }) => {
  const navigate = useNavigate();
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      margin: "16px",
      backgroundColor: "#fff",
    },
    cardImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "16px",
    },
    cardTitle: {
      fontSize: "1.5rem",
      margin: "0 0 8px 0",
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#555",
    },
  };
  const handletrigger = (id) => {
    console.log("will get here id ", id);
    navigate(`/eventdetails/${id}`);
  };
  return (
    <>
      <Card
        pic={data.image}
        text={data.name}
        p={data.createdAt}
        p1={data.time}
        handletrigger={() => handletrigger(data.id)}
      />
    </>
  );
};
export default Mycomponent;
