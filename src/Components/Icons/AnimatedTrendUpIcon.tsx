"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("../../../public/animated_trend-up_icon.json");

export default function AnimatedTrendUpIcon(
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
        size={24}
      />
    </div>
  );
}

