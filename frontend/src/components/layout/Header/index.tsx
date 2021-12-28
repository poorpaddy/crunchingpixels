import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import Container from "@layout/Container";
import { NAVITEMS } from "@config/constants";
import { Link } from "gatsby";

import { IHeaderProps } from "./types";

const Header: React.FC<IHeaderProps> = ({ showBg }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prevValue) => !prevValue);
  return (
    <header
      className={cn("relative pb-1 pt-1.5 bg-cover bg-center w-full ", {
        "bg-header md:rounded-b-lg lg:rounded-b-[20px]": showBg,
      })}
    >
      <Container className="flex justify-between items-center">
        <Link to="/">
          <StaticImage
            src="../../../assets/images/icons/logo.png"
            alt="crunching pixels logo"
          />
        </Link>
        <MenuIcon
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />

        {showMobileMenu && <MobileMenu />}
        <div className="hidden md:block md:w-1/2">
          <ul className="flex justify-end w-full md:space-x-6 lg:space-x-11">
            {NAVITEMS.map(({ label, key, url }) => (
              <li
                key={key}
                className="cursor-pointer text-white hover:text-[#eb6923] "
              >
                <Link to={url} className="leading-4">
                  {label}
                </Link>
              </li>
            ))}

            <a
              href="https://www.linkedin.com/feed/"
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
