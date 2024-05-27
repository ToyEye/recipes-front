"use client";

import React from "react";

import { useStore } from "@/app/store/store";

import { usePathname, redirect } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useStore();

  const pathname = usePathname();

  const hasAccess =
    Boolean(pathname === "/register" && user.name) ||
    Boolean(pathname === "/login" && user.name);

  useEffect(() => {
    if (hasAccess) {
      redirect("/recipes");
    }
  }, [hasAccess]);

  return <>{children}</>;
};

export default AuthLayout;
