import React, { useState } from "react";
import { graphql } from "gatsby";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Saga from "@components/sagas/Saga";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";
import { getSlug, getFormatedDate } from "@utils";
import { ISagaPage } from "@src/types";

const Sagas: React.FC<ISagaPage> = function ({
  pageContext,
  data: { category, sagas },
}) {
  const [activeTab, setActiveTab] = useState("All Topics");
  const categoryTabs = category.nodes.map((c) => c.name);

  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px]">
        <Container className="pt-12 pb-10 md:pt-12 lg:pt-14">
          <div className="sm:px-5 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold mt-9">
              Sagas
            </h1>
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={["All Topics", ...categoryTabs]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 lg:gap-x-5 lg:gap-y-[70px]">
              {activeTab === "All Topics"
                ? sagas.nodes.map(
                    (
                      { title, thumbnail, summary, date, category, slug },
                      i
                    ) => (
                      <Saga
                        thumbnail={thumbnail?.asset}
                        category={category}
                        title={title}
                        date={getFormatedDate(date)}
                        summary={summary}
                        slug={slug?.current || getSlug(title)}
                        key={i}
                      />
                    )
                  )
                : sagas.nodes
                    .filter((s) => s.category.find((c) => c.name === activeTab))
                    .map(
                      (
                        { title, thumbnail, summary, date, category, slug },
                        i
                      ) => (
                        <Saga
                          thumbnail={thumbnail?.asset}
                          category={category}
                          title={title}
                          date={getFormatedDate(date)}
                          summary={summary}
                          slug={slug?.current || getSlug(title)}
                          key={i}
                        />
                      )
                    )}
            </div>
            <Pagination {...pageContext} basePath="/sagas" />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Sagas;

export const query = graphql`
  query ($skip: Int!, $limit: Int!, $category: String) {
    category: allSanityCategory(filter: { type: { eq: "saga" } }) {
      nodes {
        name
        type
      }
    }
    sagas: allSanitySaga(
      skip: $skip
      limit: $limit
      filter: {
        category: { elemMatch: { slug: { current: { eq: $category } } } }
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
