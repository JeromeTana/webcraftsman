"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function LightRay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Image
        src="/ray.png"
        alt="light ray"
        width={600}
        height={487}
        className="absolute top-0 left-0 w-1/2 -z-10"
      />
    </motion.div>
  );
}
