import React from "react";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import axios from "axios";
import { useState } from "react";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="px-48 pt-24 pb-12 grid grid-cols-2">
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl">Connect with me</h3>
        <div className="flex space-x-2 items-center">
          <IoLocationOutline className="h-6 w-6 text-primary" />
          <p className="text-tertiary">Planet Earth</p>
        </div>
        <div className="flex space-x-2 items-center">
          <IoMailOutline className="h-6 w-6 text-primary" />
          <p className="text-tertiary">mohammadjagora@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href=""
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiGithubFill className="h-6 w-6" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiTwitterFill className="h-6 w-6" />
          </Link>
          <Link
            href=""
            target="_blank"
            className="cursor-pointer text-white hover:text-primary transform ease-in-out hover:-translate-y+1 hover:scale-125"
            rel="noreferrer"
          >
            <RiLinkedinFill className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <SectionSubtitle subtitle="Contact me" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
