import React from "react";
import "../../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Origin</h3>
          <p>Your trusted platform for managing products and services.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@origin.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Origin. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;