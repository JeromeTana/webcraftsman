"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideChevronDown } from "./Icons/LucideChevronDown";

type AccordionProps = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      className="card !py-2 !rounded-2xl cursor-pointer duration-200"
      onClick={() => setIsOpen(!isOpen)}
      initial={false}
    >
      <div className="flex items-center justify-between w-full py-4 text-left">
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="py-4 text-start">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Accordion;
