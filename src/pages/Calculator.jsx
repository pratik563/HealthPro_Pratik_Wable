import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AgeSelector from "../components/AgeSelector";
import Slider from "../components/Slider";
import Condition from "../components/Condition";
import Procedures from "../components/Procedures";
import LeftBlackArrow from "../assets/BlackArrowLeft.png";

const Calculator = () => {
  const navigate = useNavigate();
  // To calculate the estimate & to navigate
  const handleCalculate = () => {
    const result = 64; // Default Example
    navigate("/result", { state: { result } });
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 flex flex-col">
        {/* for desktop only*/}
        <h1 className="hidden md:block text-xs mt-[70px] ml-2">
          Home / IVF Success Rate Calculator
        </h1>

        {/* for mobile only*/}
        <div className="flex gap-2 text-[22px] font-medium md:hidden mt-[70px] cursor-pointer">
          <span>
            <img src={LeftBlackArrow} alt="left-arrow" />
          </span>
          <span>IVF Success Rate Calculator</span>
        </div>

        <AgeSelector />
        <Slider />
        <Procedures />
        <Condition />
        <div className="flex justify-center mt-2">
          <button
            onClick={handleCalculate}
            className="bg-[#D75555] hover:bg-[#d04444] text-white w-[147px] h-[47px] px-6 rounded-md"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
