import "./App.css";
import React from "react";
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import DateTime from "./DateTime";
import CityName from "./CityName";
import WeatherDetails from "./WeatherDetails";

import WeatherDetails2 from "./WeatherDetails2";

function App() {
  return (
    <div className="px-8 py-6 w-full h-screen flex flex-col justify-start gap-6 items-center  bg-gradient-to-bl from-cyan-500 to-cyan-700">
      <TopButtons />
      <Inputs />
      <DateTime />
      <CityName />
      <WeatherDetails />

      <WeatherDetails2 />
    </div>
  );
}

export default App;
