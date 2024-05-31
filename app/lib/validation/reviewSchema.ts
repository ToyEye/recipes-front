import * as Yup from "yup";

export const reviewSchema = Yup.object().shape({
  description: Yup.string().min(4).max(400).required("Please leave a review "),
});
