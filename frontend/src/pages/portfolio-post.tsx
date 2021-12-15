import React from "react";
import Container from "@layout/Container";
import Overview from "@portfolio-post/Overview";
import MyRole from "@portfolio-post/MyRole";
import Layout from "@layout/Layout";

const PortfolioPost: React.FC = function () {
  return (
    <Layout>
      <Container>
        <div className="mt-12 mb-14">
          <h5 className="text-orange text-xs font-roboto">Wordpress</h5>
          <h1 className="text-[26px] font-bold leading-[26px] mt-[19px]">
            International fund for animal welfare
          </h1>
          <div className="h-[1px] w-full bg-gray-200 mt-[18px]"></div>
          <Overview />
          <MyRole />
        </div>
      </Container>
    </Layout>
  );
};

export default PortfolioPost;
