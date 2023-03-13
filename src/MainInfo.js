import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function MainInfo(props) {
  return (
    <div className="main-info">
      <div className="city-time">
        <div className="city">{props.data.name}</div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="weather-icon">
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="current-weather">
        <div className="temperature inline">
          <span className="value">{props.data.temperature}</span>
          <span className="unit">C</span>
        </div>
        <div className="weather-text">{props.data.description}</div>
        <div className="min-temperature inline">{props.data.mintemp}</div>
        <div className="celsius inline">{"° "}/ </div>
        <div className="max-temperature inline">{props.data.maxtemp}</div>
        <div className="celsius inline">°</div>
      </div>
      <div className="weather-detail">
        <div className="precipitation">
          <i className="fa-solid fa-cloud-rain weather-detail-icon"></i>
          <span className="detail">{props.data.precipitation}</span>
          <span className="detail"> mm</span>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind weather-detail-icon"></i>
          <span className="detail">{props.data.wind}</span>
          <span className="detail"> km/h</span>
        </div>
        <div className="humidity">
          <i className="fa-solid fa-droplet weather-detail-icon"></i>
          <span className="detail">{props.data.humidity}</span>
          <span className="detail"> %</span>
        </div>
      </div>
    </div>
  );
}
