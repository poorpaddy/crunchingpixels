import Button from "@general/Button";
import React from "react";
import Field from "./Field";

const ContactForm = () => {
  return (
    <form className="bg-white space-y-6 mt-3 shadow-lg px-[22px] pt-[30px] pb-[22px] rounded-lg">
      <Field label="Your name:" type="text" id="name" />
      <Field label="Your email:" type="email" id="email" />
      <Field label="Organization website:" type="text" id="organisation" />
      <Field label="Phone:" type="text" id="phone" />
      <Field label="Topic:" type="text" id="topic" />
      <div className="flex flex-col space-y-2 mt-6">
        <label className="text-xs font-roboto text-opacity-50" htmlFor="name">
          Question :
        </label>
        <textarea className="h-[120px] rounded border-2 border-gray-200 bg-gray-100 text-sm p-3 font-roboto outline-none"></textarea>
      </div>
      <Button label="Send" type="submit" />
    </form>
  );
};

export default ContactForm;
