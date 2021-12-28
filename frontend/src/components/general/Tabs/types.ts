import { ITab } from "@src/types";
export interface IProps {
  tabs: ITab[];
  activeTab: ITab;
  setActiveTab: (arg: ITab) => void;
}
