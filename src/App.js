import React, { useEffect, useState } from "react";
import axios from "axios";
import Day from "./Components/Day";
import Temp from "./Components/Temp";
import FeelsLike from "./Components/FeelsLike";
import Humidity from "./Components/Humidity";
import Wind from "./Components/Wind";
import WeatherDescription from "./Components/WeatherDescription";
import Icon from "./Components/Icon";
import Joi from "joi";
import "./App.css";
import "./Media-Queries.css";

let currentInput;
let currentUpdate;

const App = () => {
  const [input, setInput] = useState("bristol"); // set the input state
  const [weather, setWeatherData] = useState(); // set the weather state
  const [lastWeatherDateTime, setlastWeatherDateTime] = useState(0); // set the last weather date and time
  const [update, setUpdate] = useState(false); // set the last weather date and time
  const [error, setError] = useState(false);

  currentInput = input;
  currentUpdate = update;

  useEffect(() => {
    setInterval(() => {
      getWeatherData();
    }, 10000);

    setInterval(() => {
      setUpdate(!currentUpdate);
    }, 100);
  }, []);

  useEffect(() => {
    getWeatherData(); // call the getWeatherData function
  }, [input]);

  const getWeatherData = async () => {
    if (!currentInput) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${currentInput},UK&units=metric&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );

      splitData(response.data.list);

      const newDate = new Date().getTime(); // get current timestamp
      setlastWeatherDateTime(newDate); // set the date and time with the current timestamp
      setError(false);
    } catch (error) {
      console.log("An unexpected error occured", error);
      setError(true);
    }
  };

  // function to split the API data
  const splitData = (data) => {
    const weatherDataArray = []; // empty array, weatherDay object will be pushed into the array

    let timeStamp = data[0].dt; // timeStamp is a let variable as time will change

    data.forEach((item) => {
      if (item.dt === timeStamp) {
        const weatherDay = {
          // weatherDay object, contains the data we want to pull from the API
          main: item.main,
          weather: item.weather[0].description,
          date: item.dt_txt,
          day: item.dt,
          wind: item.wind.gust,
          icon: item.weather[0].icon,
        };
        weatherDataArray.push(weatherDay); // push the weather data object into the array
        timeStamp = timeStamp + 86400; // unix timestamp - adding 24hrs in msecs on top provides 5 days of data
      }
    });

    setWeatherData(weatherDataArray);
  };

  // schema for Joi validation for input (requires a string, input is required, min and max char lengths),
  const schema = {
    input: Joi.string().required().min(3).max(10),
  };

  const onInput = async (event) => {
    if (event.keyCode !== 13) return;
    // create Joi object and send it the schema
    try {
      const joiObject = Joi.object(schema); // send schema to joiObject
      await joiObject.validateAsync({ input }); // send state or event and input?
      setInput(event.target.value);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="header">
        <h1>{input} 5-day Weather Forecast</h1>
        <input
          className="input"
          onKeyDown={onInput}
          type="text"
          placeholder="Search for a city"
        ></input>
        {error && (
          <p className="error">
            Incorrect city name, please enter a valid city
          </p>
        )}
      </div>
      <div className="forecastContainer">
        {weather &&
          weather.map((item, idx) => {
            // key should be placed on the parent element (div)
            return (
              <div className="main" key={idx}>
                <div className="weatherContainer">
                  <div className="weatherCard">
                    <Day day={item.day} />
                    <Temp temp={item.main.temp} />
                    <div className="weatherDetails">
                      <FeelsLike feelsLike={item.main.feels_like} />
                      <Humidity humidity={item.main.humidity} />
                      <Wind wind={item.wind} />
                    </div>

                    <Icon icon={item.icon} />
                    <WeatherDescription weatherDescription={item.weather} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <>
        <div className="weatherTimer">
          {Math.round((lastWeatherDateTime - Date.now() + 10000) / 1000)}
          &nbsp;seconds until next weather update
        </div>
      </>
    </>
  );
};

export default App;
