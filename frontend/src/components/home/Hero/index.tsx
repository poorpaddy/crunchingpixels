import React from "react";
import Header from "@layout/Header";
import Container from "@layout/Container";

const Hero: React.FC = () => {
  return (
    <main className="bg-home bg-cover">
      <Header />
      <Container>
        <section className="h-[500px] text-left ml-5 py-5 relative">
          <div className="absolute bottom-0">
            <h1 className="text-3xl mt-5 text-white">Software Engineer</h1>
            <p className="text-sm mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet augue convallis, dictum lorem sed, fermentum lectus. Nam
              blandit condimentum tempor.
            </p>
            <button className="bg-white px-11 py-3 mt-7 mb-10 text-sm text-orange rounded bg-gradient-to-b from-white via-white to-[#41dad864] font-roboto shadow-sm cursor-pointer">
              Portfolio
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;
