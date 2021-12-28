import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Saga from "@components/sagas/Saga";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";
import { getFormatedDate } from "@utils";
import { ISagaPage, ITab } from "@src/types";

const defaultTab = { name: "All Topics", slug: "/sagas" };

const Sagas: React.FC<ISagaPage> = function ({
  pageContext,
  data: { categories, sagas },
  location,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const categoryTabs = categories.nodes.map((category) => ({
    name: category.name,
    slug: `/sagas/${category.slug.current}`,
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
        title: "Saga | Crunching Pixels",
      }}
    >
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px] min-h-[80vh]">
        <Container className="pt-12 pb-10 md:pt-12 lg:pt-14">
          <div className="sm:px-5 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold mt-9">
              Sagas
            </h1>
            <Tabs
              activeTab={activeTab}
              setActiveTab={changeTabHandler}
              tabs={[defaultTab, ...categoryTabs]}
            />
            <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-11 lg:gap-x-5 lg:gap-y-[70px]">
              {sagas.nodes.map(
                ({ title, thumbnail, summary, date, category, slug }, i) => (
                  <Saga
                    thumbnail={thumbnail?.asset}
                    category={category}
                    title={title}
                    date={getFormatedDate(date)}
                    summary={summary}
                    slug={slug.current}
                    key={i}
                  />
                )
              )}
            </div>

            {sagas.nodes.length === 0 && (
              <h1 className="mt-20 text-lg text-center md:text-2xl font-bold">
                No Sagas to show for {activeTab.name} category.
              </h1>
            )}
            {pageContext.numberOfPages > 1 && <Pagination {...pageContext} />}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Sagas;

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $categorySlug: String) {
    categories: allSanityCategory(filter: { type: { eq: "saga" } }) {
      nodes {
        name
        slug {
          current
        }
      }
    }
    sagas: allSanitySaga(
      skip: $skip
      limit: $limit
      filter: {
        category: { elemMatch: { slug: { current: { eq: $categorySlug } } } }
      }
    ) {
      nodes {
        title
        thumbnail {
          asset {
            gatsbyImageData
            altText
          }
        }
        slug {
          current
        }
        summary
        date
        category {
          name
        }
      }
    }
  }
`;
