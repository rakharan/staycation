import React from "react";
import IconText from "./IconText";
import Button from "@/elements/button/Button";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-gray-200 py-[50px] px-4 xl:px-[150px] mt-[100px] flex flex-col justify-center text gap-y-[50px]">
      <div className="flex justify-between [&>div>ul>li]:pt-[0.3125rem] [&>div>ul>li>a]:text-[#B0B0B0] [&>div>ul>li>a]:font-light [&>div>ul>li>span]:font-light hover:[&>div>ul>li>a]:text-gray-800 [&>div>h6]:text-lg [&>div>h6]:font-medium [&>div>h6]:text-gray-900">
        <div className="w-[256px]">
          <IconText />
          <p className="brand-tagline text-[#B0B0B0]">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div>
          <h6 className="mt-2">For Beginners</h6>
          <ul className="">
            <li>
              <Button type="link" href="/register">
                New Account
              </Button>
            </li>
            <li>
              <Button type="link" href="/properties">
                Start Booking a Room
              </Button>
            </li>
            <li>
              <Button type="link" href="/use-payments">
                Use Payments
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mt-2">Explore Us</h6>
          <ul>
            <li>
              <Button type="link" href="/career">
                Our Career
              </Button>
            </li>
            <li>
              <Button type="link" href="/privacy">
                Privacy
              </Button>
            </li>
            <li>
              <Button type="link" href="/terms">
                Terms & Condition
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mt-2">Contact Us</h6>
          <ul className="[&>li]:pt-[0.3125rem] [&>li>button]:text-[#B0B0B0] [&>li>button]:font-light [&>li>span]:font-light [&>li>span]:text-[#B0B0B0] hover:[&>li>button]:text-gray-800">
            <li>
              <Button
                isExternal
                href="mailto:support@staycation.id
                "
              >
                support@staycation.id
              </Button>
            </li>
            <li>
              <Button isExternal href="tel:+6289697832017">
                021 - 2200 - 1996
              </Button>
            </li>
            <li>
              <span>Staycation, Kemang, Jakarta</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center font-light">
        Copyright 2019 • All rights reserved • Staycation
      </div>
    </footer>
  );
};

export default Footer;
