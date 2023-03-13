import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [forecast, setForecast] = useState({ loaded: false });
  const city = "Kyiv";

  // const [city, setCity] = useState("Kyiv");

  function showWeather(response) {
    console.log(response.data);

    setForecast({
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      // precipitation: response.data.precipitation.value,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      loaded: true,
    });
  }

  if (forecast.loaded) {
    return (
      <div className="Weather">
        <div className="input-form">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-field"
            autoFocus="on"
          />
          <i
            className="fa-solid fa-location-crosshairs"
            id="location-pointer"
          ></i>
        </div>
        <div className="main-info">
          <div className="city-time">
            <div className="city">{forecast.name}</div>
            <FormattedDate date={forecast.date} />
          </div>
          <div className="weather-icon">
            {" "}
            <img src={forecast.icon} alt={forecast.description} />
          </div>
          <div className="current-weather">
            <div className="temperature inline">
              <span className="value">{forecast.temperature}</span>
              <span className="unit">C</span>
            </div>
            <div className="weather-text">{forecast.description}</div>
            <div className="min-temperature inline">10</div>
            <div className="celsius inline">{"° "}/ </div>
            <div className="max-temperature inline">14</div>
            <div className="celsius inline">°</div>
          </div>
          <div className="weather-detail">
            <div className="precipitation">
              <i className="fa-solid fa-cloud-rain weather-detail-icon"></i>
              <span className="detail">{forecast.precipitation}</span>
              <span className="detail"> mm</span>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind weather-detail-icon"></i>
              <span className="detail">{forecast.wind}</span>
              <span className="detail"> km/h</span>
            </div>
            <div className="humidity">
              <i className="fa-solid fa-droplet weather-detail-icon"></i>
              <span className="detail">{forecast.humidity}</span>
              <span className="detail"> %</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "50ee506356ef421435ae534c3e4094fb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
}
