"use client";

import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  fastDuration: number;
  slowDuration: number;
}
const Marquee = ({ children, fastDuration, slowDuration }: MarqueeProps) => {
  const [duration, setDuration] = useState(fastDuration);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);
  return (
    <div className="relative w-full h-96 overflow-clip">
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{
          x: xTranslation,
        }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(slowDuration);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(fastDuration);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
