import React from "react";

import RegisterForm from "./RegisterForm";
import Section from "../Section";
import Heading from "../Heading";

const Register = () => {
  return (
    <Section type="hero">
      <div className="container mx-auto">
        <Heading
          className="text-3xl font-bold mb-4 text-center"
          text="Register"
        />
        <RegisterForm />
      </div>
    </Section>
  );
};

export default Register;
