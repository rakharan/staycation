import React from "react";
import Star from "@/elements/Star/Star";
import TestimonyAccent from "/image/testimonial-frame.webp";
import Button from "@/elements/button/Button";

const Testimony = ({ data }) => {
  return (
    <section className="flex items-center gap-x-20 px-4 xl:px-[150px]">
      <div className="">
        <div className="image-testimonnial w-[405px] h-[541px] relative flex items-center">
          <img
            src={data.imageUrl}
            alt="testimonial"
            className=" object-contain z-[2] absolute mt-[30px] ml-[30px]"
          />
          <img
            src={TestimonyAccent}
            alt="testimonial frame"
            className="absolute z-[1] -mt-[30px] "
          />
        </div>
      </div>
      <div>
        <h4 className="mb-10 text-gray-900 text-2xl font-medium">
          {data.name}
        </h4>
        <div className="flex flex-col gap-y-2">
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5 className=" text-[32px] text-gray-900">{data.content}</h5>
          <span className="text-[#B0B0B0] font-light text-lg">
            {data.familyName}, {data.familyOccupation}
          </span>
        </div>
        <div className="mt-[50px]">
          <Button
            className="bg-[#3252DF] text-white rounded-[4px] text-lg py-[10px] px-7"
            type="link"
            href={`/testimonial/${data._id}`}
          >
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
