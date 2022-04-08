import React from "react";

const Wind = (props) => {
  return (
    <div className="weatherDetailsContent">
      <p className="wind">Gusts</p> <span>{Math.round(props.wind)} </span>
    </div>
  );
};

export default Wind;
