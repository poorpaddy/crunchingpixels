import React from "react";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { IProps } from "./types";

const Layout: React.FC<IProps> = ({ children, className, hideHeader }) => {
  return (
    <main className={className}>
      {hideHeader ? null : <Header showBg />}
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
