import React from "react";

import PropTypes from "prop-types";

const Star = ({ className, value, height, width, spacing }) => {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPosition = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPosition = leftPosition + width;
    star.push(
      <div
        className="star absolute  inline-flex "
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
          height: height,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star absolute  inline-flex "
        key={`star`}
        style={{
          left: leftPosition,
          width: decimals * width - spacing,
          height: height,
        }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star absolute inline-flex star-placeholder "
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
          height: height,
        }}
      ></div>
    );
  }
  return (
    <>
      <div
        className={[
          "stars relative min-w-[200px]  inline-flex",
          className,
        ].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
};

export default Star;

Star.PropTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
