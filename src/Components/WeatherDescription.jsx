import React from "react";

const WeatherDescription = (props) => {
  console.log(props);

  let message;
  const weatherMessage = () => {
    if (props.weatherDescription === "light rain") {
      message = "Take a Brolly";
      return message;
    }
    if (props.weatherDescription === "rain") {
      message = "Raining cats and dogs";
    }
    if (
      props.weatherDescription === "overcast clouds" ||
      props.weatherDescription === "broken clouds"
    ) {
      message = "Miserable";
      return message;
    }
    if (props.weatherDescription === "scattered clouds") {
      message = "Alright";
      return message;
    }
    if (props.weatherDescription === "clear sky") {
      message = "Beer garden weather";
      return message;
    }
  };

  return <h3 className="weatherDescription">{weatherMessage()}</h3>;
};

export default WeatherDescription;
