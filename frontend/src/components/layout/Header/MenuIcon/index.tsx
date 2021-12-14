import React from "react";
import { IProps } from "./types";

const Menu: React.FC<IProps> = ({ showMobileMenu, toggleMobileMenu }) => {
  return (
    <div className="ml-auto">
      <div
        className={`hamburger hamburger--spin ${
          showMobileMenu ? "is-active" : ""
        }`}
        onClick={() => toggleMobileMenu()}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>
    </div>
  );
};

export default Menu;
