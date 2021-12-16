import React, { useState } from "react";
import chevronRight from "@images/icons/chevron-right.svg";
import chevronLeft from "@images/icons/chevron-left.svg";
import { IProps } from "./types";
import cn from "classnames";

const Pagination: React.FC<IProps> = ({ pages }) => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="mt-9 flex-center">
      <img
        className="relative top-[5px] cursor-pointer w-2"
        src={chevronLeft}
        alt="chevron right icon"
      />
      <div className="mx-4">
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <span
            key={page}
            className={cn(
              "inline-flex justify-center w-12 h-12 pt-3.5 text-sm cursor-pointer",
              { "bg-primary text-white": page === activePage }
            )}
            onClick={() => setActivePage(page)}
          >
            {page}
          </span>
        ))}
      </div>
      <img
        className="relative top-[5px] cursor-pointer w-2"
        src={chevronRight}
        alt="chevron right icon"
      />
    </div>
  );
};

export default Pagination;
