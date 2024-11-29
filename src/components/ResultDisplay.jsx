import React from "react";
import backgroundCircle from "../assets/Group 1000002424.png"; // Adjust path as needed

const ResultDisplay = ({ result }) => {
  return (
    <div className="flex flex-col mt-10 md:mt-20 items-center">
      {/* Circle with Background Image */}
      <div
        className="text-white text-4xl rounded-full w-[192px] h-[192px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundCircle})`, // Use the imported image
        }}
      >
        {result}%
      </div>
      <p className="mt-4 text-[24px] text-white font-medium ">
        With 1 IVF Cycle
      </p>
    </div>
  );
};

export default ResultDisplay;
