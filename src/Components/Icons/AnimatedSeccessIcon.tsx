"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("../../../public/animated_success_icon.json");

export default function AnimatedSuccessIcon({
  size,
  ...props
}: { size?: number } & React.HTMLAttributes<HTMLDivElement>) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    setTimeout(() => playerRef.current?.playFromBeginning(), 1000);
  }, []);

  return (
    <div {...props}>
      <Player
        ref={playerRef}
        icon={ICON}
        onComplete={() =>
          setTimeout(() => playerRef.current?.playFromBeginning(), 1000)
        }
        size={size}
      />
    </div>
  );
}
