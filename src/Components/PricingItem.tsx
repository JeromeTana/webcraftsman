import React from "react";
import { LucideCheck } from "./Icons/LucideCheck";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

interface PlanType {
  title: string;
  price_from?: number;
  price: number;
  description: string;
  features: string[];
  paymentUrl: string;
}

interface PricingItemProps {
  plan: PlanType;
  isHighlighted?: boolean;
  className?: string;
}

export default function PricingItem({
  plan,
  isHighlighted = false,
  className,
}: PricingItemProps) {
  return isHighlighted ? (
    <HighlightedPricingCard plan={plan} className={className} />
  ) : (
    <StandardPricingCard plan={plan} className={className} />
  );
}

function StandardPricingCard({
  plan,
  className,
}: {
  plan: PlanType;
  className?: string;
}) {
  const { title, price_from, price, description, features, paymentUrl } = plan;

  return (
    <SpotlightCard
      spotlightColor="rgba(255, 255, 255, 0)"
      className={twMerge(
        "custom-spotlight-card card relative flex flex-col justify-between",
        className
      )}
    >
      <div>
        <div className="flex flex-col gap-6 z-10">
          <h3 className="text-2xl text-center font-semibold">{title}</h3>
          <div>
            {price_from && (
              <p className="!text-3xl text-center font-medium line-through">
                ${price_from}
              </p>
            )}
            <p className="!text-6xl text-center font-medium !text-primary !leading-normal">
              ${price}
            </p>
          </div>
          <p className="text-center">{description}</p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <p className="font-semibold">Includes:</p>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <LucideCheck className="text-accent-green" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href={paymentUrl} target="_blank">
        <button className="cta mt-16 w-full flex items-center justify-center gap-2 !shadow-none !bg-neutral-100 !border-none !text-primary">
          Get Started <LucideArrowRight />
        </button>
      </a>
    </SpotlightCard>
  );
}

function HighlightedPricingCard({
  plan,
  className,
}: {
  plan: PlanType;
  className?: string;
}) {
  const { title, price_from, price, description, features, paymentUrl } = plan;

  return (
    <SpotlightCard
      className={twMerge(
        "custom-spotlight-card card relative flex flex-col justify-between !bg-primary !border !border-border-highlight",
        className
      )}
    >
      {/* Uncomment if you want to use the comet image
      <Image
        src="/large-comet-l.png"
        alt="large comet"
        width={300}
        height={200}
        className="absolute top-0 left-0 w-2/3 -z-10"
      />
      */}
      <div>
        <div className="flex flex-col gap-6 z-10">
          <h3 className="text-2xl text-center font-semibold !text-white">
            {title}
          </h3>
          <div>
            {price_from && (
              <p className="!text-3xl text-center font-medium line-through !text-neutral-400">
                ${price_from}
              </p>
            )}
            <p className="!text-6xl text-center font-medium !text-white !leading-normal">
              ${price}
            </p>
          </div>
          <p className="text-center !text-neutral-400">{description}</p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <p className="font-semibold !text-neutral-400">Includes:</p>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <LucideCheck className="text-accent-green" />
                <p className="!text-white">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href={paymentUrl} target="_blank">
        <button className="cta mt-16 w-full flex items-center justify-center gap-2 !shadow-none !bg-white !text-primary">
          Get Started <LucideArrowRight />
        </button>
      </a>
    </SpotlightCard>
  );
}
