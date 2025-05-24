"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const ICON = require("../../../public/animated_question_icon.json");

export default function AnimatedQuestionIcon(
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
        onComplete={() =>           setTimeout(() => playerRef.current?.playFromBeginning(), 1000)
}
        size={48}
      />
    </div>
  );
}
