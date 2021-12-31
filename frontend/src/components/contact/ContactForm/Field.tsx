import React from "react";
import { IFieldProps } from "./types";

const Field: React.FC<IFieldProps> = ({ type, label, id, name, required }) => {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <label
        className="text-xs lg:text-base font-roboto text-secondary text-opacity-50"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="h-10 rounded border-2 border-gray-200 bg-gray-100 text-sm lg:text-base p-3 font-roboto"
        type={type}
        id={id}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Field;
