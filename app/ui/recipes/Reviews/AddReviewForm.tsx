import Heading from "../../Heading";
import { useReviews, useStore } from "@/app/store/store";
import DescriptionForm from "./DescriptionForm";

const AddReviewForm = ({ recipeId }: { recipeId: string }) => {
  const { user } = useStore();
  const { addReview } = useReviews();

  const addReviewHandler = (description: string) => {
    if (user.name) {
      addReview({ description, author: user.name, _id: recipeId });
    }
  };

  return (
    <>
      <Heading text="Your review" className="text-2xl mb-2 " />

      <DescriptionForm
        handler={addReviewHandler}
        user={user}
        btnText="Add review"
      />
    </>
  );
};

export default AddReviewForm;
