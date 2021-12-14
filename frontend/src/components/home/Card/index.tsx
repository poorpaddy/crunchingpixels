import Container from "@layout/Container";
import React from "react";
import { ICards } from "../types";
import cn from "classnames";

const Card: React.FC<ICards> = ({ title, avatar, points }) => {
  return (
    <Container className="pt-20">
      <div className="text-center pt-20 px-6 bg-white pb-1 rounded-lg relative">
        <div
          className={cn(
            "rounded-full w-28 h-28 absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-50%] shadow-md",
            avatar.color
          )}
        >
          <img src={avatar.image} alt="avatar" />
        </div>
        <div>
          <h1 className="text-2xl text-secondary mb-7 font-[600]">{title}</h1>
          <ul className="text-left">
            {points.map((point, i) => (
              <li
                key={i}
                className="text-sm text-secondary py-4 border-t-2 border-gray-200"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Card;
