"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface JeromeProfileProps {
  currentStep: number;
  helpText: string;
}

export const JeromeProfile: React.FC<JeromeProfileProps> = ({ 
  currentStep, 
  helpText 
}) => {
  return (
    <div className="flex items-start gap-8 mt-20">
      <div className="flex-shrink-0">
        <Image
          src="/jerome_pfp.png"
          alt="Jerome Tana"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="relative p-6 rounded-xl bg-foreground"
        >
          {/* Triangle */}
          <div className="w-4 h-4 bg-foreground absolute -left-2 top-8 rotate-45"></div>
          <div className="absolute -left-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-white border-b-4 border-b-transparent"></div>
          <p className="text-gray-600">
            {helpText}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
