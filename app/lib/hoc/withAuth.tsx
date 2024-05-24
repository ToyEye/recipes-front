"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, ComponentType, ReactElement, ReactNode } from "react";

import { useStore } from "@/app/store/store";

const withAuth = (WrappedComponent: ComponentType): ComponentType => {
  const AuthComponent = (): ReactElement => {
    const { user } = useStore();
    const router = useRouter();
    const pathname = usePathname();

    const hasAccess =
      (pathname === "/register" && user.name) ||
      (pathname === "/login" && user.name);

    useEffect(() => {
      if (!hasAccess) {
        router.replace("/");
      }
    }, [router, hasAccess]);

    return <WrappedComponent />;
  };

  return AuthComponent;
};

export default withAuth;
