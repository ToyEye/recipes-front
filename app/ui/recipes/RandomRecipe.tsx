"use client";

import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import RecipeList from "./recipe/RecipeList";
import Section from "../Section";

const RandomRecipe = () => {
  const { data, error, loading } = useQuery(queries.GET_RANDOM_RECIPES);
  return (
    <Section>
      <RecipeList
        data={data?.getRandomRecipes}
        itemCount={3}
        loading={loading}
      />
    </Section>
  );
};

export default RandomRecipe;
