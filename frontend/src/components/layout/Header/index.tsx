import React, { useState } from "react";
import cn from "classnames";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import Container from "@layout/Container";
import logo from "@images/icons/logo.png";
import { IHeaderProps } from "./types";

const headerNavItems = [
  { label: "Home", key: "home" },
  { label: "Portfolio", key: "portfolio" },
  { label: "Sagas", key: "sagas" },
  { label: "Contact", key: "contact" },
];

const Header: React.FC<IHeaderProps> = ({ showBg }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prevValue) => !prevValue);

  return (
    <header
      className={cn("relative pb-1 pt-1.5 bg-cover bg-center w-full", {
        "bg-header": showBg,
      })}
    >
      <Container className="flex justify-between items-center">
        <img src={logo} alt="crunching pixels logo" />
        <MenuIcon
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />

        {showMobileMenu && <MobileMenu headerNavItems={headerNavItems} />}
      </Container>
    </header>
  );
};

export default Header;
