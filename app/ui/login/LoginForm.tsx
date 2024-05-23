"use client";

import { useFormik } from "formik";

import Label from "../Label";
import Input from "../Input";
import Button from "../Button";

import { loginSchema } from "@/app/lib/validation/authSchema";
import { signin } from "@/app/apiServise/userAPI";
import toast from "react-hot-toast";
import { useStore } from "@/app/store/store";

const LoginForm = () => {
  const { updateAuth } = useStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const newUser = await signin(values);
        updateAuth(newUser);
        toast.success(`Welcome back,  ${newUser.user.name}`);
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label text="Email" as="primary" id="email" />
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            aria="input for enter email"
            as="primary"
          />
        </div>
        <div className="mb-4">
          <Label text="Password" as="primary" id="password" />
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            aria="input for enter password"
            as="primary"
          />
        </div>

        <Button text="Login" type="submit" as="primary" />
      </form>
    </div>
  );
};

export default LoginForm;
