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
    <div className="bg-foreground rounded-4xl relative duration-200 hover:!border-border-highlight flex flex-col justify-between">
      <div className="space-y-4 p-8">
        <p className="!text-primary text-sm">ขั้นที่ {index}</p>
        <h3 className="text-3xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
