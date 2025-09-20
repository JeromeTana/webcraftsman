import React from "react";
import ShinyText from "./ShinyText/ShinyText";
import PulsingDot from "./PulsingDot";

export default function AvailableSpots() {
  return (
    <div className="pill text-accent-green flex items-center gap-4 m-auto">
      <PulsingDot />
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
