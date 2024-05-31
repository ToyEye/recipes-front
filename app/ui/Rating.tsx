"use client";

import React from "react";
import RatingStars from "react-rating-stars-component";
import { useRecipe } from "../store/store";

const Rating = ({ rating = 0, size = 24, id = "" }) => {
  const { changeVote } = useRecipe();

  const ratingChanged = (newRating: number) => {
    changeVote(id, newRating);
    // try {
    //   console.log(typeof newRating);
    // } catch (error) {
    //   console.error("Error changing vote", error);
    // }
  };

  return (
    <RatingStars
      count={5}
      value={rating}
      size={size}
      activeColor="#F87719"
      onChange={ratingChanged}
    />
  );
};

export default Rating;
