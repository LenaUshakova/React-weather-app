import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formattedDate() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{formattedDate()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={45} />
      </div>
      <div>
        <div className="min-temperature inline">
          {Math.round(props.data.temp.min)}
        </div>
        <div className="celsius inline">° / </div>
        <div className="max-temperature inline">
          {Math.round(props.data.temp.max)}
        </div>
        <div className="celsius inline">°</div>
      </div>
    </div>
  );
}
