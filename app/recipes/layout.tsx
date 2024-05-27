import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Recipe list",
};

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
