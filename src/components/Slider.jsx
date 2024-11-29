import React, { useState } from "react";
import OrangeBg from "../assets/bg.png";

const Slider = () => {
  const [cycles, setCycles] = useState(1);

  // Function to calculate the position of the background dynamically
  const calculatePosition = () => {
    const min = 1;
    const max = 11;
    const percentage = ((cycles - min) / (max - min)) * 100; // to calculate slider percentage
    return `${percentage}%`; // percentage for css-compatible string
  };

  return (
    <div className="mb-6 flex flex-col md:items-center md:justify-center w-full relative">
      <h2 className="font-medium text-[22px] md:text-[28px] text-left md:text-center mb-4">
        Number of IVF Cycles?
      </h2>

      {/* Slider */}
      <div className="relative w-full md:w-[450px] mt-4">
        {/* Counter with Orange Background */}
        <div
          className="absolute -top-8 transform -translate-x-1/2 flex justify-center items-center"
          style={{ left: calculatePosition() }}
        >
          <img
            src={OrangeBg}
            alt="Counter Background"
            className="h-[30px] w-auto"
          />
          <span className="absolute text-white font-bold text-[16px]">
            {cycles}
          </span>
        </div>

        <input
          type="range"
          min="1"
          max="11"
          value={cycles}
          onChange={(e) => setCycles(e.target.value)}
          className="w-full accent-[#F48265]"
        />
      </div>
    </div>
  );
};

export default Slider;
