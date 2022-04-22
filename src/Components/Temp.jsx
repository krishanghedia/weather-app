import React from "react";

const Temp = (props) => {
  console.log(props);
  return (
    <>
      <p className="temp">{Math.round(props.temp)}°</p>
    </>
  );
};

export default Temp;
