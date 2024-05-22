import React from "react";
import Container from "../../app/ui/Container";
import clsx from "clsx";

const Section = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  const style = clsx("py-12 md:py-24 h-full", {
    "bg-gray-100": type === "hero",
  });
  return (
    <section className={style}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
