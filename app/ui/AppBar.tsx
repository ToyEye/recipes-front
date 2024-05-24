"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

import { useStore } from "../store/store";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("/");
  const { getCurrentUser } = useStore();

  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== path) {
      setIsMenuOpen(false);
    }
    setPath(pathname);
  }, [path, pathname]);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold" href="#">
          Recipe Collection
        </Link>
        <button className="lg:hidden cursor-pointer" onClick={onMenuToggle}>
          <GiHamburgerMenu />
        </button>

        <NavBar location="header" />

        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default AppBar;
