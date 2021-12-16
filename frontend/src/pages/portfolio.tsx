import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import IFAW from "@images/portfolio/IFAW.jpg";
import PVOA from "@images/portfolio/PVOA.jpg";
import unicef from "@images/portfolio/unicef.jpg";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";

const Portfolio = () => {
  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px] ">
        <Container className="pt-12 pb-10 lg:pt-14 lg:pb-12 sm:px-10 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold">
            Portfolio
          </h1>
          <Tabs tabs={["All Topics", "Wordpress", "Application", "Sephere"]} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 md:gap-x-5 md:gap-y-3  lg:gap-x-5 lg:gap-y-6 md:mt-6">
            <img src={IFAW} alt="IFAW icon" className="w-full" />
            <img src={unicef} alt="unicef icon" className="w-full" />
            <img src={PVOA} alt="unicef icon" className="w-full" />
            <img src={IFAW} alt="IFAW icon" className="w-full" />
            <img src={unicef} alt="unicef icon" className="w-full" />
            <img src={PVOA} alt="unicef icon" className="w-full" />
            <img src={IFAW} alt="IFAW icon" className="w-full" />
            <img src={unicef} alt="unicef icon" className="w-full" />
            <img src={PVOA} alt="unicef icon" className="w-full" />
            <img src={IFAW} alt="IFAW icon" className="w-full" />
            <img src={unicef} alt="unicef icon" className="w-full" />
            <img src={PVOA} alt="unicef icon" className="w-full" />
          </div>
          <Pagination pages={5} />
        </Container>
      </div>
    </Layout>
  );
};

export default Portfolio;
