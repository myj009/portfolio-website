import Link from "next/link";
import React from "react";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

const NAV_LINKS = [
  {
    path: "/",
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
  return (
    <div className="fixed w-full h-[94px] leading-[80px] bg-secondary">
      <div className="flex h-full px-32 items-center justify-between">
        <div className="cursor-pointer">
          <h1 className="flex text-4xl">
            <span className="text-primary">M</span>ohammad{"\u00A0"}
            <span className="text-primary">J</span>agora
          </h1>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-8">
            {NAV_LINKS.map((navLink) => (
              <a
                key={navLink.path}
                href={navLink.path}
                target={navLink.openInNewPage ? "_blank" : "_self"}
                className="text-lg text-tertiary hover:text-white"
              >
                {navLink.display}
              </a>
            ))}
          </div>
          <div className="items-center py-2 w-[2px] bg-tertiary"></div>
          <div className="flex items-center space-x-3">
            <Link
              href=""
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-150"
              rel="noreferrer"
            >
              <RiGithubFill />
            </Link>
            <Link
              href=""
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-150"
              rel="noreferrer"
            >
              <RiTwitterFill />
            </Link>
            <Link
              href=""
              target="_blank"
              className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-150"
              rel="noreferrer"
            >
              <RiLinkedinFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
