import React from "react";
import module from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button
      className={module.btn}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
