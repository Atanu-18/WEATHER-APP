import React from "react";

const DataContainer = ({ title, data_primary, data_unit, data_secondary }) => {
  return (
    <div>
      <main className="h-[200px] md:h-[290px] flex flex-col gap-5 border border-gray-300 rounded-[30px] backdrop-blur-lg bg-white/30 p-5">
        <span className="text-[20px] font-bold text-[#696868]">{title}</span>
        <div className="leading-none">
          <div className="flex flex-wrap">
            <div>
              <span className="text-[70px] md:text-[90px] lg:text-[130px] font-bold text-[#696868]">
                {data_primary}
              </span>
              <span className="text-[40px] font-semibold text-[#696868]">
                {data_unit}
              </span>
            </div>
          </div>
          <span className="text-[40px] font-semibold text-[#b9b7b7]">
            {data_secondary}
          </span>
        </div>
      </main>
    </div>
  );
};

export default DataContainer;