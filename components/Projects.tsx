import React, { use, useEffect, useRef } from "react";
import SectionSubtitle from "./SectionSubtitle";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import leetcodeImg from "@/public/test.jpg";

const ProjectList: ProjectCardProps[] = [
  {
    title: "Leetcode",
    description: "A platform to practice coding problems",
    gitLink: "https://github.com/myj009/leetcode",
    link: "https://leetcode-mj.vercel.app/",
    image: leetcodeImg,
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Leetcode",
    description:
      "A platform to practice coding problems dfhjsahdf sdhfkjhj fasjhdfj shjdhf jsahdfj s",
    gitLink: "https://github.com/myj009/leetcode",
    link: "https://leetcode-mj.vercel.app/",
    image: leetcodeImg,
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Leetcode",
    description:
      "A platform to practice coding problems dfhjsahdf sdhfkjhj fasjhdfj shjdhf jsahdfj s",
    gitLink: "https://github.com/myj009/leetcode",
    link: "https://leetcode-mj.vercel.app/",
    image: leetcodeImg,
    tags: ["React", "TypeScript", "Next.js"],
  },
];

const Projects = () => {
  return (
    <div className="px-48">
      <div className="">
        <SectionSubtitle subtitle="Projects" />
        <h3 className="mt-3 mb-3 text-white text-2xl">
          Checkout my most recent projects
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {ProjectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            gitLink={project.gitLink}
            link={project.link}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
