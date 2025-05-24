import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

interface ProcessItemProps {
  index: number;
  process: {
    title: string;
    description: string;
  };
  children?: React.ReactNode;
}

export default function ProcessItem({
  index,
  process,
  children,
}: ProcessItemProps) {
  const { title, description } = process;
  return (
    <SpotlightCard className="card relative duration-200 hover:!border-border-highlight flex flex-col justify-between">
      <div className="space-y-4">
        <p className="!text-primary text-sm">Step {index}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mt-10">{children}</div>
    </SpotlightCard>
  );
}
