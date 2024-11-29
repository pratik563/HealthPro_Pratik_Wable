import React, { useState } from "react";
import IVFLogo from "../assets/ivf-pulse-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] bg-white border-b border-[#E6E3D2] flex items-center justify-between md:justify-center px-5 md:px-1 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-[150px] h-[35px] md:w-[180px] md:h-[40px] mr-6"
          src={IVFLogo}
          alt="ivf_logo"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-[#1E231E] font-medium">
        <li className="hover:underline cursor-pointer">Donor Programme</li>
        <li className="hover:underline cursor-pointer">
          Fertility Preservation
        </li>
        <li className="hover:underline cursor-pointer">Advanced Treatments</li>
        <li className="hover:underline cursor-pointer">
          Infertility Treatments
        </li>
        <li className="hover:underline cursor-pointer">IVF Testing</li>
        <li className="hover:underline cursor-pointer">About Us</li>
      </ul>

      {/* Talk to Us Button */}
      <button className="hidden md:block bg-red-500 text-white px-6 py-2 rounded ml-6 hover:bg-red-600">
        Talk to Us
      </button>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-[#1E231E] text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-white shadow-lg border-t border-[#E6E3D2]">
          <ul className="flex flex-col items-start pl-6 py-4 text-[#1E231E] font-medium space-y-4">
            <li className="hover:underline cursor-pointer">Donor Programme</li>
            <li className="hover:underline cursor-pointer">
              Fertility Preservation
            </li>
            <li className="hover:underline cursor-pointer">
              Advanced Treatments
            </li>
            <li className="hover:underline cursor-pointer">
              Infertility Treatments
            </li>
            <li className="hover:underline cursor-pointer">IVF Testing</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <button className="bg-[#D75555] text-white px-6 py-2 rounded hover:bg-[#d44646] mt-4">
              Talk to Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
