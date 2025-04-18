"use client";

import Image from "next/image";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const slidesImg = [
  "/DevWhoLifts.png",
  "/IronLift.png",
  "/JeromeTana.png",
  "/FitDad.png",
];

const FAST_DURATION = 20;
const SLOW_DURATION = 40;

export default () => {
  const [duration, setDuration] = useState(FAST_DURATION);

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
    <div className="relative w-full h-96">
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{
          x: xTranslation,
        }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...slidesImg, ...slidesImg].map((img, index) => (
          <div
            key={index}
            className="relative aspect-video w-80 md:w-xl rounded-3xl overflow-hidden"
          >
            <Image
              src={img}
              alt="work"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top group-hover:scale-105 duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
