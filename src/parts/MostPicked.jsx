import React from "react";
import Button from "@/elements/button/Button";

const MostPicked = (props) => {
  return (
    <section className="px-4 xl:px-[150px] my-[70px]" ref={props.refMostPicked}>
      <h4 className="mb-5 font-medium text-2xl text-gray-900">Most Picked</h4>
      <div className="grid grid-cols-3 grid-rows-2 h-[460px] gap-[30px] [&>*]:min-w-[361px]">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpiked-${index}`}
              className={`flex items-center justify-center rounded-[15px] ] ${
                index === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <div className="card card-featured group relative h-full cursor-pointer overflow-hidden rounded-[15px] after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-b after:scale-110 group-hover:after:scale-100">
                <div className="tag text-sm bg-[#FF498B] py-1 px-5 absolute top-0 right-0 text-white rounded-tr-[15px] rounded-bl-[15px] font-normal z-[2]">
                  {`$${item.price} per ${item.unit}`}
                </div>
                <div className="group-hover:scale-110 overflow-hidden transition-all ease-in-out duration-500">
                  <figure className="img-wrapper h-full">
                    <img
                      className="img-cover object-cover w-full h-full"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  </figure>
                </div>
                <div className="meta-wrapper absolute bottom-0 text-white flex flex-col justify-end p-5 w-full translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[10px] z-50">
                  <Button type="link" href={`/properties/${item._id}`}>
                    <h5 className="text-[1.125rem] mb-[2px]">{item.name}</h5>
                  </Button>
                  <span className="text-sm">
                    {`${item.city}, ${item.country}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MostPicked;
