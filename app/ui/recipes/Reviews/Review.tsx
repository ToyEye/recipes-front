import React, { useState } from "react";
import Heading from "../../Heading";
import { useReviews, useStore } from "@/app/store/store";
import { MdDelete, MdEdit, MdOutlineCancel } from "react-icons/md";

import Button from "../../Button";
import { TReview } from "@/app/types/types";
import { useFormik } from "formik";
import { reviewSchema } from "@/app/lib/validation/reviewSchema";

const Review = ({ _id: id, description, author, owner }: TReview) => {
  const [isEdit, setIsEdit] = useState(false);
  const { error, loading, deleteReview, changeDescriprion } = useReviews();
  const { user } = useStore();

  const formik = useFormik({
    initialValues: { description },
    validationSchema: reviewSchema,
    onSubmit: ({ description }, action) => {
      if (user.name) {
        changeDescriprion(id, description);
        setIsEdit(false);
        action.resetForm();
      }
    },
  });

  return (
    <li key={id} className="border-b-2 last:border-none py-4 relative">
      <div className="flex gap-4 items-center mb-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#cdcccc]">
          {author.slice(0, 1)}
        </div>
        <Heading text={author} className=" text-2xl tracking-wider" />
      </div>
      {isEdit ? (
        <div className="relative">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 mb-6"
          >
            <textarea
              placeholder="Enter review"
              name="description"
              id="description"
              defaultValue={description}
              className="resize-none h-28 p-4 transition-all bg-gray-100 rounded-md border border-transparent outline-none hover:border-gray-300"
              onChange={formik.handleChange}
            ></textarea>
            {formik.errors.description && formik.touched.description && (
              <p className="text-sm text-red-500 font-medium">
                {formik.errors.description}
              </p>
            )}
            <div>
              <Button text="Edit review" type="submit" as="secondary" />
            </div>
          </form>
          <Button
            text={<MdOutlineCancel />}
            type="button"
            onClick={() => setIsEdit(false)}
            className="absolute top-2 right-2"
          />
        </div>
      ) : (
        <>
          <p>{description}</p>

          {owner === user.id && (
            <div className="absolute top-[60px] right-2">
              <Button
                text={<MdDelete />}
                type="button"
                onClick={() => deleteReview(id)}
              />
              <Button
                text={<MdEdit />}
                type="button"
                onClick={() => setIsEdit(true)}
              />
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default Review;
