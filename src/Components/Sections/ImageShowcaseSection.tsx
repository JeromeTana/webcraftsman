"use client"

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Different parallax speeds for each column - improved for more dramatic effect
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  return (
    <div ref={containerRef} className="relative mt-24 overflow-x-clip">
      {/* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-white via-white/ to-transparent z-10 w-full h-full"/> */}
      <div className="min-w-2xl origin-top grid grid-cols-5 gap-4 scale-125">
        {/* {SHOWCASE_IMAGES.map((image, index) => ( */}
        <motion.div 
          style={{ y: y1 }}
          className="flex flex-col gap-4 -mt-32"
        >
          <Image
            src={"/showcase6.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase5.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="flex flex-col gap-4 -mt-16"
        >
          <Image
            src={"/showcase4.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase7.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </motion.div>
        <motion.div 
          style={{ y: y3 }}
          className="flex flex-col gap-4"
        >
          <Image
            src={"/showcase3.png"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase8.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </motion.div>
        <motion.div 
          style={{ y: y4 }}
          className="flex flex-col gap-4 -mt-16"
        >
          <Image
            src={"/showcase10.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase9.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </motion.div>
        <motion.div 
          style={{ y: y5 }}
          className="flex flex-col gap-4 -mt-32"
        >
          <Image
            src={"/showcase6.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
          <Image
            src={"/showcase6.webp"}
            alt={""}
            width={1000}
            height={1000}
            className={`w-full object-cover aspect-square border border-gray-200 object-top group-hover:scale-105 duration-300 md:rounded`}
          />
        </motion.div>
      </div>
      {/* ))} */}
    </div>
  );
}
