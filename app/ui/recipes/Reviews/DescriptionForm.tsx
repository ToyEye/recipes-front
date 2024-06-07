import { useFormik } from "formik";

import Button from "../../Button";

import { reviewSchema } from "@/app/lib/validation/reviewSchema";
import { TUser } from "@/app/types/types";

type Props = {
  handler: (args: string) => void;
  user: TUser;
  btnText: string;
  defaultValue?: string;
};

const DescriptionForm = ({
  handler,
  user,
  btnText,
  defaultValue = "",
}: Props) => {
  const formik = useFormik({
    initialValues: { description: "" },
    validationSchema: reviewSchema,
    onSubmit: ({ description }, action) => {
      if (user.name) {
        handler(description);
        action.resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 mb-6">
      <textarea
        placeholder="Enter review"
        name="description"
        id="description"
        defaultValue={defaultValue}
        className="resize-none h-28 p-4 transition-all bg-gray-100 rounded-md border border-transparent outline-none hover:border-gray-300"
        onChange={formik.handleChange}
      ></textarea>
      {formik.errors.description && formik.touched.description && (
        <p className="text-sm text-red-500 font-medium">
          {formik.errors.description}
        </p>
      )}
      <div>
        <Button text={btnText} type="submit" as="secondary" />
      </div>
    </form>
  );
};

export default DescriptionForm;
