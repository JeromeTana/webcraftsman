"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("../../../public/animated_arrow_icon.json");

export default function AnimatedArrowIcon(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
              setTimeout(() => playerRef.current?.playFromBeginning(), 1000)
;
  }, []);

  return (
    <div {...props}>
      <Player
        ref={playerRef}
        icon={ICON}
        onComplete={() =>
          setTimeout(() => playerRef.current?.playFromBeginning(), 1000)
        }
        size={50}
      />
    </div>
  );
}
