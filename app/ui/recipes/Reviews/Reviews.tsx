"use client";

import React, { useEffect, useState } from "react";

import Heading from "../../Heading";
import Section from "../../Section";

import { getReviewsByRecipe } from "@/app/apiServise/reviewsAPI";
import { TReview } from "@/app/types/types";

const Reviews = ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<null | [TReview]>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const reviews = await getReviewsByRecipe(id);

        setReviews(reviews);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <Section>
      <Heading
        text="Reviews"
        tag="h2"
        className="text-2xl font-medium mb-4 md:text-3xl"
      />
      {reviews ? (
        <ul className="flex flex-col gap-6">
          {reviews.map(({ id, description, author }) => (
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
