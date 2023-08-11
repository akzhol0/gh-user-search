import React, { useState } from "react";
import MyButton from "./UI/button/MyButton.jsx";
import MyInput from "./UI/input/MyInput";

const FormGet = ({ getInfo }) => {
  const [input, setInput] = useState("");

  const check = (e) => {
    e.preventDefault();
    if (input === '') return;
    getInfo(input)
  }

  return (
    <div className="search-wrapper">
      <form onSubmit={check} className="search-container">
        <MyInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write here..."
        />
        <MyButton type='submit'>Search</MyButton>
      </form>
    </div>
  );
};

export default FormGet;
