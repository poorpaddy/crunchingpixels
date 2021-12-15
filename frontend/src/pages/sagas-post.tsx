import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Ingredients from "@components/sagas-post/Ingredients";
import Instructions from "@components/sagas-post/Instructions";
import sagasPost from "@images/sagas-post/sagas-post.jpg";

const SagasPost: React.FC = function () {
  return (
    <Layout>
      <Container className="mt-12 mb-14">
        <h5 className="text-orange text-xs font-roboto">Recipes</h5>
        <h1 className="text-[26px] font-bold leading-[26px] mt-[19px]">
          Extra Easy Lasagna
        </h1>
        <p className="font-roboto text-xs text-gray-400 mt-2  ">
          December 28, 2020
        </p>
        <div className="h-[1px] w-full bg-gray-200 mt-[18px]"></div>
        <img className="mt-4" src={sagasPost} alt="" />
        <p className="text-sm font-roboto leading-6 mt-5">
          When I say easy lasagna, I mean easy lasagna. You don’t even have to
          cook the noodles for this speedy yet impressive pasta dinner.
        </p>
        <Ingredients />
        <Instructions />
      </Container>
    </Layout>
  );
};

export default SagasPost;
