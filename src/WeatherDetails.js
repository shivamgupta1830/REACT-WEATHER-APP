import React from "react";
import {
  UilTemperatureEmpty,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

const WeatherDetails = (props) => {
  const { feels_like, humidity, speed, description, imageURL, temp } = {
    ...props.weather,
  };

  const weatherData = [
    {
      id: 1,
      title: "Reel feel",
      icon: <UilTemperatureEmpty />,
      data: Math.round(feels_like),
      unit: "°",
    },
    {
      id: 2,
      title: "Humidity",
      icon: <UilTear />,
      data: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      title: "Wind speed",
      icon: <UilWind />,
      data: Math.round(speed),
      unit: "Km/s",
    },
  ];

  return (
    <div className=" text-center ">
      <h2 className="text-cyan-300 font-semibold text-4xl text-center capitalize">
        {description}
      </h2>
      <div className="flex justify-between items-center gap-60 ml-20 mt-4">
        <img alt="weather" src={imageURL} width="108px"></img>
        <h1 className="text-white font-normal text-6xl">{Math.round(temp)}°</h1>
        <div className="flex flex-col justify-between items-center text-white gap-4">
          {weatherData.map((detail) => (
            <div key={detail.id}>
              <div className="flex justify-between items-center gap-1 font-semibold text-lg">
                <span>{detail.icon}</span>
                <span>
                  {detail.title} : {detail.data}
                  {detail.unit}
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
