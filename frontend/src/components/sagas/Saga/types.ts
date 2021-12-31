import { IImage } from "@src/types";

export interface IProps {
  thumbnail: IImage;
  category: { name: string; slug: { current: string } }[];
  title: string;
  summary: string;
  date: string;
  slug: string;
}
