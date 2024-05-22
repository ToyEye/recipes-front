import React from "react";

import Image from "next/image";

import Heading from "@/app/ui/Heading";
import Section from "@/app/ui/Section";
import Rating from "@/app/ui/Rating";

type Props = {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string;
  vote_average: number;
  id: string;
};

const RecipeCard = ({
  name,
  description,
  img,
  ingredients,
  instructions,
  vote_average,
  id,
}: Props) => {
  const defaultImg = "https://generated.vusercontent.net/placeholder.svg";
  const backImg =
    "https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes";

  return (
    <Section>
      <Heading text={name} className="text-3xl font-bold mb-4 md:text-4xl" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Image
          src={!img ? defaultImg : backImg + img}
          alt={name}
          className="w-full md:w-[720px] lg:w-[660px] object-contain rounded-2xl   "
          height={250}
          width={400}
        />

        <div>
          <div className="flex items-center mb-4">
            <Rating rating={vote_average} id={id} />
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              4.2
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>1 lb ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>1 can (28 oz) crushed tomatoes</li>
            <li>1 tsp dried oregano</li>
            <li>Salt and pepper to taste</li>
            <li>1 lb spaghetti</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>
              In a large skillet, cook the ground beef over medium-high heat
              until browned and crumbled, 5-7 minutes.
            </li>
            <li>
              Add the onion and garlic and cook until softened, about 3 minutes.
            </li>
            <li>
              Stir in the crushed tomatoes, oregano, salt, and pepper. Simmer
              for 15-20 minutes.
            </li>
            <li>
              Meanwhile, cook the spaghetti according to package instructions.
              Drain and serve with the Bolognese sauce.
            </li>
          </ol>
          <div className="flex items-center mb-4">
            {/* <Image
              alt="Author"
              className="rounded-full mr-2"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            /> */}
            <div>
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">Author</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RecipeCard;
