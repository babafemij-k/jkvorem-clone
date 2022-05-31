import React from "react";
import Form from "./Form";
import "../styles/Footer.css";
import Logo from "../assets/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="subscribe">
          <img src={Logo} alt="" />
          <p>
            Get the latest blockhain news, trends and insights, straight to your
            inbox.
          </p>
          <Form text="Subscribe" />
        </div>
        <div className="links">
          <h3>Extra Links</h3>
          <ul>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Connect with us</h3>
          <div className="socials-icons">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <YouTube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
