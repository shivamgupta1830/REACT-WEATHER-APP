import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      name: "New Delhi",
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
      name: "Newyork",
    },
    {
      id: 6,
      name: "Brasilia",
    },
    {
      id: 7,
      name: "Sydney",
    },
    {
      id: 8,
      name: "London",
    },
  ];

  return (
    <div className="flex justify-between items-center px-5 mt-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white font-bold text-xl cursor-pointer hover:underline underline-offset-4 transition-all ease-in-out"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};
export default TopButtons;
