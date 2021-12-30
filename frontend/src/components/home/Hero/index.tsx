import React from "react";
import { Link } from "gatsby";
import Header from "@layout/Header";
import Container from "@layout/Container";

const Hero: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <main className="bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover bg-center md:rounded-b-lg lg:rounded-b-[20px]">
      <Header />
      <Container>
        <section className="h-[500px] text-left ml-5 py-5 relative">
          <div className="absolute bottom-0 md:relative md:w-1/3">
            <h1 className="text-3xl md:text-4xl lg:text-7xl mt-5 md:mt-20 lg:mt-20  text-white w-full">
              {title}
            </h1>
            <p className="text-sm lg:text-base mt-2 md:mt-5 text-white">
              {description}
            </p>
            <Link to="/portfolio">
              <button className="bg-white px-11 md:px-16 py-3 mt-7 mb-10 text-sm lg:text-base text-orange rounded bg-gradient-to-b from-white via-white to-[#41dad864] font-roboto shadow-sm cursor-pointer">
                Portfolio
              </button>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;
