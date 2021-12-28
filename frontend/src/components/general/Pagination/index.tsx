import React, { useState } from "react";
import chevronRight from "@images/icons/chevron-right.svg";
import chevronLeft from "@images/icons/chevron-left.svg";
import { IProps } from "./types";
import cn from "classnames";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const getPages = (totalPages) =>
  Array.from({ length: totalPages }, (_, i) => i + 1);

const Pagination: React.FC<IProps> = ({
  humanPageNumber,
  nextPagePath,
  previousPagePath,
  numberOfPages,
}) => {
  const { pathname } = useLocation();
  const goToPage = (page) => {
    if (page === humanPageNumber) return;
    if (humanPageNumber === 1) return navigate(`${pathname}/${page}`);
    const basePath = pathname.split("/").slice(0, -1).join("/");
    if (page === 1) return navigate(basePath);
    return navigate(`${basePath}/${page}`);
  };

  return (
    <div className="mt-9 lg:mt-11 flex-center">
      <button
        onClick={() => {
          if (previousPagePath) navigate(previousPagePath);
        }}
      >
        <img
          className={cn("relative top-[5px] w-2", {
            "cursor-not-allowed opacity-50": !previousPagePath,
          })}
          src={chevronLeft}
          alt="chevron right icon"
        />
      </button>
      <div className="mx-4">
        {getPages(numberOfPages).map((page) => (
          <button key={page} onClick={() => goToPage(page)}>
            <span
              className={cn(
                "inline-flex justify-center w-12 h-12 pt-3.5 text-sm cursor-pointer",
                { "bg-primary text-white": page === humanPageNumber }
              )}
            >
              {page}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (nextPagePath) navigate(nextPagePath);
        }}
      >
        <img
          className={cn("relative top-[5px] w-2", {
            "cursor-not-allowed opacity-50": !nextPagePath,
          })}
          src={chevronRight}
          alt="chevron right icon"
        />
      </button>
    </div>
  );
};

export default Pagination;
