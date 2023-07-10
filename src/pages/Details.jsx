import PageDetailTitle from "@/parts/PageDetailTitle";
import React from "react";
import ItemDetails from "@/json/itemDetails.json";
import FeaturedImage from "@/parts/FeaturedImage";
import PageDetailDescription from "@/parts/PageDetailDescription";
import BookingForm from "@/parts/BookingForm";
import Category from "@/parts/Category";
import Testimony from "@/parts/Testimony";
import Header from "@/parts/Header";

const Details = (props) => {
  document.title = "Staycation | Home";

  const breadcrumb = [
    {
      pageTitle: "Home",
      pageHref: "/",
    },
    {
      pageTitle: "House Details",
      pageHref: "",
    },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen">
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="px-4 xl:px-[150px] my-[50px]">
          <div className="grid grid-cols-12">
            <div className="col-span-7 pr-10">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-span-5 border-[1px] border-[#E5E5E5] rounded-[15px]">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>
        <Category data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
      </div>
    </>
  );
};

export default Details;
