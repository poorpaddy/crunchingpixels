import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import { useLocation } from "@reach/router";
import { LINKEDIN_URL, NAVITEMS } from "@config/constants";
import { useLockBodyScroll } from "@hooks";
import TransitionLink from "@general/TransitionLink";

interface IProps {
  showMobileMenu: boolean;
}

const MobileMenu: React.FC<IProps> = ({ showMobileMenu }) => {
  const { pathname } = useLocation();

  const getActiveLinkCls = (url) => {
    if (url === "/" && pathname === "/") return true;
    if (pathname.includes(url) && url !== "/") return true;
    return false;
  };

  useLockBodyScroll(showMobileMenu);
  return (
    <div
      className={cn(
        "absolute top-full bg-white z-10 -left-4 -right-4 overflow-hidden transition-all duration-300 md:hidden",
        showMobileMenu ? "h-screen" : "h-0"
      )}
    >
      <ul>
        {NAVITEMS.map(({ label, key, url }) => (
          <li
            key={key}
            className={cn(
              "py-6 pl-11 border-b border-gray-300 cursor-pointer]",
              { "text-[#eb6923]": getActiveLinkCls(url) }
            )}
          >
            <TransitionLink
              to={url}
              className={cn("leading-4 hover:text-[#eb6923]", {
                "text-[#eb6923]": getActiveLinkCls(url),
              })}
            >
              {label}
            </TransitionLink>
          </li>
        ))}
      </ul>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        className="flex items-center justify-center rounded mt-5 ml-11 w-6 h-6 bggray-400 cursor-pointer"
      >
        <StaticImage
          src="../../../../assets/images/icons/linkedin-mobile.svg"
          alt="linkedin icon"
        />
      </a>
    </div>
  );
};

export default MobileMenu;
