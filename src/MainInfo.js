import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentWeather from "./CurrentWeather";

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
      <CurrentWeather
        celsius={props.data.temperature}
        description={props.data.description}
        mintemp={props.data.mintemp}
        maxtemp={props.data.maxtemp}
      />

      <div className="weather-detail">
        <div className="precipitation">
          <i className="fa-solid fa-cloud-rain weather-detail-icon"></i>
          <span className="detail"></span>
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
