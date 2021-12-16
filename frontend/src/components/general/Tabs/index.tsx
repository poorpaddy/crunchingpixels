import React, { useState } from "react";
import chevronRight from "@images/icons/chevron-right.svg";
import { IProps } from "./types";
import classNames from "classnames";

const getTabsObj = (tabs) =>
  tabs.map((tab, i) => ({
    label: tab,
    key: tab.toLowerCase().split(" ").join("-"),
    active: i === 0 ? true : false,
  }));

const Tabs: React.FC<IProps> = ({ tabs }) => {
  const [tabsData, setTabsData] = useState(getTabsObj(tabs));

  const activeTabHandler = (key) => {
    setTabsData(tabsData.map((tab) => ({ ...tab, active: tab.key === key })));
  };

  return (
    <div className="flex justify-between items-start mt-5 mb-4 border-b border-gray-200">
      <ul className="flex flex-1 overflow-auto space-x-5 font-roboto text-sm scrollbar-hide">
        {tabsData.map(({ label, key, active }) => (
          <li
            onClick={() => activeTabHandler(key)}
            className={classNames("pb-3 cursor-pointer flex-shrink-0", {
              "font-bold border-b-2 border-orange": active,
            })}
            key={key}
          >
            {label}
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
