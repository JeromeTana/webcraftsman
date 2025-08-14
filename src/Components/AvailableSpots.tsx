import React from "react";
import ShinyText from "./ShinyText/ShinyText";

export default function AvailableSpots() {
  return (
    <div className="pill text-accent-green flex items-center gap-4 m-auto">
      <div className="relative flex items-center">
        <div className="w-3 h-3 rounded-full bg-accent-green" />
        <div className="w-3 h-3 rounded-full bg-accent-green animate-ping absolute" />
      </div>
      {/* <ShinyText
        text={
          "2 spots left for " +
          new Date().toLocaleString("default", {
            month: "long",
          })
        }
        speed={5}
        className="text-black"
      /> */}
      <p className="!text-black">รับออกแบบ และพัฒนาเว็บไซต์</p>
    </div>
  );
}
