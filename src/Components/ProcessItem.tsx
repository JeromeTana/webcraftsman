import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

interface ProcessItemProps {
  index: number;
  process: {
    title: string;
    description: string;
  };
}

export default function ProcessItem({ index, process }: ProcessItemProps) {
  const { title, description } = process;
  return (
    <SpotlightCard className="card relative duration-200 hover:!border-border-highlight">
      <h2 className="text-xl mb-4">{title}</h2>
      <p>{description}</p>
    </SpotlightCard>
  );
}
