import React from "react";
import classes from "@/styles/subtitle.module.css";

interface SectionSubtitleProps {
  link?: string;
  subtitle: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  link,
  subtitle,
}) => {
  return (
    <h5 className={`${classes.section__subtitle}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {subtitle}
      </a>
    </h5>
  );
};

export default SectionSubtitle;
