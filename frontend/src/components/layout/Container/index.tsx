import React from "react";
import cn from "classnames";
import { Props } from "./types";

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("px-4", className)}>{children}</div>;
};

export default Container;
