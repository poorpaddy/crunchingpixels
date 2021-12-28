import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "@hooks";

interface IProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<IProps> = ({ title, description }) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  return (
    <Helmet defer={false}>
      <title> {title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default Seo;
