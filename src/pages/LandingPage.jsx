import React, { useRef } from "react";
import Header from "@/parts/Header";
import landingPage from "@/json/landingPage.json";
import Hero from "@/parts/Hero";
import MostPicked from "@/parts/MostPicked";
import Category from "@/parts/Category";
import Testimony from "@/parts/Testimony";

const LandingPage = () => {
  const refMostPicked = useRef(null);

  return (
    <>
      <Header />
      <div className="mt-20">
        <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={refMostPicked}
          data={landingPage.mostPicked}
        />
        <Category data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}></Testimony>
      </div>
    </>
  );
};

export default LandingPage;
