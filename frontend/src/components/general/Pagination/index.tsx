import React, { useState } from "react";
import chevronRight from "@images/icons/chevron-right.svg";
import chevronLeft from "@images/icons/chevron-left.svg";
import { IProps } from "./types";
import cn from "classnames";
import { Link } from "gatsby";

const Pagination: React.FC<IProps> = ({
  humanPageNumber,
  nextPagePath,
  previousPagePath,
  numberOfPages,
  basePath,
}) => {
  const getPath = (currentPage) => {
    if (currentPage === humanPageNumber) return null;
    if (currentPage === 1) return `${basePath}`;
    return `${basePath}/${currentPage}`;
  };

  return (
    <div className="mt-9 lg:mt-11 flex-center">
      <Link to={!!previousPagePath ? previousPagePath : null}>
        <img
          className={cn("relative top-[5px] w-2", {
            "cursor-not-allowed opacity-50": !previousPagePath,
          })}
          src={chevronLeft}
          alt="chevron right icon"
        />
      </Link>
      <div className="mx-4">
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
          <Link to={getPath(page)}>
            <span
              key={page}
              className={cn(
                "inline-flex justify-center w-12 h-12 pt-3.5 text-sm cursor-pointer",
                { "bg-primary text-white": page === humanPageNumber }
              )}
            >
              {page}
            </span>
          </Link>
        ))}
      </div>
      <Link to={!!nextPagePath ? nextPagePath : null}>
        <img
          className={cn("relative top-[5px] w-2", {
            "cursor-not-allowed opacity-50": !nextPagePath,
          })}
          src={chevronRight}
          alt="chevron right icon"
        />
      </Link>
    </div>
  );
};

export default Pagination;
