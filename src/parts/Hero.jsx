import React from "react";

import ImageHero from "@/assets/image/img-hero.jpg";
import ImageHeroFrame from "@/assets/image/img-hero-frame.jpg";
import IconCities from "@/assets/image/icons/icon-cities.svg";
import IconTraveller from "@/assets/image/icons/icon-traveller.svg";
import IconTreasure from "@/assets/image/icons/icon-treasure.svg";

import Button from "@/elements/button/Button";

import formatNumber from "@/utils/formatNumber";

const Hero = (props) => {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className=" px-4 xl:px-[150px]">
      <div className="flex items-center justify-between">
        <div className="columns-auto pr-8 w-[422px]">
          <h1 className=" font-bold text-[42px] mb-4 text-gray-900">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className=" mb-[30px] font-light text-gray-500 w-[75%]">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="px-8 text-white py-[10px] rounded-[4px] font-medium text-lg min-h-[50px] min-w-[210px]"
            isPrimary
            hasShadow
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="flex mt-20 gap-x-[50px]">
            <div className="columns-auto">
              <img
                width="36"
                height="36"
                src={IconTraveller}
                alt="Icon Traveller"
              />
              <h6 className="mt-4 text-base font-bold">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-light">travellers</span>
              </h6>
            </div>
            <div className="columns-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt="Icon Traveller"
              />
              <h6 className="mt-4 text-base font-bold">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-light">treasures</span>
              </h6>
            </div>
            <div className="columns-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt="Icon Traveller"
              />
              <h6 className="mt-4 text-base font-bold">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="pl-8">
          <div className="image-hero w-[520px] h-[410px] relative flex items-center">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="absolute object-contain  -mt-[30px] -ml-[30px] z-10"
            />
            <img
              src={ImageHeroFrame}
              alt="Room with couches frame"
              className=" absolute -mr-[15px] -mb-[15px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
