import React from "react";
import image_01d from "../icons/01d.svg";
import image_01n from "../icons/01n.svg";
import image_02d from "../icons/02d.svg";
import image_02n from "../icons/02n.svg";
import image_03d from "../icons/03d.svg";
import image_03n from "../icons/03n.svg";
import image_04d from "../icons/04d.svg";
import image_04n from "../icons/04n.svg";
import image_09d from "../icons/09d.svg";
import image_09n from "../icons/09n.svg";
import image_10d from "../icons/10d.svg";
import image_10n from "../icons/10n.svg";
import image_11d from "../icons/11d.svg";
import image_11n from "../icons/11n.svg";
import image_13d from "../icons/13d.svg";
import image_13n from "../icons/13n.svg";
import image_50d from "../icons/50d.svg";
import image_50n from "../icons/50n.svg";
import image_unknown from "../icons/unknown.png";

const Icon = (props) => {
  const imageObj = {
    "01d": { id: image_01d, description: "sunny" },
    "01n": { id: image_01n, description: "clear sky" },
    "02d": { id: image_02d, description: "partly cloudy (day)" },
    "02n": { id: image_02n, description: "partly cloudy (night)" },
    "03d": { id: image_03d, description: "cloudy" },
    "03n": { id: image_03n, description: "partly cloudy (night)" },
    "04d": { id: image_04d, description: "overcast" },
    "04n": { id: image_04n, description: "overcast (night)" },
    "09d": { id: image_09d, description: "drizzle" },
    "09n": { id: image_09n, description: "partly cloudy drizzle (night)" },
    "10d": { id: image_10d, description: "partly cloudy rain (day)" },
    "10n": { id: image_10n, description: "Partly cloudy rain (night)" },
    "11d": { id: image_11d, description: "thunderstorms rain" },
    "11n": { id: image_11n, description: "thunderstorms rain (night)" },
    "13d": { id: image_13d, description: "snow" },
    "13n": { id: image_13n, description: "partly cloudy snow (night)" },
    "50d": { id: image_50d, description: "mist" },
    "50n": { id: image_50n, description: "mist (night)" },
    unknown: image_unknown,
  };

  return (
    <img src={imageObj[props.icon].id} alt={imageObj[props.icon].description} />
  );
};

export default Icon;
