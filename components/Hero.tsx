import React, { Suspense } from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
import heroImg from "@/public/mj.png";
import classes from "@/styles/hero.module.css";
import classNames from "@/styles/subtitle.module.css";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className={` ${classes.hero} container `}>
      {/* desktop / large screen view */}
      <div id="hero-section" className="hidden md:flex">
        <div className="grid grid-cols-2 gap-16 justify-between items-center">
          <div className="flex items-center space-x-9">
            <div className="flex flex-col justify-between space-y-4">
              <Link
                href="https://github.com/myj009"
                target="_blank"
                className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
                rel="noreferrer"
              >
                <RiGithubFill className="h-9 w-9" />
              </Link>
              <Link
                href="https://twitter.com/myj0007"
                target="_blank"
                className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
                rel="noreferrer"
              >
                <RiTwitterFill className="h-9 w-9" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/myj007"
                target="_blank"
                className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
                rel="noreferrer"
              >
                <RiLinkedinFill className="h-9 w-9" />
              </Link>
            </div>
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-2 text-white">I&apos;m Mohammad Jagora</h2>
              <h5 className="mb-4 text-xl text-primary font-normal">
                Fullstack Developer
              </h5>
              <p className="text-white mb-2" id="about-me">
                Hi there! I&apos;m Mohammad Jagora, a full-stack software
                engineer with 4+ years of experience. I&apos;m passionate about
                technology, with a proven track record at companies like Adobe,
                HSBC, and Deliveroo.
              </p>
              <p className="text-white">
                My expertise lies in C++, TypeScript, Go, web development
                (React.js, Next.js), microservices, and DevOps.
              </p>
              <div className="mt-5 flex place-content-center md:block">
                <div className="relative inline-flex group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    download
                    className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      className="block"
                    >
                      Resume <FaDownload />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`${classes.hero__img} text-end flex items-center`}>
              <Image
                alt="Profile image"
                src={heroImg}
                className="rounded-full"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile / small screen view */}

      <div id="hero-section" className="md:hidden">
        <div>
          <div>
            <div className={`${classes.hero__content}`}>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <div className={`${classes.hero__img} text-end`}>
                    <Image
                      alt="Profile image"
                      src={heroImg}
                      width="450"
                      height="450"
                    />
                  </div>
                </div>
                <h2 className="mt-6 mb-3">
                  <span className={`${classNames.section__subtitle}`}>
                    Hello !{" "}
                  </span>
                  I&apos;m Mohammad Jagora
                </h2>
                <h5 className="mb-4">Fullstack Developer</h5>
                <p id="about-me" className="text-center">
                  Hi there! I&apos;m Mohammad Jagora, a full-stack software
                  engineer with 4+ years of experience. I&apos;m passionate
                  about technology, with a proven track record at companies like
                  Adobe, HSBC, and Deliveroo.
                </p>
                <p className="text-center">
                  My expertise lies in C++, TypeScript, Go, web development
                  (React.js, Next.js), microservices, and DevOps.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  download
                  className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    className="block"
                  >
                    Resume <FaDownload />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
