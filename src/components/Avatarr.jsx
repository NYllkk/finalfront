import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

function stringToColor(string) {
  if (!string || string.length === 0) {
    return "#000000";
  }

  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xfffff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function getFirstWord(email) {
  if (!email || email.length === 0) {
    return "";
  }
  const firstWord = email.split("@")[0];

  return firstWord;
}

function stringAvatar(name, userEmail) {
  return {
    sx: {
      bgcolor: "green",
      color: "black",
    },
    children: name,
  };
}

const Avatarr = () => {
  const userEmail = useSelector((state) => state.Login?.user?.email);
  const firstName = getFirstWord(userEmail);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar {...stringAvatar(firstName[0], userEmail)} />
      <div style={{ color: "black" }}>{firstName}</div>
    </Stack>
  );
};

export default Avatarr;
