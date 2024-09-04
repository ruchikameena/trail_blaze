import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <h1>Trail Blaze</h1>
        </Link>
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="header-extra">
        <Link to="/ContactUs">
          <button className="cta-button">
            Adventure Awaits – Secure Your Spot!
          </button>
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Navbar />
        </div>
      )}
    </header>
  );
};

export default Header;
