import React, { useState } from "react";
import chevronRight from "@images/icons/chevron-right.svg";
import { IProps } from "./types";
import classNames from "classnames";

const Tabs: React.FC<IProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-between items-start mt-5 lg:mt-[26px] mb-4 border-b border-gray-200">
      <ul className="flex flex-1 overflow-auto space-x-5 md:space-x-[23px] lg:space-x-[33px] font-roboto text-sm lg:text-base scrollbar-hide">
        {tabs.map((tab) => (
          <li
            onClick={() => setActiveTab(tab)}
            className={classNames("pb-3 cursor-pointer flex-shrink-0", {
              "font-bold border-b-2 border-orange": tab === activeTab,
            })}
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>
      <img
        className="relative top-[5px] cursor-pointer ml-2.5"
        src={chevronRight}
        alt="chevron right icon"
      />
    </div>
  );
};

export default Tabs;
