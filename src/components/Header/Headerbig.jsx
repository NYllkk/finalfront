import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Buttonn from "../constants/Button.jsx";
import Avatarr from "../Avatarr.jsx";
// import DialogContentText from "@mui/material/DialogContentText";

import { useNavigate, Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  MenuItem,
  FormControlLabel,
  Menu,
} from "@mui/material";
const drawerWidth = 240;

const navItems = [
  <Link style={{ textDecoration: "none", color: "black" }} to="/about">
    About Us
  </Link>,
  <Link to="/event " style={{ textDecoration: "none", color: "black" }}>
    Event Catagories
  </Link>,
  <Link to="/blogs" style={{ textDecoration: "none", color: "black" }}>
    Blogs
  </Link>,
  <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
    Contact Us
  </Link>,
];

const Headerbig = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isLoggedIn = localStorage.getItem("AUTHLOGGEDIN");
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEl(null);
  };

  //
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
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
  //   const userEmail = useSelector(state => state.Login?.user?.email);
  //   console.log(userEmail, "in selector")
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black" }}
    >
      <Typography sx={{ my: 2 }}>Welcome To Winery</Typography>
      <Divider />
      <List></List>
    </Box>
  );
  //   <p>User Email: {userEmail}</p>
  // https://fakestoreapi.com/products Api

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleSelect = () => {
    console.log("in HanldleSelect");
  };
  return (
    <>
      <Box sx={{ display: "flex", height: "105px" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "white",
            height: "50px",
            top: "50px",
            color: "black",
          }}
          variant="paper"
        >
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Logo
              {/* store Selector  */}
              {/* <p>User Email: {userEmail}</p> */}
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                },
              }}
            >
              <div
                className="lejkfk"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "950px",
                }}
              >
                <div style={{ display: "flex" }}>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: "black" }} disableRipple>
                      {item}
                    </Button>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "12px",
                    padding: "12px",
                    marginBottom: "12px",
                  }}
                >
                  {isLoggedIn ? (
                    <div style={{ color: "white" }} onClick={handleClick}>
                      <Avatarr />
                    </div>
                  ) : (
                    <>
                      <Link style={{ textDecoration: "none" }} to="/signup">
                        <Buttonn text="Sign UP " marginLeft="500px" />
                      </Link>
                      <Link style={{ textDecoration: "none" }} to="/login">
                        <Buttonn
                          text="Log In "
                          backgroundColor=" #4D0179"
                          color="white"
                        />
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div>
                <Dialog
                  className="he there"
                  sx={{
                    display: "flex",
                    width: "500px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "550px",
                  }}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "500px",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "centre",
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
                        backgroundColor="rgb(77 1 121)"
                        color="white"
                        onClick={handleLogoutt}
                      />
                      <Buttonn text="Cancel" onClick={handleClose} />
                    </DialogActions>
                  </div>
                </Dialog>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Box>
        <div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={opens}
            onClose={handleCloses}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <Link to="/acc" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default Headerbig;
