import React from "react";
import Button from "@components/general/Button";
import { IProps } from "./types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Saga: React.FC<IProps> = ({
  thumbnail,
  category,
  title,
  summary,
  date,
  slug,
}) => {
  return (
    <div className="flex flex-col">
      {thumbnail && (
        <GatsbyImage
          className="w-full h-[240px] object-cover object-center"
          image={thumbnail.gatsbyImageData}
          alt={thumbnail.altText || ""}
        />
      )}
      <ul className="flex space-x-3 mt-3">
        {category.map(({ name }) => (
          <li key={name} className="text-orange text-xs lg:text-sm font-roboto">
            {name}
          </li>
        ))}
      </ul>
      <h1 className="text-[22px] leading-6 mt-3">{title}</h1>
      <p className="font-roboto text-xs text-gray-400 mt-4">{date}</p>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-sm font-roboto leading-6 mt-5 mb-5">
          {summary?.substring(0, 130)}...
        </p>
        <Link to={`/sagas/${slug}`}>
          <Button label="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default Saga;
