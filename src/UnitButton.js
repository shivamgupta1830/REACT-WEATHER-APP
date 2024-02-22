import { useState } from "react";

const UnitButton = ({ units, setUnits }) => {
  const [unitText, setUnitText] = useState("°F");
  const handleUnit = () => {
    unitText === "°C" ? setUnitText("°F") : setUnitText("°C");
    units !== "imperial" ? setUnits("imperial") : setUnits("metric");
  };

  return (
    <div>
      <button
        onClick={() => {
          handleUnit();
        }}
        className="bg-transparent w-12 rounded-lg px-3 py-2 font-semibold text-xl text-white   active:scale-110 transition-all ease-in-out border-2 shadow-lg shadow-cyan-800 "
      >
        {unitText}
      </button>
    </div>
  );
};
export default UnitButton;
