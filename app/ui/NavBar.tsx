"use client";

import { navLinks, authLinks } from "@/app/lib/navLinks";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useStore } from "../store/store";
import UserBar from "./UserBar";

type Props = {
  location: "header" | "modalMenu" | "footer";
  isOpenMenu?: boolean;
};

const NavBar = ({ location, isOpenMenu }: Props) => {
  const { user } = useStore();

  const navStyle = clsx(
    {
      "hidden lg:flex lg:items-center lg:gap-[30px] space-x-4":
        location === "header",
    },
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
    },
    {
      "grid-cols-2 md:grid-cols-2": location === "footer" && user.name,
    }
  );

  const userStyle = clsx(
    "gap-[10px] ml-0 items-center",
    {
      "absolute top-[10px] right-[10px] ml-0 flex items-center gap-[10px]":
        location === "modalMenu",
    },
    {
      flex: location === "header",
    },
    {
      hidden: location === "footer",
    }
  );

  return (
    <nav className={navStyle}>
      <ul className={navListStyle}>
        {navLinks.map(({ id, link, text }) => (
          <li key={id}>
            <Link className="hover:text-gray-400  " href={link}>
              {text}
            </Link>
          </li>
        ))}
        {!user.name &&
          authLinks.map(({ id, link, text }) => (
            <li key={id}>
              <Link className="hover:text-gray-400 " href={link}>
                {text}
              </Link>
            </li>
          ))}
      </ul>
      {user.name && (
        <div className={userStyle}>
          <UserBar />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
// position: absolute;
//     top: 10px;
//     right: 10px;
//     margin-left: 0;
//     display: flex;
//     align-items: center;
//     gap: 10px;
