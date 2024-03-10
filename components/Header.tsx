"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import DrawerExample from "./Drawer";
import Drawer from "./Drawer";

export const NAV_LINKS = [
  {
    path: "/#home",
    display: "Home",
    openInNewPage: false,
  },
  {
    path: "/#projects",
    display: "Projects",
    openInNewPage: false,
  },
  {
    path: "/#experience",
    display: "Experience",
    openInNewPage: false,
  },
  {
    path: "/#contact",
    display: "Contact",
    openInNewPage: false,
  },
];

const Header = () => {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed container px-2 md:px-4 z-10 h-[94px] leading-[80px] bg-secondary">
      <div className="flex h-full w-full items-center justify-between space-x-6">
        <div className="cursor-pointer">
          <h1 className="flex text-3xl lg:text-4xl">
            <span className="text-primary">M</span>ohammad{"\u00A0"}
            <span className="text-primary">J</span>agora
          </h1>
        </div>
        <div className="flex justify-center items-center md:hidden">
          <button onClick={() => setIsDrawerOpen(true)}>
            <IoMenu className="h-7 w-7" />
          </button>
        </div>

        <div className="hidden md:flex space-x-5">
          <div className="flex space-x-8">
            {NAV_LINKS.map((navLink) => (
              <Link
                key={navLink.path}
                href={navLink.path}
                target={navLink.openInNewPage ? "_blank" : "_self"}
                className={`${
                  path === navLink.path && "text-primary"
                } text-base lg:text-lg text-tertiary hover:text-primary`}
              >
                {navLink.display}
              </Link>
            ))}
          </div>
          <div className="items-center py-2 w-[2px] bg-tertiary"></div>
          <div className="flex items-center space-x-3">
            <Link
              href="https://github.com/myj009"
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
              rel="noreferrer"
            >
              <RiGithubFill className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/myj0007"
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
              rel="noreferrer"
            >
              <RiTwitterFill className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/myj007"
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
              rel="noreferrer"
            >
              <RiLinkedinFill className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
};

export default Header;
