import Button from "@/elements/button/Button";
import React from "react";

const Category = ({ data }) => {
  return data.map((category, index1) => {
    return (
      <section className="mb-[70px]" key={`category-${index1}`}>
        <h4 className="font-medium text-2xl text-gray-900 mb-[20px]">
          {category.name}
        </h4>
        <div className="grid grid-cols-4  gap-[30px] [&_.item]:min-w-[263px]">
          {category.items.length === 0 ? (
            <div className="flex items-center">
              <div>There is no property at this category</div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div className="item" key={`category-${index1}-item-${index2}`}>
                  <div className="card rounded-[15px]  relative overflow-hidden">
                    {item.isPopular && (
                      <div className="tag text-sm bg-[#FF498B] py-1 px-5 absolute top-0 right-0 text-white rounded-tr-[15px] rounded-bl-[15px] font-normal z-[3]">
                        Popular <span>Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper h-[180px]">
                      <img
                        className="img-cover object-cover w-full h-full"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </figure>
                    <div className="meta-wrapper mt-4">
                      <Button
                        className=" text-gray-800 cursor-pointer"
                        href={`/properties/${item._id}`}
                        type="link"
                      >
                        <h5 className="text-lg mb-[2px]">{item.name}</h5>
                      </Button>
                      <span className="text-sm text-gray-400">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Category;
