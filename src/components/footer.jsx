import React from "react";
import "../components/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="section">
        <div className="logo">
          <img
            src="https://marketplace.canva.com/EAFciLcBL0M/1/0/1600w/canva-beige-teal-brown-mountains-adventure-logo-I6U3AOfWRt8.jpg"
            alt="logo"
            className="img"
          />
        </div>
        <p>Email: contact@trailblaze.com</p>
        <p>Phone: +91 123 456 7890</p>
        <p>Address: Jaipur, Rajasthan, India</p>
      </div>
      <div className="section footer-section">
        <h4>Trek Types</h4>
        <a href="#">Day Treks</a>
        <a href="#">Weekend Treks</a>
        <a href="#">Multi-day Treks</a>
        <a href="#">Adventure Treks</a>
      </div>
      <div className="section footer-section">
        <h4>Treks</h4>
        <a href="#">Nahargarh Fort</a>
        <a href="#">Jaipur Hills</a>
        <a href="#">Amber Fort</a>
        <a href="#">Sisodia Rani Garden</a>
      </div>
      <div className="section footer-section">
        <h4>Follow Us</h4>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
      </div>
      <div className="section footer-section">
        <h4>Suggested</h4>
        <a href="#">Trekking Essentials</a>
        <a href="#">Packing Tips</a>
        <a href="#">Health & Safety</a>
        <a href="#">Trekking Gear</a>
      </div>
    </footer>
  );
}

export default Footer;
