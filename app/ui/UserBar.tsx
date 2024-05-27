"use client";

import React from "react";
import { useStore } from "../store/store";
import Button from "./Button";

const UserBar = () => {
  const { user, logoutUser } = useStore();

  return (
    <>
      <p>{user.name}</p>
      <Button text="Logout" as="primary" type="button" onClick={logoutUser} />
    </>
  );
};

export default UserBar;
