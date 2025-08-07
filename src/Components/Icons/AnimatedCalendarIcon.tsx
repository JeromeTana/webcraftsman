"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("../../../public/animated_calendar_icon.json");

export default function AnimatedCalendarIcon(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.playFromBeginning();
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div {...props}>
      <Player
        ref={playerRef}
        icon={ICON}
        onComplete={() => {
          const timer = setTimeout(() => {
            if (playerRef.current) {
              playerRef.current.playFromBeginning();
            }
          }, 1000);
          return () => clearTimeout(timer);
        }}
        size={50}
      />
    </div>
  );
}
