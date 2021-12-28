import { PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IImage {
  altText: string | null;
  gatsbyImageData: IGatsbyImageData;
}

declare interface ICategory {
  name: string;
  type: string;
}

declare interface ISlug {
  current: string;
}

declare interface Nodes<T> {
  nodes: T[];
}

declare interface IPost {
  title: string;
  thumbnail: {
    asset: IImage;
  };
  slug: ISlug;
  category: ICategory[];
}

declare interface ISagas extends IPost {
  summary: string;
  date: string;
  _rawBody: any;
  gallery: {
    asset: IImage;
  }[];
}

export declare interface ISagaPost {
  pageContext: ISagas;
}

export declare interface IPortfolioPost {
  pageContext: ISagas;
}

interface IPageProps extends PageProps {
  pageContext: {
    humanPageNumber: number;
    limit: number;
    nextPagePath: string;
    numberOfPages: number;
    pageNumber: number;
    previousPagePath: string;
    skip: number;
  };
}

export declare interface ISagaPage extends IPageProps {
  data: {
    sagas: Nodes<ISagas>;
    category: Nodes<ICategory>;
  };
}

export declare interface IPortfolioPage extends IPageProps {
  data: {
    portfolio: Nodes<IPost>;
    category: Nodes<ICategory>;
  };
}