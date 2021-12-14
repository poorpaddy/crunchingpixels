import React from "react";
import ContactForm from "@contact/ContactForm";
import Container from "@layout/Container";
import Header from "@layout/Header";

const PortfolioPost: React.FC = function () {
  return (
    <Container className="bg-home pb-4">
      <Header />
      <h1 className="text-white text-2xl font-bold mt-9 px-[22px]">Contact</h1>
      <ContactForm />
    </Container>
  );
};

export default PortfolioPost;
