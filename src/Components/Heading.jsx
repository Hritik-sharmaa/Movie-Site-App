import React from "react";

const Heading = ({label, textSize}) => {
  return (
    <div className="flex items-center h-full">
      <h1 className={`ml-[5rem] ${textSize} font-sans font-bold`}>{label}</h1>
    </div>
  );
};

export default Heading;
