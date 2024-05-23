"use client";

import React from "react";
import { useFormik } from "formik";

import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

import { sighupSchema } from "@/app/lib/validation/authSchema";
import { signup } from "@/app/apiServise/userAPI";
import toast from "react-hot-toast";
import { useStore } from "@/app/store/store";

const RegisterForm = () => {
  const { updateAuth } = useStore();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: sighupSchema,
    onSubmit: async (values) => {
      try {
        const newUser = await signup(values);
        updateAuth(newUser);
        toast.success(`Welcome, ${newUser.user.name}`);
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label text="Name" as="primary" id="name" />
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            aria="input for enter name"
            as="primary"
          />
        </div>
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
        <div className="mb-4">
          <Label text="Confirm Password" as="primary" id="confirmPassword" />
          <Input
            id="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            aria="input for enter confirm password"
            as="primary"
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p>{formik.errors.confirmPassword}</p>
          )}
        </div>
        <Button text="Register" type="submit" as="primary" />
      </form>
    </div>
  );
};

export default RegisterForm;
