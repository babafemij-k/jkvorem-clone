import React from "react";
import Button from "./Button";
import AboutImg from "../assets/about-img.gif";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about" id="aboutus">
      <div className="about-image">
        <img src={AboutImg} alt="aboutImg" />
      </div>
      <div className="about-info">
        <h2>About us</h2>
        <p>
          Vorem is a company that stays ahead of the curve by using blockchain
          technology to provide solutions in education, fintech and
          entertainment. We provide opportunities for people and businesses
          using blockchain-based solutions.
        </p>
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default AboutUs;
