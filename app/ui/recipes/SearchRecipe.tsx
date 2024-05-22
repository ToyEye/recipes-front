"use client";

import React, { useState } from "react";

import SearchByCountry from "./SearchByCountry";

import { useSearch } from "@/app/hooks/useSearch";
import RecipeList from "./recipe/RecipeList";
import Section from "../Section";

const SearchRecipe = () => {
  const [country, setCountry] = useState("");

  const { data, loading } = useSearch(country);

  const getCountry = (country: string) => {
    setCountry(country);
  };

  return (
    <Section>
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Explore Recipes</h2>
        <SearchByCountry getCountry={getCountry} />

        <RecipeList data={data} itemCount={9} loading={loading} />
      </div>
    </Section>
  );
};

export default SearchRecipe;
