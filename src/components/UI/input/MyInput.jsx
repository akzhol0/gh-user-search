import React from "react";
import module from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
  return <input className={module.input} {...props} />;
};

export default MyInput;
