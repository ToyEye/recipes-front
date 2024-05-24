import axios from "axios";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

export const getRecipes = async (page: number) => {
  const { data } = await axios.get(`/recipes?page=${page}&per_page=9`);
  return data;
};

export const getRandomRecipes = async () => {
  const { data } = await axios.get("/recipes/random");
  return data;
};

export const getRecipeById = async (id: string) => {
  const { data } = await axios.get(`/recipes/country/${id}`);
  return data;
};

export const getRecipeByCountry = async (country: string, page: number) => {
  const { data } = await axios.get(
    `/recipes/countries/${country}?page=${page}&per_page=9`
  );
  return data;
};
