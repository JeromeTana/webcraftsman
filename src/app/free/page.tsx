import AuditForm from "@/Components/AuditForm";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Image from "next/image";
import React from "react";
import { poltawski } from "../fonts";

export default function FreePage() {
  return (
    <section id="free" className="!max-w-2xl w-full">
      <div className="card relative">
        <Image
          src="/large-comet-l.png"
          alt="large comet"
          width={300}
          height={200}
          className="absolute -top-32 -left-24 w-2/3"
        />
        <div className="relative flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="Free" speed={5} />
          </div>
          <h1 className="shaded text-3xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
            Free{" "}
            <span className={`${poltawski.className} italic`}>
              Hero Roasting
            </span>
          </h1>
          <AuditForm />
        </div>
      </div>
    </section>
  );
}
