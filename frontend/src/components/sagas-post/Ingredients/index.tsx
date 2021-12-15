import React from "react";

const Ingredients = () => {
  const ingredients = [
    "1 pound lean ground beef",
    " 4 cups tomato-basil pasta sauce",
    "6 uncooked lasagna noodles",
    "1 (15-ounce) container ricotta cheese",
    "2 1/2 cups (10 ounces) shredded mozzarella cheese",
    "1/4 cup hot water",
    "1/4 cup Parmesan cheese",
    "1 Tbsp of Italian seasoning",
  ];
  return (
    <div className="mt-[18px]">
      <h3 className="text-primary text-xl">Ingredients</h3>
      <ul className="list-disc px-5 mt-4 leading-6 font-roboto text-sm">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
