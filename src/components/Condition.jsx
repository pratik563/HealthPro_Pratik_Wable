import React from "react";

const Conditions = () => {
  return (
    <div className="mb-6 flex flex-col md:items-center justify-center">
      <h2 className="font-medium text-[22px] md:text-[28px]">
        Do you have any of these medical conditions?
      </h2>
      <div className="flex md:flex-row flex-col flex-wrap gap-3 mt-2">
        {[
          "PCOS",
          "Endometriosis",
          "Low Ovarian Reserve",
          "Male Factor Infertility",
        ].map((condition) => (
          <label
            key={condition}
            className="flex items-center space-x-2 text-[17px] md:text-[20px] gap-2 md:gap-4 px-2 md:px-4 py-1 rounded"
          >
            <input type="checkbox" className="accent-[#F48265] border" />
            <span>{condition}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Conditions;
