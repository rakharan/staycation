import React from "react";
import parse from "html-react-parser";
const PageDetailDescription = ({ data }) => {
  return (
    <main className="[&>p]:text-[#B0B0B0] [&>p]:text-base [&>p]:font-light [&>p]:mb-[10px] ">
      <h4 className="text-gray-900 text-xl font-medium mb-[10px]">
        About the place
      </h4>
      {parse(data.description)}
      <div className="grid mt-[30px] grid-cols-4 grid-rows-2 gap-x-[50px] gap-y-5">
        {data.features.length === 0
          ? "Tidak Ada Feature"
          : data.features.map((feature, index) => {
              return (
                <div key={`feature-${index}`} className=" mb-5">
                  <img
                    width="38"
                    className="block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-[#B0B0B0] font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default PageDetailDescription;
