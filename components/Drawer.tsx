"use client";
import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { NAV_LINKS } from "./Header";
import { usePathname } from "next/navigation";

interface DrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const path = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-500 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } bg-highlight w-80 dark:bg-gray-800`}
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <div className="flex justify-between mb-8 items-center py-2">
        <h5
          id="drawer-right-label"
          className="inline-flex items-center text-2xl font-semibold text-primary"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <div className="flex flex-col space-y-8">
        {NAV_LINKS.map((navLink) => (
          <Link
            key={navLink.path}
            href={navLink.path}
            target={navLink.openInNewPage ? "_blank" : "_self"}
            className={`${console.log("Path: ", path, navLink.path)} ${
              path === navLink.path && "text-primary"
            } text-base lg:text-lg text-tertiary hover:text-primary`}
          >
            {navLink.display}
          </Link>
        ))}
      </div>
      <div className="my-8">
        <div className="flex items-center space-x-4">
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
  );
};

export default Drawer;
