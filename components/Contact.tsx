import React from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2"
      id="contact"
    >
      <div className="flex flex-col space-y-5">
        <h3 className="text-3xl">Connect with me</h3>
        <div className="flex space-x-2 items-center">
          <IoLocationOutline className="h-6 w-6 text-primary" />
          <p className="text-tertiary text-md">Planet Earth</p>
        </div>
        <div className="flex space-x-2 items-center">
          <IoMailOutline className="h-6 w-6 text-primary" />
          <p className="text-tertiary text-md">mohammadjagora@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="https://github.com/myj009"
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiGithubFill className="h-6 w-6" />
          </Link>
          <Link
            href="https://twitter.com/myj0007"
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiTwitterFill className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/myj007"
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiLinkedinFill className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <SectionSubtitle subtitle="Contact me" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
