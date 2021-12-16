import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import Ingredients from "@components/sagas-post/Ingredients";
import Instructions from "@components/sagas-post/Instructions";
import sagasPost from "@images/sagas-post/sagas-post.jpg";

const SagasPost: React.FC = function () {
  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px]">
        <Container className="pt-10 pb-14">
          <h5 className="text-orange text-xs lg:text-sm font-roboto">
            Recipes
          </h5>
          <h1 className="text-[26px] lg:text-[40px] font-bold leading-[26px] mt-[19px] lg:mt-[30px]">
            Extra Easy Lasagna
          </h1>
          <p className="font-roboto text-xs lg:text-sm text-gray-400 mt-2 lg:mt-5">
            December 28, 2020
          </p>
          <div className="h-[1px] w-full bg-gray-200 mt-[18px]"></div>
          <img
            className="mt-4 md:mt-5 lg:mt-10 w-full"
            src={sagasPost}
            alt=""
          />
          <p className="text-sm lg:text-base font-roboto leading-6 mt-5 lg:mt-12">
            When I say easy lasagna, I mean easy lasagna. You don’t even have to
            cook the noodles for this speedy yet impressive pasta dinner.
          </p>
          <Ingredients />
          <Instructions />
        </Container>
      </div>
    </Layout>
  );
};

export default SagasPost;
