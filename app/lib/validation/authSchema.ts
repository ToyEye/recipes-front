import * as Yup from "yup";

export const sighupSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Enter a correct email")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a correct email")
    .required("Please enter email"),
  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),
});
