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
  ];
  return (
    <Layout>
      <Container className="mt-12 mb-10">
        <h1 className="text-2xl font-bold mt-9">Sagas</h1>
        <Tabs tabs={["All Topics", "Wordpress", "Application", "Sephere"]} />
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
        <Pagination pages={5} />
      </Container>
    </Layout>
  );
};

export default Sagas;
