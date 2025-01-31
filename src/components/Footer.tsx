import React from "react";
import { Box, Typography, Button, Link, Divider } from "@mui/material";
import { FaFacebook, FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box sx={{ ...styles.footer}}>
      <Typography variant="h2" sx={styles.title}>
        Connect with us
      </Typography>
      <Typography sx={styles.description}>
        We share captivating travel stories and hidden gems from around the
        world, inspiring your next adventure. Join us as we explore diverse
        cultures, landscapes, and experiences.
      </Typography>
      <Button sx={styles.button}>Contact us</Button>

      <Box sx={styles.nav}>
        {["Home", "Booking", "Cars", "Contact Us"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase().replace(" ", "")}`}
            sx={styles.navLink}
          >
            {item}
          </Link>
        ))}
      </Box>

      <Box sx={styles.social}>
        <FaFacebook />
        <FaYoutube />
        <FaTelegram />
        <FaInstagram />
      </Box>

      <Divider sx={{ backgroundColor: "#444", marginY: "20px" }} />

      <Box sx={styles.footerBottom}>
        <Typography>© 2025. All rights reserved.</Typography>
        <Link href="/privacy" sx={styles.footerLink}>
          Privacy Policy / Disclaimer
        </Link>
      </Box>
    </Box>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: { xs: "32px", md: "60px" },
    fontWeight: 600,
    lineHeight: { xs: "40px", md: "72px" },
    letterSpacing: "-0.02em",
    textDecoration: "underline",
    textUnderlinePosition: "from-font",
    margin: "0 0 10px",
  },
  description: {
    fontSize: { xs: "14px", md: "16px" },
    lineHeight: 1.5,
    margin: "0 0 20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: { xs: "14px", md: "16px" },
    margin: "10px 0 30px",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginY: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: { xs: "14px", md: "16px" },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    fontSize: { xs: "20px", md: "24px" },
    color: "#fff",
    margin: "20px 0",
    "& svg": {
      cursor: "pointer",
    },
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    fontSize: { xs: "12px", md: "14px" },
    marginTop: "30px",
    borderTop: "1px solid #444",
    paddingTop: "20px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
      
export default Footer;
