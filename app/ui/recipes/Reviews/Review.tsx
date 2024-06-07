import { useState } from "react";
import { MdDelete, MdEdit, MdOutlineCancel } from "react-icons/md";

import Heading from "../../Heading";
import Button from "../../Button";
import DescriptionForm from "./DescriptionForm";

import { useReviews, useStore } from "@/app/store/store";
import { TReview } from "@/app/types/types";

const Review = ({ _id: id, description, author, owner }: TReview) => {
  const [isEdit, setIsEdit] = useState(false);
  const { error, loading, deleteReview, changeDescriprion } = useReviews();
  const { user } = useStore();

  const changeDescriprionHandler = (description: string) => {
    if (user.name) {
      changeDescriprion(id, description);
      setIsEdit(false);
    }
  };

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
          <DescriptionForm
            handler={changeDescriprionHandler}
            user={user}
            btnText="Edit review"
            defaultValue={description}
          />

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
