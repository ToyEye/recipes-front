import React from "react";
import { useFormik } from "formik";

import Heading from "../../Heading";
import Button from "../../Button";
import { useStore } from "@/app/store/store";

const AddReviewForm = ({ recipeId }: { recipeId: string }) => {
  const { user } = useStore();

  const formik = useFormik({
    initialValues: { description: "" },
    onSubmit: ({ description }) => {
      console.log({ description, author: user.name, recipeId });
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
          className="resize-none  h-28 p-4 bg-gray-100 "
          onChange={formik.handleChange}
        ></textarea>
        <div>
          <Button text="Add review" type="submit" as="secondary" />
        </div>
      </form>
    </>
  );
};

export default AddReviewForm;
