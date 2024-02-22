import React from "react";
import error from "./images/error.png";

const ErrorPage = ({ query }) => {
  return (
    <div className="text-white font-semibold text-4xl mt-10 text-center flex flex-col justify-between items-center gap-10">
      <img className="w-[156px]" alt="error" src={error}></img>

      {!query ? (
        <h1>Enter a city name...</h1>
      ) : (
        <h1>
          <span className="capitalize">{query}</span> : is not a valid city...
        </h1>
      )}
    </div>
  );
};

export default ErrorPage;
