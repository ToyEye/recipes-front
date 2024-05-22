"use client";

import RecipeDetailsSkeleton from "@/app/lib/skeletons/RecipeDetailsSkeleton";
import RecipeCard from "@/app/ui/recipes/recipe/RecipeCard";

import clsx from "clsx";
import React from "react";

const Recipe = ({ params }: { params: { id: string } }) => {
  // const style = clsx({ "lg:h-desc-calc" });

  return (
    <main>
      {/* {data && <RecipeCard {} />}
      {loading && <RecipeDetailsSkeleton />} */}
    </main>
  );
};

export default Recipe;
