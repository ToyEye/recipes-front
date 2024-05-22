"use client";

import React from "react";
import RatingStars from "react-rating-stars-component";

const Rating = ({ rating = 0, size = 24, id = "" }) => {
  const ratingChanged = async (newRating: number) => {
    try {
      console.log("Vote changed successfully");
    } catch (error) {
      console.error("Error changing vote", error);
    }
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
