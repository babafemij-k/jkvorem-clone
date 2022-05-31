import React from "react";
import BookImage from "../assets/book.png";
import Form from "./Form";
import "../styles/Promotion.css";

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="book-image">
        <img src={BookImage} alt="bookimage" />
      </div>
      <div className="book-description">
        <h3>Blockchain Intro Book</h3>
        <p>
          Start your Blockchain journey by downloading your free copy of Wealth
          of the Blockchain here.
        </p>
      </div>
      <Form text="Get it now" />
    </div>
  );
};

export default Promotion;
