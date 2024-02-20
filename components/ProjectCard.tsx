import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    <div className="bg-highlight p-4 flex flex-col justify-between rounded-lg">
      <div className="">
        <div className="mb-2">
          <Image
            src={image}
            alt={title}
            className="rounded-lg w-full h-[300px]"
          />
        </div>
        <div className="font-bold mb-1">Leetcode</div>
        <div className="font-normal mb-5">{description}</div>
      </div>
      <div className="">
        <div className="flex space-x-2 mb-3">
          <Link href={link} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="h-8 w-8" />
          </Link>
          <Link href={gitLink} target="_blank" rel="noreferrer">
            <RiGithubFill className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex flex-wrap space-x-2">
          {tags.map((tag) => (
            <div key={tag} className="bg-hover text-white py-1 px-2 rounded-md">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
