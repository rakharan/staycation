import React from "react";

const FeaturedImage = ({ data }) => {
  return (
    <section className="px-4 xl:px-[150px]">
      <div className="grid grid-cols-12 grid-rows-2 gap-[10px]">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${
                index === 0 ? "col-span-7 row-span-2" : "col-span-5 row-span-1"
              }`}
            >
              <div className="card h-full flex">
                <figure className="img-wrapper flex">
                  <img className="img-cover" src={item.url} alt={item._id} />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedImage;
