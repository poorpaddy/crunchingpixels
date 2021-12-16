import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import IFAW from "@images/portfolio/IFAW.jpg";
import unicef from "@images/portfolio/unicef.jpg";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";

const Portfolio = () => {
  return (
    <Layout>
      <Container className="mb-10">
        <h1 className="mt-12 text-2xl font-bold">Portfolio</h1>
        <Tabs tabs={["All Topics", "Wordpress", "Application", "Sephere"]} />
        <div className="space-y-3.5">
          <img src={IFAW} alt="IFAW icon" className="w-full" />
          <img src={unicef} alt="unicef icon" className="w-full" />
          <img src={IFAW} alt="IFAW icon" className="w-full" />
          <img src={unicef} alt="unicef icon" className="w-full" />
          <img src={IFAW} alt="IFAW icon" className="w-full" />
          <img src={unicef} alt="unicef icon" className="w-full" />
        </div>

        <Pagination pages={5} />
      </Container>
    </Layout>
  );
};

export default Portfolio;
