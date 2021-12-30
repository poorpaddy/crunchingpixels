import { PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IImage {
  altText: string | null;
  gatsbyImageData: IGatsbyImageData;
}
declare interface ISlug {
  current: string;
}

declare interface ICategory {
  name: string;
  type: string;
  slug: ISlug;
}

declare interface Nodes<T> {
  nodes: T[];
}

export interface ITab {
  name: string;
  slug: string;
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
    categories: Nodes<ICategory>;
  };
}

export declare interface IPortfolioPage extends IPageProps {
  data: {
    portfolio: Nodes<IPost>;
    categories: Nodes<ICategory>;
  };
}

export declare interface IHomePage {
  data: {
    homePage: {
      title: string;
      description: string;
    };
    funStuff: Nodes<{
      title: string;
      slug: {
        current: string;
      };
    }>;
    thinkTank: Nodes<{
      title: string;
      slug: {
        current: string;
      };
    }>;
    portfolio: Nodes<{
      title: string;
      slug: {
        current: string;
      };
    }>;
  };
}
