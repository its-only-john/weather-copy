import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  // const location = "Dublin, IE";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const getWeather = async (q) => {
    const line =
      "https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=d644b75124fc2293f7705c5a322b3749";
    console.log(line);
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=d644b75124fc2293f7705c5a322b3749`
    );
    const resJSON = await apiRes.json();
    console.log(resJSON);
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      condition: resJSON.weather[0].main,
      country: resJSON.country,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
