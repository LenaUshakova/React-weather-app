import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // when coordinates changes > loaded false > call API
    setLoaded(false);
  }, [coordinates]);

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
