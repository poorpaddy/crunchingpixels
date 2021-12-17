import React, { useState } from "react";
import cn from "classnames";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import Container from "@layout/Container";
import logo from "@images/icons/logo.png";
import { NAVITEMS } from "@config/constants";
import { Link } from "gatsby";
import linkedinIcon from "@images/icons/linkedin.svg";

import { IHeaderProps } from "./types";

const Header: React.FC<IHeaderProps> = ({ showBg }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prevValue) => !prevValue);
  return (
    <header
      className={cn("relative pb-1 pt-1.5 bg-cover bg-center w-full ", {
        "bg-header md:rounded-bl-lg md:rounded-br-lg lg:rounded-bl-2xl lg:rounded-br-2xl":
          showBg,
      })}
    >
      <Container className="flex justify-between items-center">
        <img src={logo} alt="crunching pixels logo" />
        <MenuIcon
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />

        {showMobileMenu && <MobileMenu />}
        <div className="hidden md:flex justify-center items-center  md:w-1/2">
          <ul className="flex justify-between w-full">
            {NAVITEMS.map(({ label, key, url }) => (
              <li
                key={key}
                className="cursor-pointer text-white hover:text-[#eb6923]"
              >
                <Link to={url} className="leading-4">
                  {label}
                </Link>
              </li>
            ))}

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="flex items-center justify-center rounded w-6 h-6 bg-gray-400 cursor-pointer"
            >
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
