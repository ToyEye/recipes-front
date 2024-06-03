import clsx from "clsx";

const Text = ({
  text,
  as,
  className,
}: {
  text: string;
  as: string;
  className?: string;
}) => {
  const style = clsx({ "": as === "primary" });

  return <p className={style + className}>{text}</p>;
};

export default Text;
