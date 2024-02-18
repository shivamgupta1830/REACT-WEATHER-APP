import React from "react";
import { UilMapMarker, UilSearch } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className=" flex justify-center items-center gap-5 text-center mt-8 ">
      <input
        type="text"
        placeholder="Search city..."
        className="border-none py-2 px-4  w-5/12 outline-none rounded-sm capitalize font-semibold text-xl"
      ></input>
      <div className="flex justify-center items-center text-white gap-2 text-3xl">
        <UilSearch
          className="cursor-pointer hover:scale-125 transition-all ease-in-out "
          size={35}
        />

        <UilMapMarker
          className="hover:scale-125 transition-all ease-in-out"
          size={35}
        />
      </div>
    </div>
  );
};

export default Inputs;
