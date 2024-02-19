import { useState } from "react";

const UnitButton = () => {
  const [unit, setUnit] = useState("F");
  const handleUnit = () => {
    unit === "C" ? setUnit("F") : setUnit("C");
  };

  return (
    <div>
      <button
        onClick={() => {
          handleUnit();
        }}
        className="bg-transparent w-12 rounded-lg px-3 py-2 font-semibold text-xl text-white   active:scale-110 transition-all ease-in-out border-2 shadow-lg shadow-cyan-800 "
      >
        {unit}
      </button>
    </div>
  );
};
export default UnitButton;
