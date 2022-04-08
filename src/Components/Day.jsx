import React from "react";

const Day = (props) => {
  // array of days of the week

  const getForecastDay = () => {
    const daysOfTheWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const foreCastDate = new Date(props.day * 1000); // send day specific info from api to new Date
    let foreCastday = daysOfTheWeek[foreCastDate.getDay()]; // send forecastDate into the array

    return foreCastday;
  };

  return <p className="dayOfWeek">{getForecastDay()}</p>;
};

export default Day;
