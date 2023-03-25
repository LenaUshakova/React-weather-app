import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }
  const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);

  return (
    <div className="WeatherForecast">
      <div className="col-md-2">
        <div className="forecast-day">Mon</div>
        <div className="forecast-icon">
          <WeatherIcon code="03d" size={45} />
        </div>
        <div>
          <div className="min-temperature inline">3</div>
          <div className="celsius inline">° / </div>
          <div className="max-temperature inline">8</div>
          <div className="celsius inline">°</div>
        </div>
      </div>
    </div>
  );
}
