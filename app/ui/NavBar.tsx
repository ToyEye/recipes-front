import { navLinks } from "@/app/lib/navLinks";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  location: "header" | "modalMenu" | "footer";
  isOpenMenu?: boolean;
};

const NavBar = ({ location, isOpenMenu }: Props) => {
  const navStyle = clsx(
    { "hidden lg:block space-x-4": location === "header" },
    {
      "space-x-4 transition-all lg:hidden absolute top-1 -left-full w-1/2 h-1/2 bg-gray-900 border border-gray-400 rounded-md flex justify-center items-center ":
        location === "modalMenu",
    },
    { "left-0 ": isOpenMenu && location === "modalMenu" }
  );

  const navListStyle = clsx(
    "flex gap-4",
    {
      "flex-col items-center": location === "modalMenu",
    },
    {
      "grid grid-cols-2 mb-8 justify-items-center md:grid-cols-4":
        location === "footer",
    }
  );

  return (
    <nav className={navStyle}>
      <ul className={navListStyle}>
        {navLinks.map(({ id, link, text }) => (
          <li key={id}>
            <Link className="hover:text-gray-400 " href={link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
