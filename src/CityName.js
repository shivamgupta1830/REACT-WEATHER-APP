import React from "react";

const CityName = (props) => {
  const { name, country } = {
    ...props.weather,
  };

  return (
    <div className="text-xl font-semibold text-white text-center">
      {name}, {country}
    </div>
  );
};

export default CityName;
