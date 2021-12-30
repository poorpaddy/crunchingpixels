export interface ICards {
  title: string;
  avatar: {
    color: string;
    image: { src: string; altText: string };
  };
  posts: {
    title: string;
    slug: {
      current: string;
    };
  }[];
}
