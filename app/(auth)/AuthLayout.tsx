"use client";

import React from "react";

import { useStore } from "@/app/store/store";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useStore();
  const router = useRouter();
  const pathname = usePathname();
  const hasAccess =
    (pathname === "/register" && user.name) ||
    (pathname === "/login" && user.name);

  useEffect(() => {
    if (!hasAccess) {
      router.push("/recipe");
    }
  }, [hasAccess, router]);

  return <>{children}</>;
};

export default AuthLayout;
