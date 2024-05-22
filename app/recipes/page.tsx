import React from "react";
import SearchRecipe from "../ui/recipes/SearchRecipe";
import Hero from "../ui/home/Hero";
import RandomRecipe from "../ui/recipes/RandomRecipe";

const Recipes = () => {
  return (
    <main>
      <Hero />
      <RandomRecipe />
      <SearchRecipe />
    </main>
  );
};

export default Recipes;
