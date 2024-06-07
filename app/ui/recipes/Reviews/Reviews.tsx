"use client";

import { useEffect } from "react";

import Heading from "../../Heading";
import Section from "../../Section";

import AddReviewForm from "./AddReviewForm";

import { useReviews } from "@/app/store/store";
import Review from "./Review";

const Reviews = ({ id }: { id: string }) => {
  const { reviews, getReviews, error, loading } = useReviews();

  useEffect(() => {
    getReviews(id);
  }, [getReviews, id]);

  return (
    <Section>
      <AddReviewForm recipeId={id} />
      <Heading
        text="Reviews"
        tag="h2"
        className="text-2xl font-medium mb-4 md:text-3xl"
      />
      {reviews && reviews?.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {reviews?.map((review) => (
            <Review key={review._id} {...review} />
          ))}
        </ul>
      ) : (
        <Heading text="No reviews on this recipe" />
      )}
    </Section>
  );
};

export default Reviews;
