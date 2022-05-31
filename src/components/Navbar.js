import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const addShadow = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", addShadow);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="navbar-container">
        <a href="#">
          <img src={logo} alt="" className="logo" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#aboutus" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://medium.com/@Vorem_ng"
              className="nav-links"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#productspage" className="nav-links">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="mailto:info@vorem.co" className="nav-links">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
