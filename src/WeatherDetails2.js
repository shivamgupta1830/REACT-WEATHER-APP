import React from "react";
import {
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

const WeatherDetails2 = () => {
  const weatherData2 = [
    {
      id: 1,
      title: "Sunrise",
      data: "6:00 AM",
      icon: <UilSun />,
    },
    {
      id: 2,
      title: "Sunset",
      data: "6:00 PM",
      icon: <UilSunset />,
    },
    {
      id: 3,
      title: "Max Temp",
      data: "40",
      icon: <UilArrowUp />,
    },
    {
      id: 4,
      title: "Min Temp",
      data: "19",
      icon: <UilArrowDown />,
    },
  ];
  return (
    <div className="flex justify-around gap-10 items-center mt-4">
      {weatherData2.map((detail) => (
        <div
          key={detail.id}
          className="flex justify-between items-center text-white text-lg"
        >
          <span>{detail.icon}</span>
          <span>
            {detail.title} : {detail.data}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails2;
