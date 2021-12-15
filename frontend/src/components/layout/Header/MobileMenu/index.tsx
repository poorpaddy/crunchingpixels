import React from "react";
import { Link } from "gatsby";
import { NAVITEMS } from "@config/constants";
import linkedinIcon from "@images/icons/linkedin.svg";
import { useLockBodyScroll } from "@hooks";

const MobileMenu: React.FC = () => {
  useLockBodyScroll();
  return (
    <div className="absolute top-full bg-white z-10 -left-4 -right-4 h-screen">
      <ul>
        {NAVITEMS.map(({ label, key, url }) => (
          <li
            key={key}
            className="py-6 pl-11 border-b border-gray-300 cursor-pointer"
          >
            <Link to={url} className="leading-4">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        className="flex items-center justify-center rounded mt-5 ml-11 w-6 h-6 bg-gray-400 cursor-pointer"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  );
};

export default MobileMenu;
