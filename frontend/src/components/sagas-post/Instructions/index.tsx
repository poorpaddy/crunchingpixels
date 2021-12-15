import React from "react";
import lasagna from "@images/sagas-post/lasagna.jpg";

const Instructions = () => {
  const instructions = [
    "Cook beef in a large skillet over medium heat, stirring until it: crumbles and is no longer pink drain. Stir in pasta sauce.",
    "Spread one-third of meat sauce in a lightly greased 11- x 7-inch baking dish; layer with 3 noodles and half each of ricotta cheese and mozzarella cheese. (The ricotta cheese layers will be thin.) Repeat procedure; spread remaining one-third of meat sauce over mozzarella cheese. Slowly pour 1/4 cup hot water around inside edge of dish.Tightly cover baking dish with 2 layers of heavy-duty aluminum foil.",
    "Bake at 375° for 45 minutes; uncover and bake 10 more minutes. Let stand 10 minutes before serving.",
  ];
  return (
    <div className="mt-[18px]">
      <h3 className="text-primary text-xl">Instructions</h3>
      <ol className="list-decimal px-5 mt-4 leading-6 font-roboto text-sm">
        {instructions.map((instruction, i) => (
          <li key={i} className="px-[5px]">
            {instruction}
          </li>
        ))}
      </ol>
      <p className="text-sm font-roboto mt-4 mb-6">
        Original recipe from: &ensp;
        <a
          className="underline text-primary"
          href="https://www.allrecipes.com/recipe/extra-easy-lasagna/"
        >
          https://www.allrecipes.com/ recipe/extra-easy-lasagna/
        </a>
      </p>
      <img src={lasagna} alt="" />
    </div>
  );
};

export default Instructions;
