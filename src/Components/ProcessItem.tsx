import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

interface ProcessItemProps {
  index: number;
  title: string;
  description: string;
}

export default function ProcessItem({
  index,
  title,
  description,
}: ProcessItemProps) {
  return (
    <SpotlightCard className="card relative duration-200 hover:!border-white/30">
      <h2 className="text-xl mb-4">{title}</h2>
      <p>{description}</p>
    </SpotlightCard>
  );
}
