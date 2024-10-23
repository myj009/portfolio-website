import ecomDashboardImg from "@/public/ecommerce-dashboard.png";
import ecomStoreImg from "@/public/ecommerce-store.png";
import leetcodeImg from "@/public/leetcode-light.png";
import socketChatImg from "@/public/socket-chat.png";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import SectionSubtitle from "./SectionSubtitle";

const ProjectList: ProjectCardProps[] = [
  {
    title: "Leetcode",
    description:
      "LeetCode-inspired coding practice platform. Submissions are processed seamlessly on AWS within containerized environments, leveraging the power of RabbitMQ and Docker for efficient evaluation.",
    gitLink: "https://github.com/myj009/leetcode",
    link: "https://leetcode-mj.vercel.app/",
    image: leetcodeImg,
    video:
      "https://github.com/myj009/leetcode/assets/54302833/2218d40f-0946-4127-ae9c-de1e64af1be8",
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
    title: "Socket-Chat",
    description:
      "Basic chat application using socket.io and next-auth with a clean shadcn UI",
    gitLink: "https://github.com/myj009/socket-chat",
    link: "https://socket-chat-web-ivory.vercel.app",
    image: socketChatImg,
    tags: [
      "TypeScript",
      "Nextjs",
      "SocketIO",
      "NextAuth",
      "PostgreSQL",
      "Tailwind",
    ],
    video:
      "https://github.com/user-attachments/assets/d00e1407-673c-42bf-9b08-dda3056809ac",
  },
  {
    title: "Ecommerce Admin Dashboard",
    description:
      "Empowers users to effortlessly create their own online stores and manage product inventory with our intuitive ecommerce admin dashboard, seamlessly integrated with customizable API endpoints for streamlined frontend development.",
    gitLink: "https://github.com/myj009/ecommerce-admin",
    link: "https://ecommerce-admin-eight-pi.vercel.app/",
    image: ecomDashboardImg,
    tags: ["TypeScript", "Nextjs", "PostgreSQL", "Clerk", "Tailwind"],
    video:
      "https://github.com/user-attachments/assets/46d264d2-2e1a-4793-8c50-d48d73456f09",
  },
  {
    title: "Ecommerce Store",
    description:
      "Elevate online shopping experiences with our frontend stores, leveraging API endpoints from our robust admin dashboard for seamless product display and management. Simplified checkout process and secure payments, empowering users to shop with ease.",
    gitLink: "https://github.com/myj009/ecommerce-store",
    link: "https://ecommerce-store-one-kappa.vercel.app/",
    image: ecomStoreImg,
    tags: ["TypeScript", "Nextjs", "Stripe", "Tailwind"],
    video:
      "https://github.com/user-attachments/assets/202b22c0-b306-49dc-8d3f-d5e02bb01043",
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
            video={project.video || undefined}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
