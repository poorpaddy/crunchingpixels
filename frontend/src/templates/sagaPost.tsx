import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import { getFormatedDate } from "@utils";
import BlockContent from "@general/BlockContent";
import GalleryImages from "@general/GalleryImages";
import { ISagaPost } from "@src/types";

const Saga: React.FC<ISagaPost> = function ({ pageContext: saga }) {
  const { title, date, category, gallery, _rawBody } = saga;

  const formatGalleryData = () => {
    return gallery.map(({ asset }) => ({
      gatsbyImageData: asset.gatsbyImageData,
      altText: asset.altText || `${category[0].name} image`,
    }));
  };

  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px]">
        <Container className="pt-10 pb-14">
          <ul className="flex space-x-3">
            {category.map(({ name }) => (
              <li
                key={name}
                className="text-orange text-xs lg:text-sm font-roboto"
              >
                {name}
              </li>
            ))}
          </ul>
          <h1 className="text-[26px] lg:text-[40px] font-bold leading-10 mt-[19px] lg:mt-[30px]">
            {title}
          </h1>
          <p className="font-roboto text-xs lg:text-sm text-gray-400 mt-2 lg:mt-5">
            {getFormatedDate(date)}
          </p>
          <div className="h-[1px] w-full bg-gray-200 mt-[18px]"></div>

          <BlockContent blocks={_rawBody} />

          <GalleryImages gallery={formatGalleryData()} />
        </Container>
      </div>
    </Layout>
  );
};

export default Saga;
