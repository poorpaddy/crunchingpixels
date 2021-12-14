import Container from "../../layout/Container";
import React from "react";

interface IProps {
  title: string;
  avatarColor: string;
  avatarImage: SVGAElement;
  content: string[];
}

const Card: React.FC<IProps> = ({
  title,
  avatarColor,
  avatarImage,
  content,
}) => {
  return (
    <div className=" pt-16">
      <Container>
        <div className=" text-center pt-14 px-6 bg-white pb-1 rounded-lg relative">
          <div
            className={`${avatarColor} rounded-full w-28 h-28 absolute left-[50%] top-[0%] translate-x-[-50%] translate-y-[-50%]`}
          >
            <img src={avatarImage} />
          </div>
          <div>
            <h1 className=" text-2xl text-secondary my-7 font-semibold">
              {title}
            </h1>
            <ul className="text-left">
              {content.map((l, idx) => (
                <li
                  key={idx}
                  className=" text-sm text-secondary py-4 border-t-2 border-gray-200"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
