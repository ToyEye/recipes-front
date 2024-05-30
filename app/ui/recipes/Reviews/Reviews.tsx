"use client";

import { useEffect } from "react";

import Heading from "../../Heading";
import Section from "../../Section";

import AddReviewForm from "./AddReviewForm";
import { useReviews } from "@/app/store/store";

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
          {reviews?.map(({ id, description, author }) => (
            <li key={id} className="border-b-2 last:border-none py-4">
              <div className="flex gap-4 items-center mb-4">
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#cdcccc]">
                  {author.slice(0, 1)}
                </div>
                <Heading text={author} className=" text-2xl tracking-wider" />
              </div>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Heading text="No reviews on this recipe" />
      )}
    </Section>
  );
};

export default Reviews;