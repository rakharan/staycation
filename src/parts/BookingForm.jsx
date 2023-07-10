import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputNumber from "@/elements/Form/InputNumber/InputNumber";
import InputDate from "@/elements/Form/InputDate/InputDate";
import Button from "@/elements/button/Button";

const BookingForm = ({ itemDetails, startBooking, history }) => {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const updateData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (data.date.startDate !== data.date.endDate) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      setData((prevData) => ({
        ...prevData,
        duration: countDuration,
      }));
    }
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +data.duration - 1)
    );

    setData((prevData) => ({
      ...prevData,
      date: {
        ...prevData.date,
        endDate: endDate,
      },
    }));
  }, [data.duration]);

  const handleStartBooking = () => {
    startBooking({
      _id: itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    history.push("/checkout");
  };

  return (
    <div className="card rounded-[15px] my-[60px] mx-20">
      <h4 className=" text-xl font-medium text-gray-900">Start Booking</h4>
      <h5 className="h2 text-[#1ABC9C] my-[14px] text-4xl font-">
        ${itemDetails.price}{" "}
        <span className="text-gray-500">per {itemDetails.unit}</span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="rounded-[4px] w-full h-[50px] bg-[#3252DF] text-lg text-center font-medium text-white"
        hasShadow
        onClick={handleStartBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func,
};

export default BookingForm;
