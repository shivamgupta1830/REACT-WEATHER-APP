import React from "react";
import {
  UilTemperatureEmpty,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

const WeatherDetails = () => {
  const weatherData = [
    {
      id: 1,
      title: "Reel feel",
      icon: <UilTemperatureEmpty />,
      data: "30°",
    },
    {
      id: 1,
      title: "Humidity",
      icon: <UilTear />,
      data: 10,
    },
    {
      id: 1,
      title: "Wind speed",
      icon: <UilWind />,
      data: 12.5,
    },
  ];

  return (
    <div className=" text-center ">
      <h2 className="text-cyan-300 font-semibold text-4xl text-center">
        Clear
      </h2>
      <div className="flex justify-between items-center gap-60 ml-20 mt-4">
        <img
          alt="weather"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          width="108px"
        ></img>
        <h1 className="text-white font-normal text-6xl">23°</h1>
        <div className="flex flex-col justify-between items-center text-white gap-4">
          {weatherData.map((detail) => (
            <div key={detail.id}>
              <div className="flex justify-between items-center gap-1 font-semibold text-lg">
                <span>{detail.icon}</span>
                <span>
                  {detail.title} : {detail.data}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
