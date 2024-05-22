"use client";

import React, { useState } from "react";

import SearchByCountry from "./SearchByCountry";

import RecipeList from "./recipe/RecipeList";
import Section from "../Section";
import useSearch from "@/app/hooks/useSearch";

const SearchRecipe = () => {
  const [country, setCountry] = useState("");

  const { countries, loading } = useSearch(country);

  const findCountry = (country: string) => {
    setCountry(country);
  };
  console.log(countries);
  return (
    <Section>
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">Explore Recipes</h2>
        <SearchByCountry findCountry={findCountry} />

        <RecipeList data={countries} itemCount={9} loading={loading} />
      </div>
    </Section>
  );
};

export default SearchRecipe;
