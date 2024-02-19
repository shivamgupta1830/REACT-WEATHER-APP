import React from "react";
import { UilMapMarker, UilSearch } from "@iconscout/react-unicons";
import UnitButton from "./UnitButton";

const Inputs = () => {
  return (
    <div className=" flex justify-center items-center gap-5 text-center w-10/12 mt-4 ">
      <input
        type="text"
        placeholder="Search city..."
        className="border-none py-2 px-4  w-6/12 ml-8 outline-none rounded-lg capitalize font-semibold text-xl shadow-lg shadow-cyan-800"
      ></input>
      <div className="flex justify-center items-center text-white gap-3 text-3xl ">
        <UilSearch
          className="cursor-pointer hover:scale-125 transition-all ease-in-out "
          size={35}
        />

        <UilMapMarker
          className="hover:scale-125 transition-all ease-in-out"
          size={35}
        />
      </div>
      <UnitButton />
    </div>
  );
};

export default Inputs;
