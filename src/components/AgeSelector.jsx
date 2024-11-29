import React, { useState } from "react";

const AgeSelector = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const ageRanges = [
    "Under 30",
    "Between 30-34",
    "Between 35-37",
    "Between 38-40",
    "Between 41-43",
    "Above 43",
  ];

  const handleRadioChange = (range) => {
    setSelectedRange(range);
  };

  return (
    <div className="mb-6 mt-3 md:mt-0 flex flex-col md:items-center justify-center">
      <h2 className="font-medium text-[22px] md:text-[28px] md:text-center text-left">
        Which age range applies to you?
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-y-2 justify-center items-start md:mt-2 w-6/12">
        {ageRanges.map((range) => (
          <label
            key={range}
            className="flex items-center text-[17px] md:text-[20px] space-x-2 py-2"
          >
            <input
              type="radio"
              name="age"
              value={range}
              checked={selectedRange === range}
              onChange={() => handleRadioChange(range)}
              className="mr-2 accent-[#F48265] border-2 border-[#F48265]"
            />
            <span>{range}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgeSelector;
