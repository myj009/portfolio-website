"use client";

import React, { useEffect, useRef } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "framer-motion";

interface TimelineElementProps {
  className?: string;
  contentStyle?: { background: string; color: string };
  contentArrowStyle?: { borderRight: string };
  date?: string;
  iconStyle: { background: string; color: string };
  icon: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
}

const TimelineElement: React.FC<TimelineElementProps> = ({
  className,
  contentStyle,
  contentArrowStyle,
  date,
  iconStyle,
  icon,
  children,
  style,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="" ref={ref}>
      <VerticalTimelineElement
        className={className}
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date={date}
        iconStyle={iconStyle}
        icon={icon}
        visible={isInView}
        style={style}
      >
        {children}
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
