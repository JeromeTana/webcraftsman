import React from "react";
import Link from "next/link";
import { renderStars } from "./CtaPopup/utils";
import Image from "next/image";
import { LucideArrowLeft } from "./Icons/LucideArrowLeft";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group card h-full flex flex-col justify-between"
    >
      <div>
        {/* <div className="relative  overflow-clip flex items-center mb-8 justify-center aspect-square bg-primary rounded-3xl"> */}
        {/* <div className="bg-white p-6 rounded-2xl z-20"> */}
        <div className="text-primary mb-8">{icon}</div>
        {/* </div> */}
        {/* </div> */}
        {/* <div className="flex mb-4">{renderStars(5)}</div> */}
        <h3 className="text-2xl mb-4">{title}</h3>
        <p className="text-paragraph">{description}</p>
      </div>
      <div className="mt-8 flex gap-2 items-center text-primary">
        <p>ดูรายละเอียด</p>
        <LucideArrowRight />
      </div>
    </Link>
  );
}
