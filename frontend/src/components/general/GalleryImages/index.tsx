import React, { useState, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import chevronRight from "@images/icons/chevron-right.svg";
import chevronLeft from "@images/icons/chevron-left.svg";
import { IProps } from "./types";

const GalleryImages: React.FC<IProps> = ({ gallery = [] }) => {
  const { openLightbox } = useLightbox();
  const [slide, setSlide] = useState(0);
  const touchStart = useRef(null);

  const goToSlide = (slide) => {
    if (slide < 0) return setSlide(gallery.length - 1);
    if (slide + 1 > gallery.length) return setSlide(0);
    return setSlide(slide);
  };

  if (!gallery || gallery.length <= 0) return null;
  return (
    <>
      <SRLWrapper>
        <div className="hidden">
          {gallery.map(({ gatsbyImageData, altText }, i) => (
            <GatsbyImage
              key={i}
              className="w-full h-full object-cover object-center"
              image={gatsbyImageData}
              alt={altText}
            />
          ))}
        </div>
      </SRLWrapper>

      <div className="relative">
        <button
          onClick={() => goToSlide(slide - 1)}
          className="hidden lg:flex justify-center items-center absolute h-12 w-12 right-full top-1/2 -translate-y-1/2"
        >
          <img
            className="cursor-pointer w-2"
            src={chevronLeft}
            alt="chevron left icon"
          />
        </button>
        {gallery?.length > 0 && (
          <div className="overflow-hidden border-2 border-gray-200 h-[300px] sm:h-[400px] md:h-[565px] lg:h-[636px] mt-5 lg:mt-16 p-2 md:p-3 lg:p-4">
            <div className="flex h-full w-full overflow-hidden">
              <div
                className="flex h-full transition-all duration-500"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {gallery.map(({ gatsbyImageData, altText }, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full h-full cursor-pointer"
                    onClick={() => {
                      openLightbox(i);
                    }}
                  >
                    <GatsbyImage
                      onTouchStart={(e) => {
                        if (window.innerWidth >= 1024) return;
                        touchStart.current = e.changedTouches[0].pageX;
                      }}
                      onTouchEnd={(e) => {
                        const touchEndPosition = e.changedTouches[0].pageX;
                        if (
                          window.innerWidth >= 1024 ||
                          Math.abs(touchEndPosition - touchStart.current) < 10
                        )
                          return;

                        if (touchEndPosition - touchStart.current > 0) {
                          goToSlide(slide - 1);
                        } else {
                          goToSlide(slide + 1);
                        }
                      }}
                      className="w-full h-full object-cover object-center"
                      image={gatsbyImageData}
                      alt={altText}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => goToSlide(slide + 1)}
          className="hidden lg:flex justify-center items-center absolute h-12 w-12 left-full top-1/2 -translate-y-1/2"
        >
          <img
            className="cursor-pointer w-2"
            src={chevronRight}
            alt="chevron right icon"
          />
        </button>
      </div>
    </>
  );
};

export default GalleryImages;
