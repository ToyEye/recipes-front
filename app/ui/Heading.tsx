import React from "react";

interface IHeading {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  type?: string;
  className?: string;
}

const Heading = ({ text, tag = "h2", type, className }: IHeading) => {
  const Tag = tag;
  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
