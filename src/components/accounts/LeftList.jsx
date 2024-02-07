import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Buttonn from "../constants/Button";

const LeftList = () => {
  const [errors, setErrors] = React.useState({});
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const navigate = useNavigate();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogoutt = () => {
    const storage = localStorage.removeItem("AUTHLOGGEDIN");
    console.log("looged out");
    setOpen(false);
    navigate("/login");
  };

  const listItems = [
    { label: "Bookings", to: "/acc/booking" },
    { label: "Payment", to: "/acc/payment" },
    { label: "Subscription", to: "/acc/subsciption" },
    { label: "My Memories", to: "/acc/memories/" },
  ];

  return (
    <>
      <Box>
        {listItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={item.to}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                {item.label && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Link>
            {index < listItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}

        <Box>
          <div>
            <Divider />
            <ListItemButton onClick={handleOpen}>Logout</ListItemButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "500px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "44px",
                }}
              >
                <DialogTitle
                  style={{ color: "black" }}
                  id="alert-dialog-title"
                >{`LOG OUT `}</DialogTitle>
                <DialogContentText id="alert-dialog-description">
                  Are You Sure Want to Logout ?
                </DialogContentText>
                <DialogActions>
                  <Buttonn
                    text="Logout"
                    color="white "
                    backgroundColor="#4d0179"
                    onClick={handleLogoutt}
                  />

                  <Buttonn
                    text="Cancel"
                    onClick={handleClose}
                    variant="contained"
                    color="default"
                  >
                    Cancel
                  </Buttonn>
                </DialogActions>
              </Box>
            </Dialog>
          </div>
        </Box>
      </Box>
    </>
  );
};
export default LeftList;
