"use client";

import React from "react";
import { useStore } from "../store/store";
import Button from "./Button";

const UserBar = () => {
  const { user } = useStore();

  return (
    // <div className="hidden lg:flex">
    <>
      <p>{user.name}</p>
      <Button text="Logout" as="primary" type="button" />
    </>
    // </div>
  );
};

export default UserBar;
