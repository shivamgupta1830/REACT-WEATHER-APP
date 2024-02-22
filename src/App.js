import "./App.css";
import React, { useEffect, useState } from "react";
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import DateTime from "./DateTime";
import CityName from "./CityName";
import WeatherDetails from "./WeatherDetails";

import WeatherDetails2 from "./WeatherDetails2";
import { fetchData } from "./FetchWeatherData";
import ErrorPage from "./ErrorPage";

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState("New Delhi");
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fechtWeatherdata = async (city = query, unit = units) => {
      const weatherData = await fetchData(city, unit).catch((err) => {
        console.log(err);
      });

      setWeather(weatherData);
    };

    fechtWeatherdata();
  }, [query, units]);

  return (
    <div className="px-8 py-6 w-full h-screen flex flex-col justify-start gap-6 items-center  bg-gradient-to-bl from-cyan-500 to-cyan-700">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />

      {weather ? (
        <div className="text-center mt-2 flex flex-col justify-between items-center gap-6">
          <DateTime weather={weather} />
          <CityName weather={weather} />
          <WeatherDetails weather={weather} />
          <WeatherDetails2 weather={weather} />{" "}
        </div>
      ) : (
        <ErrorPage query={query} />
      )}
    </div>
  );
}

export default App;
