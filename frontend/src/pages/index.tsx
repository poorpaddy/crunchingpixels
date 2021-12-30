import React from "react";
import { graphql } from "gatsby";
import Card from "@home/Card";
import Hero from "@home/Hero";
import Layout from "@layout/Layout";
import { ICards } from "@home/types";
import group from "@images/home/group.svg";
import person from "@images/home/person.svg";
import portfolioImg from "@images/home/portfolio.svg";
import Container from "@components/layout/Container";
import { IHomePage } from "@src/types";

const Home: React.FC<IHomePage> = function ({
  data: { homePage, funStuff, portfolio, thinkTank },
}) {
  const cards: ICards[] = [
    {
      title: "Think Tank",
      avatar: {
        color: "bg-primary",
        image: {
          src: group,
          altText: "team icon",
        },
      },
      posts: thinkTank.nodes.map((node) => ({
        ...node,
        slug: { current: `/sagas/${node.slug.current}` },
      })),
    },
    {
      title: "Fun Staff",
      avatar: {
        color: "bg-orange",
        image: {
          src: person,
          altText: "person icon",
        },
      },
      posts: funStuff.nodes.map((node) => ({
        ...node,
        slug: { current: `/sagas/${node.slug.current}` },
      })),
    },
    {
      title: "Portfolio",
      avatar: {
        color: "bg-[#41dad8]",
        image: {
          src: portfolioImg,
          altText: "portfolio icon",
        },
      },
      posts: portfolio.nodes.map((node) => ({
        ...node,
        slug: { current: `/portfolio/${node.slug.current}` },
      })),
    },
  ];
  return (
    <Layout hideHeader>
      <Hero {...homePage} />
      <main className="bg-gray-200 md:bg-white md:my-2 lg:my-4 py-14 lg:py-24 md:rounded-lg lg:rounded-[20px]  ">
        <Container className="lg:grid grid-cols-3 gap-5">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </Container>
      </main>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    homePage: sanityHomePage {
      title
      description
    }
    thinkTank: allSanitySaga(
      sort: { fields: date, order: DESC }
      filter: {
        date: { ne: null }
        category: { elemMatch: { slug: { current: { eq: "think-tank" } } } }
      }
      limit: 5
    ) {
      nodes {
        title
        slug {
          current
        }
      }
    }
    funStuff: allSanitySaga(
      sort: { fields: date, order: DESC }
      filter: {
        date: { ne: null }
        category: { elemMatch: { slug: { current: { eq: "fun-stuff" } } } }
      }
      limit: 5
    ) {
      nodes {
        title
        slug {
          current
        }
      }
    }

    portfolio: allSanityPortfolio(
      sort: { fields: date, order: DESC }
      filter: { date: { ne: null } }
      limit: 5
    ) {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;
