import axios from "axios";
import { TReview } from "../types/types";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

export const getReviewsByRecipe = async (id: string) => {
  const { data } = await axios.get(`/reviews/${id}`);
  return data;
};

export const addReviewForRecipe = async (credential: TReview) => {
  const { data } = await axios.post(`/reviews`, {
    author: credential.author,
    description: credential.description,
    recipeId: credential._id,
  });
  return data;
};

export const deleteReviewForRecipe = async (id: string) => {
  await axios.delete(`/reviews/${id}`);
};
