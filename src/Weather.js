import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import MainInfo from "./MainInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [forecast, setForecast] = useState({ loaded: false });
  const [city, setCity] = useState("Kyiv");
  console.log("RENDER");

  function showWeather(response) {
    // console.log(response.data);

    setForecast({
      name: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      // precipitation: response.data.rain[0],
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      loaded: true,
    });
  }

  function searchCity(city) {
    const apiKey = "50ee506356ef421435ae534c3e4094fb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (forecast.loaded) {
    return (
      <div className="Weather">
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="search-field"
            autoFocus="on"
            onChange={updateCity}
          />
          <i
            className="fa-solid fa-location-crosshairs"
            id="location-pointer"
          ></i>
        </form>
        <MainInfo data={forecast} />
        <WeatherForecast coordinates={forecast.coordinates} />
      </div>
    );
  } else {
    searchCity(city);
  }
}
