import React from "react";
import { LucideCheck } from "./Icons/LucideCheck";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

interface PricingItemProps {
  plan: {
    title: string;
    price: number;
    description: string;
    features: string[];
    paymentUrl: string;
  };
  isHighlighted?: boolean;
  className?: string;
}

export default function PricingItem({
  plan,
  isHighlighted = false,
  className,
}: PricingItemProps) {
  const { title, price, description, features, paymentUrl } = plan;
  return (
    <SpotlightCard
      spotlightColor={isHighlighted ? undefined : "rgba(255, 255, 255, 0)"}
      className={twMerge(
        "custom-spotlight-card card relative flex flex-col justify-between",
        className,
        isHighlighted && "!bg-transparent !border-primary"
      )}
    >
      {isHighlighted && (
        <Image
          src="/large-comet-l.png"
          alt="large comet"
          width={300}
          height={200}
          className="absolute top-0 left-0 w-2/3 -z-10"
        />
      )}
      <div>
        <div className="flex flex-col gap-6 z-10">
          <h2 className="text-2xl text-center font-semibold">{title}</h2>
          <p className="text-6xl text-center font-medium !text-white">
            ${price}
          </p>
          <p className="text-center">{description}</p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <p className="font-semibold">Includes:</p>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <LucideCheck className="text-accent-green" />
                <p className={isHighlighted ? "!text-white" : ""}>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href={paymentUrl} target="_blank">
        <button
          className={twMerge(
            "cta mt-16 w-full flex items-center justify-center gap-2",
            !isHighlighted && "!bg-white !text-primary"
          )}
        >
          Get Started <LucideArrowRight />
        </button>
      </a>
    </SpotlightCard>
  );
}
