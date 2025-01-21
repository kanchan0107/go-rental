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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import logo from "../assets/logo.png";
import car1 from "../assets/classccar.png";
import car2 from "../assets/simplecar.png";

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

  const cards = [
    {
      title: "The Premier Choice Car Rental",
      subheading:
        "The future of stunning portraits features over 300 models of diverse ages and ethnicities.",
      image: car1,
    },
    {
      title: "Low Cost Rental Made Quick And Simple",
      subheading:
        "The future of stunning portraits features over 300 models of diverse ages and ethnicities.",
      image: car2,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                padding: "0 8px",
                height: "2rem",
                width: "11rem",
                border: "1px solid #DDE2E4",
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
                    color: "#9AA6AC",
                  },
                }}
              />
            </Box>

            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#141414",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  textTransform: "none",
                  padding: "0.5rem 1.2rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton aria-label="notifications" sx={{ color: "#000" }}>
                <NotificationsIcon />
              </IconButton>
              <IconButton aria-label="settings" sx={{ color: "#000" }}>
                <SettingsIcon />
              </IconButton>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around", // Adjust gap to make cards fit better
          gap: 2, // Reduce gap to maximize card width
          mt: "6rem",
          p: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: "48%", // Adjust width to fit two cards side by side
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              backgroundColor: "#141414",
              color: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <CardContent
              sx={{
                flex: "1",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <Box sx={{ flex: "1" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "700",
                    fontSize: "1.8rem",
                    textAlign: "left",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "1rem",
                    color: "#B0BEC5",
                    marginTop: "0.5rem",
                    textAlign: "left",
                  }}
                >
                  {card.subheading}
                </Typography>
              </Box>
              <Button
                sx={{
                  alignSelf: "flex-start",
                  marginTop: "1rem",
                  width: "150px",
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Rental Car
              </Button>
            </CardContent>
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                height: "200px",
                width: "100%",
                objectFit: "cover",
                padding: ""
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}
