import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
