"use client";

import React from "react";

import RecipeItemSkeleton from "@/app/lib/skeletons/RecipeItemSkeleton";
import RecipeItem from "./RecipeItem";

type TRecipe = {
  id: string;
  name: string;
  description: string;
  img: string;
  vote_average: number;
};

type Props = {
  data: TRecipe[];
  itemCount: number;
  loading: boolean;
};

const RecipeList = ({ data, itemCount, loading }: Props) => {
  return (
    <>
      <ul className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {loading ? (
          Array(itemCount)
            .fill(null)
            .map((d, i) => <RecipeItemSkeleton key={i} />)
        ) : (
          <>
            {data.map(
              ({ id, name, description, img, vote_average }: TRecipe) => {
                return (
                  <RecipeItem
                    key={id}
                    img={img}
                    id={id}
                    name={name}
                    description={description}
                    vote_average={vote_average}
                  />
                );
              }
            )}
          </>
        )}
      </ul>
    </>
  );
};

export default RecipeList;
