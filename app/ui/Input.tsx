import clsx from "clsx";
import React, { ChangeEventHandler } from "react";

type Props = {
  id: string;
  placeholder: string;
  aria: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  as: string;
  value: string;
};

const Input = ({ id, placeholder, aria, type, onChange, value, as }: Props) => {
  const style = clsx({
    "w-full px-3 py-2 border border-gray-300 rounded-md": as === "primary",
  });

  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        aria-label={aria}
        type={type}
        onChange={onChange}
        value={value}
        className={style}
      />
    </>
  );
};

export default Input;
