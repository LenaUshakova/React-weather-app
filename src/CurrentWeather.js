import React, { useState } from "react";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="current-weather">
        <div className="temperature inline">
          <span className="value">{props.celsius}</span>
          <span className="unit">
            <b>C</b> |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              F
            </a>
          </span>
        </div>
        <div className="weather-text">{props.description}</div>
        <div className="min-temperature inline">{props.mintemp}</div>
        <div className="celsius inline">{"° "}/ </div>
        <div className="max-temperature inline">{props.maxtemp}</div>
        <div className="celsius inline">°</div>
      </div>
    );
  } else {
    return (
      <div className="current-weather">
        <div className="temperature inline">
          <span className="value">
            {Math.round((props.celsius * 9) / 5 + 32)}
          </span>
          <span className="unit">
            <a href="/" onClick={convertToCelsius}>
              C
            </a>{" "}
            | <b>F</b>
          </span>
        </div>
        <div className="weather-text">{props.description}</div>
        <div className="min-temperature inline">
          {Math.round((props.mintemp * 9) / 5 + 32)}
        </div>
        <div className="celsius inline">{"° "}/ </div>
        <div className="max-temperature inline">
          {Math.round((props.maxtemp * 9) / 5 + 32)}
        </div>
        <div className="celsius inline">°</div>
      </div>
    );
  }
}
