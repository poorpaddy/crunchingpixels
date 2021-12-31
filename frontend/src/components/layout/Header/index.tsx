import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import Container from "@layout/Container";
import { LINKEDIN_URL, NAVITEMS } from "@config/constants";
import { useLocation } from "@reach/router";
import { IHeaderProps } from "./types";
import TransitionLink from "@general/TransitionLink";

const Header: React.FC<IHeaderProps> = ({ showBg }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prevValue) => !prevValue);
  const { pathname } = useLocation();

  const getActiveLinkCls = (url) => {
    if (url === "/" && pathname === "/") return true;
    if (pathname.includes(url) && url !== "/") return true;
    return false;
  };

  return (
    <header
      className={cn("relative pb-1 pt-1.5 bg-cover bg-center w-full ", {
        "bg-header md:rounded-b-lg lg:rounded-b-[20px]": showBg,
      })}
    >
      <Container className="flex justify-between items-center">
        <TransitionLink to="/">
          <StaticImage
            src="../../../assets/images/icons/logo.png"
            alt="crunching pixels logo"
            className="md:!hidden"
          />
          <StaticImage
            src="../../../assets/images/icons/logo-md.png"
            alt="crunching pixels logo"
            className="!hidden md:!inline-block lg:!hidden"
          />
          <StaticImage
            src="../../../assets/images/icons/logo-lg.png"
            alt="crunching pixels logo"
            className="!hidden lg:!inline-block"
          />
        </TransitionLink>
        <MenuIcon
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />

        <MobileMenu showMobileMenu={showMobileMenu} />
        <div className="hidden md:block md:w-1/2">
          <ul className="flex justify-end w-full md:space-x-6 lg:space-x-11">
            {NAVITEMS.map(({ label, key, url }) => (
              <li
                key={key}
                className={cn(
                  "cursor-pointer text-white hover:text-[#eb6923]",
                  { "text-[#eb6923]": getActiveLinkCls(url) }
                )}
              >
                <TransitionLink fade to={url} className="leading-4">
                  {label}
                </TransitionLink>
              </li>
            ))}

            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="flex items-center justify-center flex-shrink-0 rounded w-6 h-6 bg-white cursor-pointer"
            >
              <StaticImage
                src="../../../assets/images/icons/linkedin.svg"
                alt="linkedin icon"
              />
            </a>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
