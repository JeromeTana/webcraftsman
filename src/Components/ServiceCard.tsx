import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Service } from "@/data/services";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.url}
      className="group bg-foreground p-2 h-full flex flex-col rounded-4xl justify-between transition-transform hover:-translate-y-4"
    >
      <div className="w-full overflow-hidden rounded-3xl">
        <Image
          src={service.thumbnail as string}
          alt={`${service.title} Thumbnail`}
          width={1000}
          height={1000}
          className="w-full object-cover bg-primary aspect-video group-hover:scale-105 duration-200 transition-transform"
        />
      </div>
      <div className="p-8 pb-10 flex flex-col flex-1">
        {/* <div className="relative  overflow-clip flex items-center mb-8 justify-center aspect-square bg-primary rounded-3xl"> */}
        {/* <div className="bg-white p-6 rounded-2xl z-20"> */}
        {/* <div className="text-primary mb-8">{service.icon}</div> */}
        {/* <div className="flex mb-4">{renderStars(5)}</div> */}
        <h3 className="text-2xl mb-4">{service.title}</h3>
        <p className="text-paragraph line-clamp-3 flex-1">{service.description}</p>
        <div className="mt-8 flex gap-2 items-center text-primary">
          <p>View Details</p>
          <ChevronRight />
        </div>
      </div>
    </Link>
  );
}
