import Image from "next/image";
import React from "react";

interface Props {
  work: {
    img: string;
    pills: string[];
    title: string;
    description: string;
  };
}

export default function WorkItem({ work }: Props) {
  const { img, pills, title, description } = work;
  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={img}
          alt="work"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-top group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          {pills.map((pill, index) => (
            <p key={index} className="pill">
              {pill}
            </p>
          ))}
        </div>
        <h2 className="font-medium text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
