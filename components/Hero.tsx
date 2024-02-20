import React, { Suspense } from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { BsDiscord } from "react-icons/bs";
import Image from "next/image";
import heroImg from "@/public/mj.png";
import classes from "@/styles/hero.module.css";
import classNames from "@/styles/subtitle.module.css";

const Hero = () => {
  return (
    <section className={` ${classes.hero} `}>
      {/* desktop / large screen view */}
      <div id="hero-section" className="flex">
        <div className="pt-24 px-48 grid grid-cols-2 justify-between items-center">
          <div>
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3 text-white">I&apos;m Mohammad Jagora</h2>
              <h5 className="mb-4 text-[#808dad] font-normal">
                Fullstack Developer
              </h5>
              <p id="about-me">
                Hi there! My name is Mohammad Jagora and I&rsquo;m a software
                engineer with over 5 years of experience in the industry. I love
                all things tech and coding, and on my channel, I share my
                knowledge and experience with others.
              </p>
            </div>
            <div className="mt-5 flex place-content-center md:block">
              <div className="relative inline-flex group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://discord.gg/kRSRxBQ6xf"
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
                    Join Discord Server <BsDiscord />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className={`${classes.hero__img} text-end flex items-center`}>
              <Image
                alt="Piyush Garg"
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
                      alt="Piyush Garg"
                      src={heroImg}
                      width="450"
                      height="450"
                    />
                  </div>
                </div>
                <h2 className="mt-3 mb-3">
                  <span className={`${classNames.section__subtitle}`}>
                    Hello !{" "}
                  </span>
                  I&apos;m Piyush Garg
                </h2>
                <h5 className="mb-4">Fullstack Developer & Instructor</h5>
                <p id="about-me" className="text-center">
                  Hi there! My name is Piyush Garg and I&rsquo;m a software
                  engineer with over 5 years of experience in the industry. I
                  love all things tech and coding, and on my channel, I share my
                  knowledge and experience with others.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="relative inline-flex group">
                <div className="absolute w-full transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  target="_blank"
                  href="https://discord.gg/kRSRxBQ6xf"
                  className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
                    Join Discord Server <BsDiscord />
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
