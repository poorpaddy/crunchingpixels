import React from "react";
import ContactForm from "@contact/ContactForm";
import Container from "@layout/Container";
import Header from "@layout/Header";
import Layout from "@layout/Layout";

const PortfolioPost: React.FC = function () {
  return (
    <Layout hideHeader>
      <Container className="bg-home pb-4">
        <Header />
        <h1 className="text-white text-2xl font-bold mt-9 px-[22px]">
          Contact
        </h1>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default PortfolioPost;
