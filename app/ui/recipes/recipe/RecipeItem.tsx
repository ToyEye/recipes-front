import Image from "next/image";
import React from "react";

import Link from "next/link";
import Heading from "../../Heading";
import Rating from "../../Rating";

interface IRecipeItem {
  img: string;
  id: string;
  vote_average: number;
  name: string;
  description: string;
}

const RecipeItem = ({
  img,
  id,
  vote_average,
  name,
  description,
}: IRecipeItem) => {
  const defaultImg = "https://generated.vusercontent.net/placeholder.svg";
  const backImg =
    "https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes";

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden" key={id}>
      <Image
        src={!img ? defaultImg : backImg + img}
        alt={`Recipe ${name}`}
        className="w-full h-48 object-cover"
        height={250}
        style={{
          aspectRatio: "400/250",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="p-4">
        <Heading className="text-xl font-bold mb-2" text={name} />
        <div className="flex items-center mb-2">
          <Rating rating={vote_average} id={id} />
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {vote_average}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
        <Link
          className="text-blue-500 hover:text-blue-700"
          href={`/recipes/${id}`}
        >
          View Recipe
        </Link>
      </div>
    </li>
  );
};

export default RecipeItem;
