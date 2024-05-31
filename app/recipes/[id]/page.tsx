"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import RecipeCard from "@/app/ui/recipes/recipe/RecipeCard";
import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";
import { getRecipeById } from "@/app/apiServise/recipesAPI";

import { TRecipe } from "@/app/types/types";
import Reviews from "@/app/ui/recipes/Reviews/Reviews";

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

  return (
    <main>
      {recipe && <RecipeCard {...recipe} />}
      {!recipe && <RecipeDetailsSkeleton />}

      <Reviews id={params.id} />
    </main>
  );
};

export default Recipe;
