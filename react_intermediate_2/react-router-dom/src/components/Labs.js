import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    //hook for navigate
  const naviagte = useNavigate();

  function clickHandler() {
    naviagte("/about");
  }

  return (
    <div>
      Labs
      <div>
      <button onClick={clickHandler}>Move to about page</button>
      </div>
      
    </div>
  );
};

export default Labs;
