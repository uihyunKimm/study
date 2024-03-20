import React, { useState } from "react";
import "./Prac07.css";

const Prac07 = (props) => {
  const [number, setNumber] = useState(0);

  function upCounter() {
    setNumber(number + 1);
    props.onCount();
  }

  return (
    <div className="countDiv">
      <h1>{number}</h1>
      <button className="countBtn" onClick={upCounter}>
        클릭
      </button>
    </div>
  );
};

export default Prac07;
