import React, { useState } from "react";

const Procedures = () => {
  const [icsiProcedure, setIcsiProcedure] = useState(null);
  const [pgtTesting, setPgtTesting] = useState(null);

  return (
    <div className="mb-6 flex flex-col items-start md:items-center justify-center w-full">
      {/* Heading */}
      <h2 className="font-medium text-[22px] md:text-[28px] text-left md:text-center mb-4">
        Have you undergone these procedures before?
      </h2>

      <div className="flex flex-col md:items-center items-start md:flex-row gap-6">
        {/* ICSI Procedure */}
        <div className="flex md:flex-row gap-4 md:gap-6 items-start md:items-center">
          <p className="font-semibold text-[18px] md:text-[20px]">
            ICSI Procedure:
          </p>
          <div className="flex gap-4 md:gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="icsi"
                value="Yes"
                checked={icsiProcedure === "Yes"}
                onChange={() => setIcsiProcedure("Yes")}
                className="accent-[#F48265]"
              />
              <span className="text-[18px] md:text-[20px]">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="icsi"
                value="No"
                checked={icsiProcedure === "No"}
                onChange={() => setIcsiProcedure("No")}
                className="accent-[#F48265]"
              />
              <span className="text-[18px] md:text-[20px]">No</span>
            </label>
          </div>
        </div>

        {/* PGT Testing */}
        <div className="flex md:flex-row gap-11 md:gap-6 items-start md:items-center">
          <p className="font-semibold text-[18px] md:text-[20px]">
            PGT Testing:
          </p>
          <div className="flex gap-4 md:gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pgt"
                value="Yes"
                checked={pgtTesting === "Yes"}
                onChange={() => setPgtTesting("Yes")}
                className="accent-[#F48265]"
              />
              <span className="text-[18px] md:text-[20px]">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pgt"
                value="No"
                checked={pgtTesting === "No"}
                onChange={() => setPgtTesting("No")}
                className="accent-[#F48265]"
              />
              <span className="text-[18px] md:text-[20px]">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedures;
