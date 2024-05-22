import clsx from "clsx";
import React from "react";

type Props = {
  as: string;
  text: string;
  type: "submit" | "button";
};

const Button = ({ as, text, type }: Props) => {
  const styles = clsx(
    "font-bold py-2 px-4 rounded transition-all duration-300 hover:scale-110",
    {
      "bg-[#111827]  hover:bg-blue-600  text-white": as === "primary",
    },
    {
      "  bg-transparent  text-[#111827] border-2 rounded-md border-[#111827]":
        as === "secondary",
    }
  );

  return (
    <button className={styles} type={type}>
      {text}
    </button>
  );
};

export default Button;
