import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-white h-72 flex justify-center items-center -z-20 overflow-clip">
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
  );
}
