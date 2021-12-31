import React from "react";
import { NAVITEMS } from "@config/constants";
import Container from "@layout/Container";
import TransitionLink from "@general/TransitionLink";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white md:rounded-t-lg lg:rounded-t-[20px] py-6 lg:py-8">
      <Container className="md:flex md:justify-between md:items-center">
        <ul className="flex justify-between md:space-x-6 lg:space-x-16">
          {NAVITEMS.map(({ label, key, url }) => (
            <li className="text-sm lg:text-base" key={key}>
              <TransitionLink to={url}>{label}</TransitionLink>
            </li>
          ))}
        </ul>
        <p className="hidden md:flex md:flex-col md:items-end mt-6 md:m-0 pt-4 md:p-0 text-sm lg:text-base text-center border-t border-black border-opacity-10 md:border-0">
          Copyright © 1997-{currentYear} by Dave{" "}
          <span className="block">Bergschneider</span>
        </p>
      </Container>
      {/* for mobile only */}
      <p className="flex flex-col items-end md:hidden px-14 mt-6 pt-4 text-sm lg:text-base text-center border-t border-black border-opacity-10 md:border-0">
        Copyright © 1997-{currentYear} by Dave{" "}
        <span className="block">Bergschneider</span>
      </p>
    </footer>
  );
};

export default Footer;
