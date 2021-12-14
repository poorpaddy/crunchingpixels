import React from "react";
import { IHeaderNavItem } from "../types";
import linkedinIcon from "@images/icons/linkedin.svg";
import { useLockBodyScroll } from "@hooks";

interface IProps {
  headerNavItems: IHeaderNavItem[];
}

const MobileMenu: React.FC<IProps> = ({ headerNavItems }) => {
  useLockBodyScroll();
  return (
    <div className="absolute top-full bg-white z-10 -left-4 -right-4 h-screen">
      {headerNavItems.map(({ label, key }) => (
        <div
          key={key}
          className="py-6 pl-7 border-b border-gray-300 cursor-pointer"
        >
          <h4 className="leading-4">{label}</h4>
        </div>
      ))}

      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        className="flex items-center justify-center rounded mt-5 ml-7 w-6 h-6 bg-gray-400 cursor-pointer"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  );
};

export default MobileMenu;
