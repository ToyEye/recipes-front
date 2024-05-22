"use client";

import React from "react";
import RatingStars from "react-rating-stars-component";

import mutation from "@/graphql/mutations";
import { useMutation } from "@apollo/client";

const Rating = ({ rating = 0, size = 24, id = "" }) => {
  const [changeVoteMutation] = useMutation(mutation.CHANGEVOTE);

  const ratingChanged = async (newRating: number) => {
    try {
      const { data } = await changeVoteMutation({
        variables: { id, newVote: newRating.toString() },
      });

      console.log("Vote changed successfully", data);
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
