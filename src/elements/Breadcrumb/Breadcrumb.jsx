import Button from "@/elements/button/Button";
import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className={`breadcrumb flex flex-wrap py-3 px-4 mb-4 list-none text-lg  ${props.className}`}
      >
        {props.data.map((item, index) => {
          const isLastItem = index === props.data.length - 1;
          const isActiveItem = isLastItem ? " active" : "";

          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${isActiveItem} [&>a]:text-[#B0B0B0]`}
              style={isLastItem ? { color: "#152C5B" } : null}
            >
              {isLastItem ? (
                item.pageTitle
              ) : (
                <>
                  <Button
                    className="text-[#B0B0B0]"
                    type="link"
                    href={item.pageHref}
                    style={{ color: "#B0B0B0" }}
                  >
                    {item.pageTitle}
                  </Button>
                  <span className="mx-4">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default Breadcrumb;
