import React from "react";
import "../styles/Header.css";
import HeaderImage from "../assets/header-image.gif";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-title">
            Learn Blockchain Technology and Web3 Skill Here
          </h1>
          <p className="header-text">
            Blockchain-novice or Blockchain enthusiast? Grow your knowledge
            here. Vorem is the all in one platform for all things Blockchain and
            Web3 mastery. Learn the essential skills for a career in the
            blockchain industry - from the basics to expert level. Join Waitlist
          </p>
          <Button text="Hello There" />
        </div>
        <div className="header-right">
          <img src={HeaderImage} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Header;
