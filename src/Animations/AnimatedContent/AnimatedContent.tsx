"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  stiffness?: number;
  damping?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  stiffness = 80,
  damping = 30,
  threshold = 0.1,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  const directions: Record<"vertical" | "horizontal", string> = {
    vertical: "Y",
    horizontal: "X",
  };

  const variants = {
    hidden: {
      opacity: animateOpacity ? initialOpacity : 1,
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      }) scale(${scale})`,
    },
    visible: {
      opacity: 1,
      transform: `translate${directions[direction]}(0px) scale(1)`,
      transition: {
        type: "spring",
        stiffness: stiffness, // Equivalent to tension
        damping: damping, // Equivalent to friction
        delay: delay / 1000, // Convert delay to seconds
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
