import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="input-form">
        <input
          type="search"
          placeholder="Enter a city"
          className="search-field"
        />
        <i
          className="fa-solid fa-location-crosshairs"
          id="location-pointer"
        ></i>
      </div>
      <div className="main-info">
        <div className="city-time">
          <div className="city">Kyiv</div>
          <div className="weekday">Monday</div>
          <div className="time">22:11</div>
        </div>
        <div className="weather-icon">
          {" "}
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/weather/cloudy-icon.png"
            alt=""
          />
        </div>
        <div className="current-weather">
          <div className="temperature inline">
            <span className="value">1</span>
            <span className="unit">C</span>
          </div>
          <div className="weather-text">Cloudy</div>
          <div className="min-temperature inline">10</div>
          <div className="celsius inline">{"° "}/</div>
          <div className="max-temperature inline">14</div>
          <div className="celsius inline">°</div>
        </div>
        <div className="weather-detail">
          <div className="precipitation">
            <i className="fa-solid fa-cloud-rain weather-detail-icon"></i>
            <span className="detail">3</span>
            <span className="detail"> mm</span>
          </div>
          <div className="wind">
            <i className="fa-solid fa-wind weather-detail-icon"></i>
            <span className="detail">2</span>
            <span className="detail"> km/h</span>
          </div>
          <div className="humidity">
            <i className="fa-solid fa-droplet weather-detail-icon"></i>
            <span className="detail">13</span>
            <span className="detail"> %</span>
          </div>
        </div>
      </div>
    </div>
  );
}
