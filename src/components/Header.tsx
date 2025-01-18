import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Booking", "Cars", "Contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: "3rem", width: "3rem", marginBottom: "1rem" }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Section: Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "5rem",
                width: "5rem",
                marginRight: "1rem",
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontFamily: "Poppins" }}
            >
              GoRental
            </Typography>
          </Box>

          {/* Right Section: Search Bar, Nav Items, Icons */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF", // Set background color to white
                borderRadius: "4px",
                padding: "0 8px",
                height: "2rem",
                width: "11rem",
                border: "1px solid #DDE2E4", // Set border color
              }}
            >
              <SearchIcon sx={{ color: "#b0b0b0" }} />
              <InputBase
                placeholder="Search..."
                sx={{
                  ml: 1,
                  flex: 1,
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  color: "#000",
                  "&::placeholder": {
                    color: "#9AA6AC", // Set placeholder color
                  },
                }}
              />
            </Box>

            {/* Navigation Items without Background Color */}
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#141414", // Set text color to #141414
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  textTransform: "none",
                  padding: "0.5rem 1.2rem", // Adjust padding for better alignment
                  "&:hover": {
                    backgroundColor: "transparent", // Remove background on hover
                  },
                }}
              >
                {item}
              </Button>
            ))}

            {/* Last Three Components: Bell Icon, Settings Icon, Profile Pic */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // Slightly reduced gap for the icons to appear closer
              }}
            >
              {/* Bell Icon */}
              <IconButton aria-label="notifications" sx={{ color: "#000" }}>
                <NotificationsIcon />
              </IconButton>

              {/* Settings Icon */}
              <IconButton aria-label="settings" sx={{ color: "#000" }}>
                <SettingsIcon />
              </IconButton>

              {/* Profile Image */}
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#757575", fontFamily: "Poppins" }}
                >
                  Img
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
