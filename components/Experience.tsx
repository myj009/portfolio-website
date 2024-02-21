"use client";

import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiAdobe, SiDeliveroo, SiHsbc } from "react-icons/si";
import { GoStarFill } from "react-icons/go";
import TimelineElement from "./TimelineElement";

const Experience = () => {
  return (
    <div className="flex flex-col space-y-4 px-48 pt-24">
      <SectionSubtitle subtitle="Experience" />
      <VerticalTimeline layout="1-column-left">
        <TimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#fff", color: "#2ECCBC" }}
          icon={<SiDeliveroo />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </TimelineElement>
        <TimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "#fff", color: "#CC2128" }}
          icon={<SiAdobe />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </TimelineElement>
        <TimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "#fff", color: "#DB0112" }}
          icon={<SiHsbc />}
          style={{ marginBottom: "20px" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
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
