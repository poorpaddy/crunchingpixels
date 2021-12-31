import React from "react";
import Header from "@layout/Header";
import Container from "@layout/Container";
import TransitionLink from "@general/TransitionLink";

const Hero: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <main className="bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover bg-cener md:rounded-b-lg lg:rounded-b-[20px]">
      <Header />
      <Container>
        <section className="h-[500px] text-left ml-5 mt-5 md:mt-20 lg:mt-20 relative">
          <div className="absolute bottom-0 md:relative md:w-2/5 lg:w-1/2">
            <h1 className="text-3xl md:text-[40px] lg:text-5xl xl:text-7xl  text-white w-full">
              {title}
            </h1>
            <p className="text-sm lg:text-base mt-2 md:mt-5 text-white">
              {description}
            </p>
            <TransitionLink to="/portfolio">
              <button className="bg-white px-11 md:px-16 py-3 mt-7 mb-10 text-sm lg:text-base text-orange rounded bg-gradient-to-b from-white via-white to-[#41dad864] font-roboto shadow-sm cursor-pointer">
                Portfolio
              </button>
            </TransitionLink>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;
