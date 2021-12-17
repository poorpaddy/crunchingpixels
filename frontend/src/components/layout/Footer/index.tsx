import React from "react";
import { Link } from "gatsby";
import { NAVITEMS } from "@config/constants";
import Container from "@layout/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white md:rounded-tl-lg md:rounded-tr-lg lg:rounded-tl-2xl lg:rounded-tr-2xl  pt-6 pb-4">
      <Container className="md:flex md:justify-between md:items-center">
        <ul className="flex justify-between space-x-20">
          {NAVITEMS.map(({ label, key, url }) => (
            <li className="text-sm" key={key}>
              <Link to={url}>{label}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 md:m-0 pt-4 md:p-0 text-xs text-center border-t border-black border-opacity-10 md:border-0">
          Copyright © 1997-2021 by Dave Bergschneider
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
