import React from "react";
import { useFormik } from "formik";

import Heading from "../../Heading";
import Button from "../../Button";
import { useReviews, useStore } from "@/app/store/store";
import { reviewSchema } from "@/app/lib/validation/reviewSchema";

const AddReviewForm = ({ recipeId }: { recipeId: string }) => {
  const { user } = useStore();
  const { addReview } = useReviews();

  const formik = useFormik({
    initialValues: { description: "" },
    validationSchema: reviewSchema,
    onSubmit: ({ description }) => {
      if (user.name) {
        addReview({ description, author: user.name, id: recipeId });
      }
    },
  });

  return (
    <>
      <Heading text="Your review" className="text-2xl mb-2 " />
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 mb-6">
        <textarea
          placeholder="Enter review"
          name="description"
          id="description"
          className="resize-none h-28 p-4 transition-all bg-gray-100 rounded-md border border-transparent outline-none hover:border-gray-300"
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.description && formik.touched.description && (
          <p className="text-sm text-red-500 font-medium">
            {formik.errors.description}
          </p>
        )}
        <div>
          <Button text="Add review" type="submit" as="secondary" />
        </div>
      </form>
    </>
  );
};

export default AddReviewForm;
