import React from "react";
import Button from "@components/general/Button";
import { IProps } from "./types";

const Recipe: React.FC<IProps> = ({ imgUrl, category, title, desc, date }) => {
  return (
    <div>
      <img className="w-full" src={imgUrl} alt="saga" />
      <h3 className="text-sm text-orange font-roboto mt-3">{category}</h3>
      <h1 className="text-[22px] leading-6 mt-3">{title}</h1>
      <p className="font-roboto text-xs text-gray-400 mt-4">{date}</p>
      <p className="text-sm font-roboto leading-6 mt-5 mb-5">{desc}</p>
      <Button label="Read More" />
    </div>
  );
};

export default Recipe;
