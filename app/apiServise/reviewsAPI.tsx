import axios from "axios";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

export const getReviewsByRecipe = async (id: string) => {
  const { data } = await axios.get(`/reviews/${id}`);
  return data;
};
