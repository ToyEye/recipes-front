import clsx from "clsx";
import React from "react";

type Props = { text: string; as: string; id: string };

const Label = ({ text, as, id }: Props) => {
  const style = clsx({
    "block text-gray-700 font-bold mb-2": as === "primary",
  });

  return (
    <label htmlFor={id} className={style}>
      {text}
    </label>
  );
};

export default Label;
