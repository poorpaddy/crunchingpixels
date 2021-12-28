import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";
import { getSlug } from "@utils";
import { IPortfolioPage } from "@src/types";

const Portfolio: React.FC<IPortfolioPage> = ({
  pageContext,
  data: { category, portfolio },
}) => {
  const [activeTab, setActiveTab] = useState("All Topics");
  const categoryTabs = category.nodes.map((c) => c.name);

  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px] ">
        <Container className="pt-12 pb-10 lg:pt-14 lg:pb-12 sm:px-10 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold">
            Portfolio
          </h1>
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={["All Topics", ...categoryTabs]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 md:gap-x-5 md:gap-y-3  lg:gap-x-5 lg:gap-y-6 md:mt-6">
            {portfolio.nodes.map(
              (
                {
                  thumbnail: {
                    asset: { altText, gatsbyImageData },
                  },
                  title,
                  slug,
                },
                i
              ) => (
                <Link
                  key={i}
                  to={`/portfolio/${slug?.current || getSlug(title)}`}
                >
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt={altText || `${category.nodes[0].name} image`}
                  />
                </Link>
              )
            )}
          </div>
          <Pagination {...pageContext} basePath="/portfolio" />
        </Container>
      </div>
    </Layout>
  );
};

export default Portfolio;

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    category: allSanityCategory(filter: { type: { eq: "portfolio" } }) {
      nodes {
        name
        type
      }
    }
    portfolio: allSanityPortfolio(skip: $skip, limit: $limit) {
      nodes {
        title
        slug {
          current
        }
        thumbnail {
          asset {
            altText
            gatsbyImageData(width: 500)
          }
        }
        category {
          name
        }
      }
    }
  }
`;
