import clsx from "clsx";
import React from "react";

type Props = {
  as?: string;
  text: string | React.ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
  className?: string;
};

const Button = ({ as, text, type, onClick, className = "" }: Props) => {
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
    <button className={styles + " " + className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
