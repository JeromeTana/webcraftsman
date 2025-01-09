import * as motion from "motion/react-client";
import { JSX } from "react";

export function SplitText({
  children,
  ...props
}: {
  children: string;
  [key: string]: any;
}): JSX.Element {
  let words = typeof children === "string" ? children.split(" ") : [];
  return (
    <div>
      {words.map((word, i) => {
        return (
          <div
            key={children + i}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: 0,
                transition: {
                  delay: i * 0.1,
                },
              }}
              {...props}
              style={{ display: "inline-block", willChange: "transform" }}
              custom={i}
            >
              {word + (i !== words.length - 1 ? "\u00A0" : "")}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
