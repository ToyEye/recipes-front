import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const getRecipes = async () => {
  const { data } = await axios.get("/recipes");
  return data;
};

export const getRandomRecipes = async () => {
  const { data } = await axios.get("/recipes/random");
  return data;
};

export const getRecipeById = async (id: string) => {
  const { data } = await axios.get(`/country/${id}`);
  return data;
};

export const getRecipeByCountry = async (country: string) => {
  const { data } = await axios.get(`/country/${country}`);
  return data;
};
