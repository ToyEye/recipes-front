"use client";

import { useEffect } from "react";

import RecipeCard from "@/app/ui/recipes/recipe/RecipeCard";
import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";

import Reviews from "@/app/ui/recipes/Reviews/Reviews";
import { useRecipe } from "@/app/store/store";

const Recipe = ({ params }: { params: { id: string } }) => {
  const { recipe, getRecipe } = useRecipe();

  useEffect(() => {
    getRecipe(params.id);
  }, [getRecipe, params.id]);

  return (
    <main>
      {recipe && <RecipeCard {...recipe} />}
      {!recipe && <RecipeDetailsSkeleton />}

      <Reviews id={params.id} />
    </main>
  );
};

export default Recipe;
