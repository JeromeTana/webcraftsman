import React from "react";

interface Props {
  img: string;
  pills: string[];
  title: string;
  description: string;
}

export default function WorkItem({ img, pills, title, description }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="aspect-video rounded-3xl bg-primary"></div>
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
