import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface Props {
  item: string[];
  Icon: React.ReactNode;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  className?: string;
  isHighlighted?: boolean;
}

export default function ComparisonCard({
  item,
  Icon,
  className,
  isHighlighted = false,
}: Props) {
  return (
    <SpotlightCard
      spotlightColor={isHighlighted ? undefined : "rgba(255, 255, 255, 0)"}
      className={twMerge(
        "custom-spotlight-card card relative w-full",
        className
      )}
    >
      {isHighlighted && (
        <Image
          src="/large-comet-r.png"
          alt="large comet"
          width={300}
          height={200}
          className="absolute top-0 right-0 "
        />
      )}
      <ul className="flex flex-col gap-4">
        {item.map((i, index) => (
          <div key={index} className="flex items-center gap-2">
            {Icon}
            <li key={index}>{i}</li>
          </div>
        ))}
      </ul>
    </SpotlightCard>
  );
}
