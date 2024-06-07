import axios from "axios";
import { TReview } from "../types/types";

axios.defaults.baseURL = "https://recipes-server-83pi.onrender.com/api";

export const getReviewsByRecipe = async <T,>(id: T) => {
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

export const deleteReviewForRecipe = async <T,>(id: T) => {
  await axios.delete(`/reviews/${id}`);
};

export const changeDescription = async <T,>(id: T, description: T) => {
  const { data } = await axios.patch(`/reviews/${id}/description`, {
    description,
  });

  console.log(data);

  return data;
};
