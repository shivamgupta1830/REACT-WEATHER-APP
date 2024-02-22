import React from "react";

const TopButtons = ({ setQuery }) => {
  const topButtonHandler = (e) => {
    setQuery(e.currentTarget.value);
  };
  const cities = [
    {
      id: 1,
      name: "Mumbai",
    },
    {
      id: 2,
      name: "Moscow",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Dubai",
    },
    {
      id: 5,
      name: "New York",
    },
    {
      id: 6,
      name: "London",
    },
    {
      id: 7,
      name: "Sydney",
    },
  ];

  return (
    <div className="flex justify-between items-center px-5 mt-4 w-11/12">
      {cities.map((city) => (
        <button
          onClick={topButtonHandler}
          key={city.id}
          className="text-white font-bold text-xl cursor-pointer active:scale-110 underline-offset-4 transition-all ease-in-out"
          value={city.name}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};
export default TopButtons;
