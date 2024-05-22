"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("/");
  const { data: session, status } = useSession();
  console.log(session?.user?.name, status);

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
