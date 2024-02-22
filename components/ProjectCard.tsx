"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  gitLink: string;
  link: string;
  image: StaticImageData;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  gitLink,
  image,
  tags,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-highlight p-4 flex flex-col justify-between rounded-lg card"
    >
      <div className="">
        <div className="mb-2">
          <Link href={link} target="_blank" rel="noreferrer">
            <Image
              src={image}
              alt={title}
              className="rounded-lg w-full h-[300px]"
            />
          </Link>
        </div>
        <div className="font-bold mb-1">Leetcode</div>
        <div className="font-normal mb-5">{description}</div>
      </div>
      <div className="">
        <div className="flex space-x-2 mb-3 text-primary">
          <Link href={link} target="_blank" rel="noreferrer">
            <FiExternalLink className="h-8 w-8" />
          </Link>
          <Link href={gitLink} target="_blank" rel="noreferrer">
            <RiGithubFill className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex flex-wrap space-x-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-hover text-white py-1 px-3 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
