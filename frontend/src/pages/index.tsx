import React from "react";
import Card from "@home/Card";
import Hero from "@home/Hero";
import Layout from "@layout/Layout";
import { ICards } from "@home/types";
import group from "@images/home/group.svg";
import person from "@images/home/person.svg";
import portfolio from "@images/home/portfolio.svg";
import Container from "@components/layout/Container";

const Home: React.FC = function () {
  const Cards: ICards[] = [
    {
      title: "Think Tank",
      avatar: {
        color: "bg-primary",
        image: {
          src: group,
          altText: "team icon",
        },
      },
      points: [
        "Creating a php.ini from the server def…",
        " Create Simple Patterns Without the Fus…",
        "3 Firebug Time Saving Tips for Web Des…",
        "Stripe Generator",
        "CSSplay",
      ],
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
      points: [
        "Creating a php.ini from the server def…",
        " Create Simple Patterns Without the Fus…",
        "3 Firebug Time Saving Tips for Web Des…",
        "Stripe Generator",
        "CSSplay",
      ],
    },
    {
      title: "Portfolio",
      avatar: {
        color: "bg-[#41dad8]",
        image: {
          src: portfolio,
          altText: "portfolio icon",
        },
      },
      points: [
        "Creating a php.ini from the server def…",
        " Create Simple Patterns Without the Fus…",
        "3 Firebug Time Saving Tips for Web Des…",
        "Stripe Generator",
        "CSSplay",
      ],
    },
  ];
  return (
    <Layout hideHeader>
      <Hero />
      <main className="bg-gray-200 md:bg-white md:my-2 lg:my-4 py-14 lg:py-24 md:rounded-lg lg:rounded-[20px]  ">
        <Container className="lg:grid grid-cols-3 gap-5">
          {Cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </Container>
      </main>
    </Layout>
  );
};

export default Home;
