import React from "react";

const DateTime = (props) => {
  const { FormattedDate } = {
    ...props.weather,
  };
  console.log();
  return (
    <div className="w-8/12 flex items-center justify-center gap-2 font-semibold text-lg text-white text-center">
      {FormattedDate}
    </div>
  );
};

export default DateTime;
