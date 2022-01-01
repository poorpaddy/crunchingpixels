import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";
import { IPortfolioPage, ITab } from "@src/types";
import TransitionLink from "@general/TransitionLink";

const defaultTab = { name: "All Topics", slug: "/portfolio" };

const Portfolio: React.FC<IPortfolioPage> = ({
  pageContext,
  data: { categories, portfolio },
  location,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const categoryTabs = categories.nodes.map((category) => ({
    name: category.name,
    slug: `/portfolio/${category.slug.current}`,
  }));

  const changeTabHandler = (tab: ITab) => {
    navigate(tab.slug);
  };

  useEffect(() => {
    const currTab = categoryTabs.find((tab) =>
      location.pathname.startsWith(tab.slug)
    );
    if (currTab) setActiveTab(currTab);
  }, [location.pathname]);

  return (
    <Layout
      seo={{
        title: "Portfolio | Crunching Pixels",
      }}
    >
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px] min-h-[80vh]">
        <Container className="pt-12 pb-10 lg:pt-14 lg:pb-12 sm:px-10 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold">
            Portfolio
          </h1>
          <Tabs
            activeTab={activeTab}
            setActiveTab={changeTabHandler}
            tabs={[defaultTab, ...categoryTabs]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 md:gap-x-5 md:gap-y-3 lg:gap-x-5 lg:gap-y-6 md:mt-6">
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
                <TransitionLink key={i} to={`/portfolio/${slug.current}`}>
                  <GatsbyImage image={gatsbyImageData} alt={altText || ""} />
                </TransitionLink>
              )
            )}
          </div>

          {portfolio.nodes.length === 0 && (
            <h1 className="mt-20 text-lg text-center md:text-2xl font-bold">
              No portfolios to show for {activeTab.name} category.
            </h1>
          )}
          {pageContext.numberOfPages > 1 && <Pagination {...pageContext} />}
        </Container>
      </div>
    </Layout>
  );
};

export default Portfolio;

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $categorySlug: String) {
    categories: allSanityCategory(filter: { type: { eq: "portfolio" } }) {
      nodes {
        name
        slug {
          current
        }
      }
    }
    portfolio: allSanityPortfolio(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
      filter: {
        category: { elemMatch: { slug: { current: { eq: $categorySlug } } } }
      }
    ) {
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
