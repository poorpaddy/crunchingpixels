import Button from "@general/Button";
import React from "react";
import Field from "./Field";

const ContactForm = () => {
  return (
    <form className="bg-white space-y-6 mt-3 md:mt-6 lg:mt-8 shadow-lg px-[22px] md:px-12 lg:px-[100px] pt-[30px] md:pt-12 lg:pt-[54px] pb-[22px] md:pb-12 lg:pb-16 rounded-lg lg:rounded-[20px] lg:max-w-[970px] mx-auto">
      <div className="lg:flex justify-between lg:space-x-5 space-y-6 lg:space-y-0">
        <Field label="Your name:" type="text" id="name" />
        <Field label="Your email:" type="email" id="email" />
      </div>
      <div className="lg:flex justify-between lg:space-x-5 space-y-6 lg:space-y-0">
        <Field label="Organization website:" type="text" id="organisation" />
        <Field label="Phone:" type="text" id="phone" />
      </div>
      <Field label="Topic:" type="text" id="topic" />
      <div className="flex flex-col space-y-2 mt-6">
        <label
          className="text-xs lg:text-base font-roboto text-secondary text-opacity-50"
          htmlFor="name"
        >
          Question :
        </label>
        <textarea className="h-[120px] lg:h-44 rounded border-2 border-gray-200 bg-gray-100 text-sm lg:text-base p-3 font-roboto outline-none"></textarea>
      </div>
      <div className="text-center mt-10">
        <Button label="Send" type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
