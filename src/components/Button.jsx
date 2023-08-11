import React, { useState } from "react";

const BtnComponent = (props) => {
  return (
    <div>
      <button className="flex animate__animated animate__fadeInLeft ">
        <div className="non rounded-l"></div>
        <div className=" btn-primary font-medium text-sm flex justify-center items-center">{props.btnP}</div>
      </button>
    </div>
  );
};

const BtnEvent = ({ buttonNumber, activeButton, setActiveButton, btnP2 }) => {
  const handleButtonClick = () => {
    setActiveButton(buttonNumber);
  };

  return (
    <div>
      <button
        className={`btn-secondary ${
          activeButton === buttonNumber ? "active" : ""
        }`}
        onClick={handleButtonClick}
      >
        {/* Btn Number Disable {buttonNumber} */}
        {btnP2}
      </button>
    </div>
  );
};


export { BtnComponent, BtnEvent };
