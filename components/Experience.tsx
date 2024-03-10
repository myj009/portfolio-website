"use client";

import React, { ReactNode } from "react";
import SectionSubtitle from "./SectionSubtitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiAdobe, SiDeliveroo, SiHsbc } from "react-icons/si";
import { GoStarFill } from "react-icons/go";
import TimelineElement from "./TimelineElement";
import Chip from "./Chip";
import { AssetName } from "@/lib/assets";

const technologies: {
  [key: string]: AssetName[];
} = {
  adobe: ["Cpp", "ReactJs", "TypeScript"],
  deliveroo: ["Nextjs", "Go", "TypeScript", "Docker", "AWS"],
  hsbc: ["Python"],
};

const ExpPoints = ({ text }: { text: ReactNode }) => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="h-2 w-2 rounded-full bg-white"></div>
      {text}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col space-y-10 container" id="experience">
      <SectionSubtitle subtitle="Experience" />
      <VerticalTimeline layout="1-column-left">
        <TimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#171F38", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #171F38" }}
          date="Jan 2023 - present"
          iconStyle={{ background: "#fff", color: "#2ECCBC" }}
          icon={<SiDeliveroo />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title text-primary text-xl">
            Software Engineer(SRE)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md">
            Deliveroo
          </h4>
          <div className="flex space-x-2 mt-1">
            {technologies.deliveroo.map((tech) => (
              <Chip key={tech} name={tech} />
            ))}
          </div>
          <ul className="mt-2 flex flex-col space-y-2 mr-4">
            <ExpPoints
              text={
                <li>
                  Developed a comprehensive{" "}
                  <strong className="text-primary">
                    central maintenance mode workflow
                  </strong>{" "}
                  for Deliveroo, enabling seamless cessation of all orders
                  across the product platform during major incidents. This
                  proactive approach{" "}
                  <strong className="text-primary">
                    significantly mitigated potential losses
                  </strong>{" "}
                  by preventing further orders, ensuring operational stability
                  and minimizing disruptions to service.
                </li>
              }
            />
            <ExpPoints
              text={
                <li>
                  Led the development of an integrated process to monitor and
                  analyze{" "}
                  <strong className="text-primary">incident metrics</strong>{" "}
                  across all products, enabling the identification of patterns
                  and recurring issues for{" "}
                  <strong className="text-primary">
                    proactive incident prevention
                  </strong>
                  . Implemented a comprehensive dashboard for visualizing these
                  metrics, facilitating data-driven decision-making.
                </li>
              }
            />
            <ExpPoints
              text={
                <li>
                  Established a streamlined procedure for creating repair items
                  as a backlog of incidents, aimed at identifying core issues
                  and ensuring timely resolution by all teams. Leveraged
                  dashboard tracking and automated notifications to enhance team
                  responsiveness and efficiency in addressing incidents.
                </li>
              }
            />
          </ul>
        </TimelineElement>
        <TimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#171F38", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #171F38" }}
          date="Apr 2021 - Dec 2022"
          iconStyle={{ background: "#fff", color: "#CC2128" }}
          icon={<SiAdobe />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title text-primary text-xl">
            Software Engineer 2
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Adobe</h4>
          <div className="flex space-x-2 mt-1">
            {technologies.adobe.map((tech) => (
              <Chip key={tech} name={tech} />
            ))}
          </div>
          <ul className="mt-2 flex flex-col space-y-2 mr-4">
            <ExpPoints
              text={
                <li>
                  Worked on <strong className="text-primary">Adobe Sign</strong>{" "}
                  feature for Enterprise Users, to fetch authentication token
                  for the user, store it, refresh it as required and let the
                  user proceed with sign functionalities upon token
                  verification.
                </li>
              }
            />
            <ExpPoints
              text={
                <li>
                  Increased <strong className="text-primary">security</strong>{" "}
                  of Acrobat on windows significantly by moving 97% of the
                  codebase to a separate sandboxed process which is launched
                  with reduced access rights leading to{" "}
                  <strong className="text-primary">80% reduction</strong> in
                  security bugs.
                </li>
              }
            />
            <ExpPoints
              text={
                <li>
                  Integrating{" "}
                  <strong className="text-primary">Address Sanitizer </strong>
                  with Acrobat codebase to catch memory crashes before hand and
                  fix them leading to a{" "}
                  <strong className="text-primary">
                    10-12% decrease in app crashes{" "}
                  </strong>
                  being reported
                </li>
              }
            />
          </ul>
        </TimelineElement>
        <TimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#171F38", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #171F38" }}
          date="Aug 2019 - Mar 2021"
          iconStyle={{ background: "#fff", color: "#DB0112" }}
          icon={<SiHsbc />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title text-primary text-xl">
            Software Engineer(Data)
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-md">HSBC</h4>
          <div className="flex space-x-2 mt-1">
            {technologies.hsbc.map((tech) => (
              <Chip key={tech} name={tech} />
            ))}
          </div>
          <ul className="mt-2 flex flex-col space-y-2">
            <ExpPoints
              text={
                <li>
                  Directed data transformations, masking and transitions by
                  creating pipelines using{" "}
                  <strong className="text-primary">python</strong>
                </li>
              }
            />

            <ExpPoints
              text={
                <li>
                  Developed ETL jobs using Ab-Initio for 50+ countries data.
                </li>
              }
            />
          </ul>
        </TimelineElement>
        <TimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<GoStarFill />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
