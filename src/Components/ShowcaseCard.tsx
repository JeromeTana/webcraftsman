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
    // <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 w-full bg-foreground p-4 rounded-4xl">
    //   <div className="rounded-3xl overflow-hidden p-8 bg-background/50">
    //     <Image
    //       src={img}
    //       alt="work"
    //       width={1000}
    //       height={1000}
    //       className="w-full h-full object-cover object-top group-hover:scale-[1.02] duration-300 rounded-lg shadow"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-8">
    //     <div className="flex gap-2">
    //       {pills.map((pill, index) => (
    //         <p key={index} className="pill-fg">
    //           {pill}
    //         </p>
    //       ))}
    //     </div>
    //     <h3 className="font-medium text-3xl">{title}</h3>
    //     <p>{description}</p>
    //   </div>
    // </div>
    <div className="group gap-8 w-full card rounded-4xl">
      <div className="relative h-full grid md:grid-cols-2">
        <div className="py-8">
          <h3 className="text-3xl">{title}</h3>
        </div>
        <div className="w-full aspect-square group-hover:scale-[1.02] duration-300 rounded-lg shadow overflow-clip">
          <Image
            src={img}
            alt="work"
            width={1000}
            height={1000}
            className="object-cover aspect-square object-top"
          />
        </div>
      </div>
    </div>
  );
}
