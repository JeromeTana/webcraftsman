import * as motion from "motion/react-client";

export function SplitText({ children, ...props }: { children: any }) {
  let words = typeof children === "string" ? children.split(" ") : [];
  return words.map((word, i) => {
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
  });
}
