import React from "react";
import Breadcrumb from "@/elements/Breadcrumb/Breadcrumb";
const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <section className="px-4 xl:px-[150px] my-[50px]">
      <div className="w-full flex relative">
        <div className="breadcrumb z-30">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="text-center flex flex-col absolute justify-center w-full">
          <h1 className=" text-4xl font-semibold text-gray-900">{data.name}</h1>
          <span className=" text-lg font-light text-[#B0B0B0]">
            {data.city}, {data.country}
          </span>
        </div>
      </div>
      <div className="w-full bg-slate-500">
        <div className="grid grid-cols-2 grid-rows-2"></div>
      </div>
    </section>
  );
};

export default PageDetailTitle;
