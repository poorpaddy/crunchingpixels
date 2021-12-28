import React from "react";
import cn from "classnames";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import Seo from "@general/Seo";
import { IProps } from "./types";

const Layout: React.FC<IProps> = ({
  children,
  className,
  hideHeader,
  seo = {},
}) => {
  return (
    <main className={cn("md:px-5 md:bg-gray-200", className)}>
      <Seo {...seo} />
      {hideHeader ? null : <Header showBg />}
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
