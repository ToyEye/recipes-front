"use client";

import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";
import RecipeCard from "@/app/ui/recipes/recipe/RecipeCard";

import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import clsx from "clsx";
import React from "react";

const Recipe = ({ params }: { params: { id: string } }) => {
  const { data, loading } = useQuery(queries.GET_RECIPE_BY_ID, {
    variables: { id: params.id },
  });

  const style = clsx({ "lg:h-desc-calc": loading });

  console.log(data?.recipe);
  return (
    <main className={style}>
      {data && <RecipeCard {...data?.recipe} />}
      {loading && <RecipeDetailsSkeleton />}
    </main>
  );
};

export default Recipe;
