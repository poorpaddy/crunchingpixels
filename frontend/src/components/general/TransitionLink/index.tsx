import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

interface IProps {
  to: string;
  className?: string;
  [key: string]: any;
}

const TransitionLink: React.FC<IProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <AniLink fade to={to} {...props} className={className}>
      {children}
    </AniLink>
  );
};

export default TransitionLink;
