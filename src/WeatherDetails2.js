import React from "react";
import {
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

const WeatherDetails2 = (props) => {
  const { sunset, sunrise, temp_min, temp_max } = {
    ...props.weather,
  };

  const weatherData2 = [
    {
      id: 1,
      title: "Sunrise",
      data: sunrise,
      icon: <UilSun />,
      unit: "",
    },
    {
      id: 2,
      title: "Sunset",
      data: sunset,
      icon: <UilSunset />,
      unit: "",
    },
    {
      id: 3,
      title: "Max Temp",
      data: Math.round(temp_max),
      icon: <UilArrowUp />,
      unit: "°",
    },
    {
      id: 4,
      title: "Min Temp",
      data: Math.round(temp_min),
      icon: <UilArrowDown />,
      unit: "°",
    },
  ];
  return (
    <div className="flex justify-around gap-10 items-center mt-4">
      {weatherData2.map((detail) => (
        <div
          key={detail.id}
          className="flex justify-between items-center text-white text-xl"
        >
          <span>{detail.icon}</span>
          <span>
            {detail.title} : {detail.data}
            {detail.unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails2;
