"use client";

import { useEffect, useState } from "react";
import { getRecipeByCountry, getRecipes } from "../apiServise/recipesAPI";

const useSearch = <T,>(country: T) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getAllCountriesData = async () => {
      setLoading(true);
      try {
        if (!country) {
          const data = await getRecipes(page);
          setCountries(data);
        } else {
          const data = await getRecipeByCountry(country as string, page);
          setCountries(data);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getAllCountriesData();
  }, [country, page]);

  return { setPage, setLoading, countries, setError, error, loading };
};

export default useSearch;
