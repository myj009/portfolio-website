import React, { use, useEffect, useRef } from "react";
import SectionSubtitle from "./SectionSubtitle";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import leetcodeImg from "@/public/leetcode-light.png";
import ecomStoreImg from "@/public/ecommerce-store.png";
import ecomDashboardImg from "@/public/ecommerce-dashboard.png";

const ProjectList: ProjectCardProps[] = [
  {
    title: "Leetcode",
    description:
      "LeetCode-inspired coding practice platform. Submissions are processed seamlessly on AWS within containerized environments, leveraging the power of RabbitMQ and Docker for efficient evaluation.",
    gitLink: "https://github.com/myj009/leetcode",
    link: "https://leetcode-mj.vercel.app/",
    image: leetcodeImg,
    tags: [
      "TypeScript",
      "Nextjs",
      "PostgreSQL",
      "RabbitMQ",
      "Docker",
      "ExpressJs",
      "Tailwind",
      "AWS",
    ],
  },
  {
    title: "Ecommerce Admin Dashboard",
    description:
      "Empowers users to effortlessly create their own online stores and manage product inventory with our intuitive ecommerce admin dashboard, seamlessly integrated with customizable API endpoints for streamlined frontend development.",
    gitLink: "https://github.com/myj009/ecommerce-admin",
    link: "https://ecommerce-admin-eight-pi.vercel.app/",
    image: ecomDashboardImg,
    tags: ["TypeScript", "Nextjs", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Ecommerce Store",
    description:
      "Elevate online shopping experiences with our frontend stores, leveraging API endpoints from our robust admin dashboard for seamless product display and management. Simplified checkout process and secure payments, empowering users to shop with ease.",
    gitLink: "https://github.com/myj009/ecommerce-store",
    link: "https://ecommerce-store-one-kappa.vercel.app/",
    image: ecomStoreImg,
    tags: ["TypeScript", "Nextjs", "Stripe", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <div className="container" id="projects">
      <div className="">
        <SectionSubtitle subtitle="Projects" />
        <h3 className="mt-3 mb-3 text-white text-2xl">
          Checkout my most recent projects
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
