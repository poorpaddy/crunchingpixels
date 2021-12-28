import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import "@styles/tailwind.css";
import "@styles/global.css";
import "@styles/hamburger.css";

export const wrapRootElement = ({ element }) => {
  return <SimpleReactLightbox>{element}</SimpleReactLightbox>;
};
