import React from "react";
import Footer from "@layout/Footer";
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
        image: group,
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
        image: person,
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
        image: portfolio,
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
      <Container className="bg-gray-200 md:bg-white pb-10 md:p-14 rounded-lg lg:rounded-2xl md:my-2 lg:my-4 lg:grid grid-cols-3 gap-5">
        {Cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </Container>
    </Layout>
  );
};

export default Home;
