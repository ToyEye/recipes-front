import React from "react";
import RecipeList from "./recipe/RecipeList";
import Section from "../Section";
import { getRandomRecipes } from "@/app/apiServise/apiServise";

const RandomRecipe = async () => {
  const country = await getRandomRecipes();

  return (
    <Section>
      <RecipeList data={country} itemCount={3} />
    </Section>
  );
};

export default RandomRecipe;
