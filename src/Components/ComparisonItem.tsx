import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

interface Props {
  item: string[];
}

export default function ComparisonCard({ item }: Props) {
  return (
    <SpotlightCard className="custom-spotlight-card card w-full">
      <ul className="flex flex-col gap-2">
        {item.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
