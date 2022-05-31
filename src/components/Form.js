import React from "react";
import EmailInput from "./EmailInput";
import Button from "./Button";
import "../styles/Form.css";

const Form = ({ text }) => {
  return (
    <form className="form">
      <EmailInput />
      <Button text={text} />
    </form>
  );
};

export default Form;
