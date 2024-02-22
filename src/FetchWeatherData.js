import { DateTime } from "luxon";

const fetchData = async (city, unit = "metric") => {
  const api_key = "ee404f5234e6a5503ed4a68e83b774cd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${unit}`;

  const weatherData = await fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => data);
  const { temp, feels_like, temp_min, temp_max, humidity } = weatherData.main;
  const { name, cod, dt, timezone } = weatherData;
  const { country, sunrise, sunset } = weatherData.sys;
  const { description, icon } = weatherData.weather[0];
  const { speed } = weatherData.wind;
  const imageURL = `http://openweathermap.org/img/wn/${icon}.png`;

  const formattedToLocalTime = (secs, zone, format) =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  // = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"

  const FormattedDate = formattedToLocalTime(
    dt,
    timezone,
    "cccc, dd LLL yyyy'  |  Local Time: 'hh:mm a"
  );

  const formattedSunTime = (suntime) => {
    return formattedToLocalTime(suntime, timezone, "hh:mm a");
  };

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    cod,
    dt,
    timezone,
    country,
    sunrise,
    sunset,
    description,
    icon,
    speed,
    imageURL,
    FormattedDate,
    formattedSunTime,
  };
};

export { fetchData };
