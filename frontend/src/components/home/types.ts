export interface ICards {
  title: string;
  avatar: {
    color: string;
    image: { src: string; altText: string };
  };
  points: string[];
}
