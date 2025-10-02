import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.url}
      className="group card !p-0 h-full flex flex-col justify-between"
    >
      <div className="w-full overflow-hidden rounded-t-2xl">
        <Image
          src={service.thumbnail as string}
          alt={`${service.title} Thumbnail`}
          width={1000}
          height={1000}
          className="w-full object-cover bg-primary aspect-video group-hover:scale-105 duration-200 transition-transform"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        {/* <div className="relative  overflow-clip flex items-center mb-8 justify-center aspect-square bg-primary rounded-3xl"> */}
        {/* <div className="bg-white p-6 rounded-2xl z-20"> */}
        <div className="text-primary mb-8">{service.icon}</div>
        {/* <div className="flex mb-4">{renderStars(5)}</div> */}
        <h3 className="text-2xl mb-4">{service.title}</h3>
        <p className="text-paragraph">{service.description}</p>
      </div>
      {/* <div className="mt-8 flex gap-2 items-center text-primary">
        <p>ดูรายละเอียด</p>
        <ArrowRight />
      </div> */}
    </Link>
  );
}
