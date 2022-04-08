import React from "react";

const FeelsLike = (props) => {
  return (
    <div className="weatherDetailsContent">
      <p className="realFeel">Real feel </p>
      <span>{Math.round(props.feelsLike)}°</span>
    </div>
  );
};

export default FeelsLike;
