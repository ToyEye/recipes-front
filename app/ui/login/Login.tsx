import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Section>
      <div className="container mx-auto">
        <Heading className="text-3xl font-bold mb-4 text-center" text="Login" />
        <LoginForm />
      </div>
    </Section>
  );
};

export default Login;
