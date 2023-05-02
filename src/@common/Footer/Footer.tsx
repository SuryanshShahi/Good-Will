import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 text-white bg-neutral-800">
      <div></div>
      <div className="list-none">
        <h4>CONTACT INFO</h4>
        <li>Gautam Buddha University</li>
        <li>Greater Noida</li>
        <li>Pincode - 201312</li>
        <div className="flex">
          <BsTelephoneFill />
          <div className="font-medium">
            Greater Noida:<span className="font-normal">1800-2355-2356</span>
          </div>
        </div>
      </div>
      <div className="list-none">
        <h4>QUICK LINKS</h4>
        <li className="flex items-center mb-3">
          <IoIosArrowForward />
          About Our Organization
        </li>
        <li className="flex items-center mb-3">
          <IoIosArrowForward />
          Become a Volunteer
        </li>
        <li className="flex items-center mb-3">
          <IoIosArrowForward />
          Case Studies
        </li>
        <li className="flex items-center mb-3">
          <IoIosArrowForward />
          Sponsors
        </li>
        <li className="flex items-center mb-3">
          <IoIosArrowForward />
          FAQ
        </li>
      </div>
      <div>
        <h4>URGENT CAUSES</h4>
      </div>
    </div>
  );
};

export default Footer;
