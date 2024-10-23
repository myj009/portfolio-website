"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { AssetName } from "@/lib/assets";
import Chip from "./Chip";

export interface ProjectCardProps {
  title: string;
  description: string;
  gitLink: string;
  link: string;
  image: StaticImageData;
  video?: string;
  tags: AssetName[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  gitLink,
  image,
  video,
  tags,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-highlight py-6 px-4 flex flex-col justify-between rounded-lg card"
    >
      <div className="">
        <div className="mb-2">
          <Link href={link} target="_blank" rel="noreferrer">
            {video ? (
              // <div className="text-lg">video</div>
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-80 rounded-lg w-full object-cover object-top" // needed because random black line at bottom of video
              />
            ) : (
              <Image
                src={image}
                alt={title}
                className="rounded-lg w-full h-80"
              />
            )}
            {/* <div className="text-lg">video</div> */}
          </Link>
        </div>
        <div className="font-bold mb-2 text-xl text-primary">{title}</div>
        <div className="flex space-x-2 mt-1">
          {tags.map((tech) => (
            <Chip key={tech} name={tech} />
          ))}
        </div>
        <div className="font-normal mt-3 mb-5">{description}</div>
      </div>
      <div className="">
        <div className="flex space-x-2 text-primary">
          <Link href={link} target="_blank" rel="noreferrer">
            <FiExternalLink className="h-9 w-9" />
          </Link>
          <Link href={gitLink} target="_blank" rel="noreferrer">
            <RiGithubFill className="h-9 w-9" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
