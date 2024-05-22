"use client";

import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";

import mutation from "@/graphql/mutations";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

import { sighupSchema } from "@/app/lib/validation/authSchema";

const RegisterForm = () => {
  const [signUp] = useMutation(mutation.SIGNUP);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: sighupSchema,
    onSubmit: async (values) => {
      const { data } = await signUp({
        variables: values,
      });

      await localStorage.setItem("token", data?.signup.token);
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
