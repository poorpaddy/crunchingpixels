import Container from "@layout/Container";
import React from "react";
import { ICards } from "../types";
import cn from "classnames";

const Card: React.FC<ICards> = ({ title, avatar, points }) => {
  return (
    <div className="pt-20 md:pt-6 lg:pt-20 ">
      <div className="text-center pt-20 md:py-10 lg:pt-20 px-6 md:px-8 bg-white pb-1 rounded-lg lg:rounded-[20px] relative lg:relative md:flex lg:block md:bg-[#f7f7f7]">
        <div className="md:w-[48%] lg:w-auto md:flex md:flex-col lg:block md:justify-center md:items-center">
          <div
            className={cn(
              "rounded-full w-28 h-28 absolute md:static lg:absolute left-[50%] top-0 lg:left-[50%] lg:top-0 lg:translate-x-[-50%] lg:translate-y-[-50%] translate-x-[-50%] translate-y-[-50%] md:translate-x-0 md:translate-y-0 shadow-md",
              avatar.color
            )}
          >
            <img src={avatar.image} alt="avatar" />
          </div>
          <h1 className="hidden md:block lg:hidden mt-9 text-2xl lg:text-3xl text-secondary font-[600]">
            {title}
          </h1>
        </div>
        <div className="md:w-[52%] lg:w-auto">
          <h1 className="md:hidden lg:block text-2xl lg:text-3xl text-secondary mb-7 font-[600]">
            {title}
          </h1>
          <ul className="text-left">
            {points.map((point, i) => (
              <li
                key={i}
                className="text-sm lg:text-base text-secondary py-4 border-t-2 border-gray-200 md:first:border-t-0 lg:first:border-t-2"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
