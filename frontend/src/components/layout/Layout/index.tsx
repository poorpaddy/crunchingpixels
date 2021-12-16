import React from "react";
import cn from "classnames";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { IProps } from "./types";

const Layout: React.FC<IProps> = ({ children, className, hideHeader }) => {
  return (
    <main className={cn("md:px-5 md:bg-gray-200", className)}>
      {hideHeader ? null : <Header showBg />}
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
