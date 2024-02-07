import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";

import Headerbig from "./Headerbig";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  <a
    href="https://www.facebook.com"
    style={{ textDecoration: "none", color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <AiFillFacebook size={20} style={{ width: "20px" }} />
  </a>,
  <a
    href="https://www.instagram.com/"
    style={{ textDecoration: "none", color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <AiOutlineInstagram size={20} style={{ width: "20px" }} />
  </a>,
  <a
    href="https://in.pinterest.com/"
    style={{ textDecoration: "none", color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsPinterest size={20} style={{ width: "20px" }} />
  </a>,
  <a
    href="https://twitter.com/"
    style={{ textDecoration: "none", color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsTwitter size={20} style={{ width: "20px" }} />
  </a>,
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/"> Welcome To Winery</Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding></ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ background: "#151726", height: "50px" }}>
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
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                {" "}
                Welcome To Winery
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block", height: "20px" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff", height: "12px" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
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
        <Toolbar />
        <Headerbig />
      </Box>
    </>
  );
};

export default Header;
