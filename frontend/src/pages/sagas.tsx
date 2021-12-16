import React from "react";
import Container from "@layout/Container";
import Layout from "@layout/Layout";
import saga from "@images/sagas/sagas.jpg";
import Recipe from "@components/sagas/Recipe";
import Tabs from "@general/Tabs";
import Pagination from "@general/Pagination";

const Sagas: React.FC = function () {
  const recipes = [
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
    {
      imgUrl: saga,
      category: "Recipes",
      title: "Unbeatable Sausage Gravy and Biscuits",
      date: "December 28, 2020",
      desc: "When I say easy lasagna, I mean easy lasagna. You don’t even have to cook the noodles for this speedy yet impressive pasta dinner. …",
    },
  ];
  return (
    <Layout>
      <div className="bg-white mt-2 lg:mt-4 mb-2 lg:mb-4 rounded-[20px]">
        <Container className="pt-12 pb-10 md:pt-12 lg:pt-14">
          <div className="sm:px-5 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold mt-9">
              Sagas
            </h1>
            <Tabs
              tabs={["All Topics", "Wordpress", "Application", "Sephere"]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 lg:gap-x-5 lg:gap-y-[70px]">
              {recipes.map(({ imgUrl, category, title, desc, date }, i) => (
                <Recipe
                  imgUrl={imgUrl}
                  category={category}
                  title={title}
                  date={date}
                  desc={desc}
                  key={i}
                />
              ))}
            </div>
            <Pagination pages={5} />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Sagas;
