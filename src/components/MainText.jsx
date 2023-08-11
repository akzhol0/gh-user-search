import React from "react";

const MainText = ({children}) => {
  return (
    <div className="text-wrapper">
      <h1>{children}</h1>
    </div>
  );
};

export default MainText;
