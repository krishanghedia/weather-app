import React from "react";

const Humidity = (props) => {
  return (
    <div className="weatherDetailsContent">
      <p className="humidity">Humuidity</p>
      <span>{props.humidity}%</span>
    </div>
  );
};

export default Humidity;
