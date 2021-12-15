import React from "react";
import Footer from "@layout/Footer";
import Card from "@home/Card";
import Hero from "@home/Hero";
import Layout from "@layout/Layout";
import { ICards } from "@home/types";
import group from "@images/home/group.svg";
import person from "@images/home/person.svg";
import portfolio from "@images/home/portfolio.svg";

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
      <div className="bg-gray-200 pb-10">
        {Cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
