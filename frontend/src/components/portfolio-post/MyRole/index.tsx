import React from "react";
import checkSvg from "@images/icons/check.svg";
import IFAW from "@images/portfolio-post/IFAW-website.jpg";

const MyRole = () => {
  return (
    <div className="mt-[17px] lg:mt-8">
      <h3 className="text-primary text-xl lg:text-2xl">My Role</h3>
      <div className="mt-[22px] flex items-center space-x-2 text-sm lg:text-base leading-6 lg:leading-[30px]">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Provided Hosting</p>
      </div>
      <div className="flex items-center space-x-2 text-sm leading-6">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Project Management</p>
      </div>
      <div className="flex items-center space-x-2 text-sm leading-6">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Theme Development</p>
      </div>
      <div className="flex items-center space-x-2 text-sm leading-6">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>HTML5 Optimized</p>
      </div>
      <div className="flex items-center space-x-2 text-sm leading-6">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Security Protocols</p>
      </div>
      <div className="flex items-center space-x-2 text-sm leading-6">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Custom Plugins</p>
      </div>
      <div className="flex justify-center items-center mt-5 lg:mt-16 border-2 border-gray-200 p-2 md:p-3 lg:p-4">
        <img className="w-full" src={IFAW} alt="IFAW-Website" />
      </div>
    </div>
  );
};

export default MyRole;
