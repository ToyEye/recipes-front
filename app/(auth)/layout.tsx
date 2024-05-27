import type { Metadata } from "next";
import AuthLayout from "./AuthLayout";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth to ricpe site",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
