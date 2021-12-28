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
    <div>
      {thumbnail && (
        <GatsbyImage
          className="w-full h-[240px] object-cover object-center"
          image={thumbnail.gatsbyImageData}
          alt={thumbnail.altText}
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
      <p className="text-sm font-roboto leading-6 mt-5 mb-5">{summary}</p>
      <Link to={`/sagas/${slug}`}>
        <Button label="Read More" />
      </Link>
    </div>
  );
};

export default Saga;
