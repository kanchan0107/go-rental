import React from "react";
import { FaFacebook, FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <h2 style={styles.title}>Connect with us</h2>
      <p style={styles.description}>
        We share captivating travel stories and hidden gems from around the
        world, inspiring your next adventure. Join us as we explore diverse
        cultures, landscapes, and experiences.
      </p>
      <button style={styles.button}>Contact us</button>
      <div style={styles.nav}>
        <a href="/" style={styles.navLink}>
          Home
        </a>
        <a href="/booking" style={styles.navLink}>
          Booking
        </a>
        <a href="/cars" style={styles.navLink}>
          Cars
        </a>
        <a href="/contact" style={styles.navLink}>
          Contact Us
        </a>
      </div>
      <div style={styles.social}>
        <FaFacebook style={styles.icon} />
        <FaYoutube style={styles.icon} />
        <FaTelegram style={styles.icon} />
        <FaInstagram style={styles.icon} />
      </div>
      <div style={styles.footerBottom}>
        <span>© 2025. All rights reserved.</span>
        <a href="/privacy" style={styles.footerLink}>
          Privacy Policy / Disclaimer
        </a>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "40px 20px",
  },
  title: {
    fontSize: "28px",
    margin: "0 0 10px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0 0 20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "10px 0 30px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "20px 0",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    margin: "20px 0",
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
    color: "#fff",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
    borderTop: "1px solid #444",
    paddingTop: "20px",
    fontSize: "14px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Footer;
