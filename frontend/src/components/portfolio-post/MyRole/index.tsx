import React from "react";
import checkSvg from "@images/icons/check.svg";
import IFAW from "@images/portfolio-post/IFAW-website.jpg";

const MyRole = () => {
  return (
    <div className="mt-[17px]">
      <h3 className="text-primary text-xl">My Role</h3>
      <div className="mt-[22px] flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Provided Hosting</p>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Project Management</p>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Theme Development</p>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>HTML5 Optimized</p>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Security Protocols</p>
      </div>
      <div className="flex items-center space-x-2">
        <span>
          <img src={checkSvg} alt="check-icon" />
        </span>
        <p>Custom Plugins</p>
      </div>
      <div className="flex justify-center items-center mt-5 border-2 border-gray-200 p-2">
        <img src={IFAW} alt="IFAW-Website" />
      </div>
    </div>
  );
};

export default MyRole;
