import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
useParams;
const MemoriesDeatils = () => {
  let { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://642d4d6dbf8cbecdb4027745.mockapi.io/plane/${id}`)
      .then((res) => setEventData(res.data))
      .catch((errors) => {
        console.log(errors);
      });
  }, [id]);
  return <div>MemoriesDeatils{eventData.name}</div>;
};

export default MemoriesDeatils;
