import React from "react";
import { IProps } from "./types";

const Button: React.FC<IProps> = ({ label, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className="bg-primary text-white px-16 py-3 text-sm font-roboto rounded mt-9 mx-auto block"
    >
      {label}
    </button>
  );
};

export default Button;
