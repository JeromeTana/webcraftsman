import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";
import React from "react";
import { CtaButtonHighlighted } from "./CtaButton";
import AnimatedCalendarIcon from "./Icons/AnimatedCalendarIcon";
import Logo from "./Icons/Logo";
import { RevealLink } from "./RevealLink";

const tagline = "Get More Buying Customers For Your Digital Product ";

export default function Footer() {
  return (
    <>
      <section id="cta">
        <div className="relative overflow-clip bg-primary m-auto pt-16 pb-72 lg:pb-96 rounded-4xl flex flex-col gap-8 items-center justify-center">
          <div className="pill flex items-center gap-4">
            <div className="relative flex items-center">
              <div className="w-3 h-3 rounded-full bg-accent-green" />
              <div className="w-3 h-3 rounded-full bg-accent-green animate-ping absolute" />
            </div>
            Let's Get Started
          </div>
          <div className="flex flex-col gap-4 px-8">
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
              <h2 className="!mb-0 !text-white text-center">
                <span className="inline-flex items-center gap-4">
                  <span className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    Book Your <span>30-min </span>
                    <span className="inline-flex items-center gap-2 md:gap-4">
                      <AnimatedCalendarIcon />
                      Intro Call
                    </span>
                  </span>
                </span>
                <span className="hidden md:inline-flex items-center gap-4">
                  with{" "}
                  <span className="inline-flex items-center gap-4">
                    <Image
                      src="/jerome_pfp.png"
                      alt="Jerome pfp"
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-white"
                    />{" "}
                    Jerome
                  </span>
                </span>
              </h2>
            </AnimatedContent>
            <p className="!text-white !text-xl font-medium text-center">
              Just a 30-minute chill call to see if we are a good fit!
            </p>
            {/* <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="!text-white flex items-center gap-2">
                <LucideCheck />
                <p className="!text-white font-medium">{feature}</p>
              </li>
            ))}
          </ul> */}
          </div>
          <div className="relative w-full mx-auto flex justify-center mt-8">
            <CtaButtonHighlighted />
            <div className="absolute md:w-4xl top-64 md:top-48 z-0 grid grid-cols-3 gap-4 max-w-7xl m-auto px-4">
              <Image
                src="/showcase2.png"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 md:hover:-rotate-1 md:hover:scale-105"
              />
              <Image
                src="/showcase1.png"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-200 md:scale-125 md:hover:-rotate-1 md:hover:scale-[1.3] z-10"
              />
              <Image
                src="/showcase3.png"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 md:hover:-rotate-1 md:hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="max-w-6xl m-auto py-20 pb-5 px-4 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-32">
            <div>
              <Logo className="w-40 h-20 mb-10 fill-primary text-primary" />
              <p>{tagline}</p>
            </div>
            <div>
              <p className="!text-black mb-8">Info</p>
              <ul className="flex flex-col gap-4 text-(--paragraph)">
                <li>
                  <RevealLink href="/#showcase">Showcase</RevealLink>
                </li>
                <li>
                  <RevealLink href="/#process">Process</RevealLink>
                </li>
                <li>
                  <RevealLink href="/#faq">FAQs</RevealLink>
                </li>
                <li>
                  <RevealLink href="/booking">Booking</RevealLink>
                </li>
              </ul>
            </div>
            <div>
              <p className="!text-black mb-8">Contact Us</p>
              <ul className="flex flex-col gap-4 text-(--paragraph)">
                <li>
                  <RevealLink href="mailto:jerome@webcraftsman.co">
                    jerome@webcraftsman.co
                  </RevealLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <p className="!text-sm">
                Copyright
                <span className="font-semibold"> ©2025 Webcraftsman</span>. All
                rights reserved.
              </p>
            </div>
            <div>
              <p className="!text-sm">Privacy Policy</p>
            </div>
          </div>
        </div>
        {/* <div className="relative bg-white h-[26vh] flex flex-col justify-center items-center -z-20 overflow-clip">
          <div className="top-0 bg-background rounded-b-3xl w-full p-8 shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <p> Copyright ©Webcraftsman.co </p>
              <p> jerome@Webcraftsman.co</p>
              <p> Follow on instagram </p>
            </div>
          </div>
          <div>
            <Image
              src="/WebcraftsmanCO.png"
              alt="Reveal footer"
              width={1440}
              height={315}
              className="w-full"
            />
          </div>
        </div> */}
      </footer>
    </>
  );
}
