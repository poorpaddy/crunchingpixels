import React from "react";
import ContactForm from "@contact/ContactForm";
import Container from "@layout/Container";
import Header from "@layout/Header";
import Layout from "@layout/Layout";

const PortfolioPost: React.FC = function () {
  return (
    <Layout hideHeader>
      <div className="bg-contact lg:bg-contact-desk bg-cover md:rounded-b-[20px]">
        <Header />
        <Container className="pb-4 md:pb-10 lg:pb-16 md:mb-4 mx-auto">
          <h1 className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mt-9 md:mt-12 lg:mt-[86px] px-[22px] md:px-0 lg:max-w-[970px] lg:mx-auto">
            Contact
          </h1>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  );
};

export default PortfolioPost;
