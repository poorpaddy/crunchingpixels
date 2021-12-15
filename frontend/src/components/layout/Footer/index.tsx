import React from "react";
import { Link } from "gatsby";
import { NAVITEMS } from "@config/constants";
import Container from "@layout/Container";

const Footer: React.FC = () => {
  return (
    <footer className="px-0.5 pt-6 pb-4 bg-primary text-white">
      <Container>
        <ul className="flex justify-between">
          {NAVITEMS.map(({ label, key, url }) => (
            <li className="text-sm" key={key}>
              <Link to={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </Container>
      <p className="mt-6 pt-4 text-xs text-center border-t border-black border-opacity-10">
        Copyright © 1997-2021 by Dave Bergschneider
      </p>
    </footer>
  );
};

export default Footer;
