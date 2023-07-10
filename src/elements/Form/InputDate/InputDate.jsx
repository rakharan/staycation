import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import formatDate from "@/utils/formatDate";
import iconCalendar from "/image/icon/icon_calendar.svg";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const [isShown, setIsShown] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlerClickOutside);

    return () => {
      document.removeEventListener("mousedown", handlerClickOutside);
    };
  });

  const refDate = useRef(null);
  const handlerClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShown(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-4", props.outerClassName].join(" ")}
    >
      <div className="input-group bg-white relative">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text pointer-events-none border-none cursor-pointer p-2 rounded-[4px] w-[45px] h-[45px] flex justify-center bg-gray-900 absolute z-50">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          readOnly
          type="text"
          className="form-control border-none rounded-none outline-none shadow-none bg-gray-100 py-2 px-[45px] text-center justify-center w-full h-[45px]"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShown(!isShown)}
        />

        {isShown && (
          <div className="date-range-wrapper p-1 bg-white shadow-xl  rounded-[4px]  z-[5] absolute top-[50px]">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDate;

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placehlder: PropTypes.string,
  outerClassName: PropTypes.string,
};
