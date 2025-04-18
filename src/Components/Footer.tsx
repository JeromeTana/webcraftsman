import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import { poltawski } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { LucideCheck } from "./Icons/LucideCheck";
import ShinyText from "./ShinyText/ShinyText";
import Magnet from "@/Animations/Magnet/Magnet";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

const features = [
  "Turn your visitors into buyers.",
  "Complete in 5 days.",
  "No meetings.",
];

export default function Footer() {
  return (
    <>
      <section id="cta">
        <AnimatedContent
          distance={100}
          direction="vertical"
          initialOpacity={0.05}
          animateOpacity
          damping={10}
          stiffness={50}
          scale={0.9}
          threshold={0.2}
        >
          <div className="bg-gradient-to-b from-primary to-primary/20 p-12 rounded-3xl flex flex-col gap-8 items-center justify-center">
            <div className="pill !bg-black/80">Last Chance</div>
            <h1 className="text-6xl text-center font-medium">
              Get a{" "}
              <span className={`${poltawski.className} italic`}>
                Website that Sales
              </span>
              <br />
              Within Days
            </h1>
            <ul className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <LucideCheck />
                  <p className="!text-white font-medium">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-3 scale-125 mt-6">
              <Magnet padding={50} magnetStrength={10}>
                <a href="#plan">
                  <button className="cta flex items-center gap-2 !bg-white !text-primary">
                    Get Started Now <LucideArrowRight />
                  </button>
                </a>
              </Magnet>
              <p className="text-xs ">
                Only 2 spots left for{" "}
                {new Date().toLocaleString("default", {
                  month: "long",
                })}
                .
              </p>
            </div>
          </div>
        </AnimatedContent>
      </section>
      <footer>
        <div className="relative bg-white h-[26vh] flex justify-center items-center -z-20 overflow-clip">
          <div className="absolute top-0 bg-background rounded-b-3xl w-full p-8 shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <p> Copyright ©Webcraftsman.co </p>
              <p> jerome@webcraftsman.co</p>
              <p> Follow on instagram </p>
            </div>
          </div>
          <div>
            <Image
              src="/WEBCRAFTSMANCO.png"
              alt="Reveal footer"
              width={1440}
              height={315}
              className="w-full fixed left-0 bottom-2 -z-10"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
