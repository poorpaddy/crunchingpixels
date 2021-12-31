import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import BlockContent from "@general/BlockContent";
import GalleryImages from "@components/general/GalleryImages";
import { IPortfolioPost } from "@src/types";

const Portfolio: React.FC<IPortfolioPost> = ({ pageContext: portfolio }) => {
  const { title, category, gallery, summary, _rawBody } = portfolio;

  const formatGalleryData = () => {
    return gallery.map(({ asset }) => ({
      gatsbyImageData: asset.gatsbyImageData,
      altText: asset.altText || `${category[0].name} image`,
    }));
  };

  return (
    <Layout
      seo={{
        title,
        description: summary,
      }}
    >
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px] min-h-[80vh]">
        <Container>
          <div className="pt-12 pb-14 lg:pb-[90px] sm:px-5 md:px-0">
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
            <h1 className="text-[26px] lg:text-[40px] font-bold leading-[26px] md:leading-10 mt-[19px] lg:max-w-[540px]">
              {title}
            </h1>
            <div className="h-[1px] w-full bg-gray-200 mt-[18px] lg:mt-8"></div>
            <BlockContent blocks={_rawBody} />

            <GalleryImages gallery={formatGalleryData()} />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Portfolio;
