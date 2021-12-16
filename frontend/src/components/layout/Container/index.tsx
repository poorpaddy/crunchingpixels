import React from "react";
import cn from "classnames";
import { Props } from "./types";

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "px-4 sm:px-8 md:px-12 lg:px-[120px] max-w-[1168px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
