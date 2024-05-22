"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import RecipeCard from "@/app/ui/recipes/recipe/RecipeCard";
import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";
import { getRecipeById } from "@/app/apiServise/recipesAPI";

import { TRecipe } from "@/app/types/types";

const Recipe = ({ params }: { params: { id: string } }) => {
  const [recipe, setRecipe] = useState<null | TRecipe>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const recipe = await getRecipeById(params.id);
        setRecipe(recipe);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [params.id]);

  const style = clsx({ "lg:h-desc-calc": !recipe });

  return (
    <main className={style}>
      {recipe && <RecipeCard {...recipe} />}
      {!recipe && <RecipeDetailsSkeleton />}
    </main>
  );
};

export default Recipe;
