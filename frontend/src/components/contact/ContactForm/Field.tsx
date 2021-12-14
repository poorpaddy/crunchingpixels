import React from "react";
import { IFieldProps } from "./types";

const Field: React.FC<IFieldProps> = ({ type, label, id }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xs font-roboto text-opacity-50" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-10 rounded border-2 border-gray-200 bg-gray-100 text-sm p-3 font-roboto"
        type={type}
        id={id}
      />
    </div>
  );
};

export default Field;
