import React from "react";
import Button from "../elements/button/Button";
import BrandIcon from "./IconText";
const Header = (props) => {
  const getNavLinkclassName = (path) => {
    return props.pathname === path ? "active" : "";
  };
  return (
    <header className=" border-b-[1px] w-full relative font-Poppins text-base mb-[70px]">
      <div className="navbar-container">
        <nav className="navbar bg-white border-gray-200 h-20 flex justify-between">
          <div className="flex items-center justify-between w-full px-4 xl:px-[150px]">
            <BrandIcon />
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:flex md:w-auto"
              id="navbar-default"
            >
              <ul className="navbar-nav ml-auto [&>li>a]:text-gray-900 [&>li>a]:px-4 hover:[&>li>a]:underline flex">
                <li className={`nav-item ${getNavLinkclassName("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkclassName("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkclassName("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${getNavLinkclassName("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
