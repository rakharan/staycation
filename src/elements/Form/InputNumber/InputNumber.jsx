import React from "react";
import PropTypes from "prop-types";

const InputNumber = (props) => {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };
  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-4", props.outerClassName].join(" ")}>
      <div className="flex input-group bg-white [&>div>span]:border-none [&>div>span]:cursor-pointer [&>div>span]:rounded-[4px] [&>div>span]:p-0 [&>div>span]:text-2xl [&>div>span]:w-[45px] [&>div>span]:h-[45px] [&>div>span]:flex [&>div>span]:justify-center [&>div>span]:select-none relative">
        <div className="input-group-prepend absolute left-0">
          <span
            className="input-group-text minus flex items-center text-white bg-[#E74C3C]"
            onClick={minus}
          >
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          readOnly
          className="form-control min-h-[45px] border-none rounded-none outline-none shadow-none bg-[#F5F6F8] py-2 px-4 text-center w-full"
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
        />
        <div className="input-group-append absolute right-0">
          <span
            className="input-group-text text-center flex items-center plus text-white bg-[#1ABC9C]"
            onClick={plus}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};
InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSuffixPlural: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
