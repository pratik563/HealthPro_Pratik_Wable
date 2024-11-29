import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResultDisplay from "../components/ResultDisplay";
import OrangeLine from "../assets/orange-line.png";
import SmallLine from "../assets/small-orange-line.png";
import Couple from "../assets/black-white-portrait-woman-expecting-baby.png";
import CouplePortrait from "../assets/black-white-portrait-woman-expecting-baby (3).png";
import LeftArrow from "../assets/ArrowLeft.png";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-zinc-800 md:min-h-screen relative overflow-hidden">
        {/* Left Section */}
        <div className="p-4 flex flex-col flex-1">
          {/* Breadcrumb for Desktop */}
          <h2 className="text-xs hidden md:block mt-24 ml-4 text-white">
            Home / IVF Success Rate Calculator / Result
          </h2>

          {/* Breadcrumb for Mobile */}
          <div
            className="flex gap-3 text-[22px] font-medium md:hidden mt-[80px] cursor-pointer"
            onClick={() => navigate(-1)} // Navigate to the calculator page
          >
            <span>
              <img src={LeftArrow} alt="left-arrow" />
            </span>
            <span className="text-white">IVF Success Rate Calculator</span>
          </div>

          {/* Title and Orange Line */}
          <div className="flex items-center mt-6 md:mt-12">
            <img
              src={OrangeLine}
              alt="line"
              className="hidden md:block w-[51px] md:w-[102px] h-[11px] md:h-[22px]"
            />
            {/* Mobile Image */}
            <img
              src={SmallLine}
              alt="small_orange_line"
              className="block md:hidden h-auto"
            />
            <h1 className="text-[19px] md:text-[28px] font-medium text-white ml-2">
              Your Estimated IVF Success Rate is
            </h1>
          </div>

          {/* Result Display */}
          <ResultDisplay result={result} />
        </div>

        {/* Right Section (Images) */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Desktop Image */}
          <img
            src={Couple}
            alt="couple_photo_desktop"
            className="hidden md:block w-full h-auto md:absolute md:bottom-0 object-cover"
          />

          {/* Mobile Image */}
          <img
            src={CouplePortrait}
            alt="couple_photo_mobile"
            className="block md:hidden w-full h-auto object-cover"
          />

          {/* Button for Mobile */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md py-4 px-6 flex justify-center md:hidden">
            <button
              onClick={() => alert("Start Private Consultation")}
              className="bg-[#D75555] hover:bg-[#d04444] text-white px-6 py-3 rounded flex items-center gap-2"
            >
              Start Private Consultation
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
