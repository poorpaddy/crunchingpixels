import React from "react";
import Container from "@layout/Container";
import Overview from "@portfolio-post/Overview";
import MyRole from "@portfolio-post/MyRole";
import Layout from "@layout/Layout";

const PortfolioPost: React.FC = function () {
  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px]">
        <Container>
          <div className="pt-12 pb-14 lg:pb-[90px] sm:px-5 md:px-0">
            <h5 className="text-orange text-xs lg:text-sm font-roboto">
              Wordpress
            </h5>
            <h1 className="text-[26px] lg:text-[40px] font-bold leading-[26px] md:leading-10 mt-[19px] lg:max-w-[540px]">
              International fund for animal welfare
            </h1>
            <div className="h-[1px] w-full bg-gray-200 mt-[18px] lg:mt-8"></div>
            <Overview />
            <MyRole />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default PortfolioPost;
