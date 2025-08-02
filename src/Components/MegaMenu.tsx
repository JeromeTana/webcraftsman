"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideChevronDown } from "./Icons/LucideChevronDown";

interface MegaMenuSection {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: {
    name: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface MegaMenuProps {
  trigger: string;
  sections: MegaMenuSection[];
  className?: string;
}

export const MegaMenu = ({
  trigger,
  sections,
  className = "",
}: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div className="cursor-pointer flex items-center gap-1">
        <span className="font-medium hover:text-primary transition-colors">
          {trigger}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronDown className="w-4 h-4 text-paragraph" />
        </motion.div>
      </div>

      {/* Mega Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-background/95 backdrop-blur-sm border border-border rounded-2xl z-50 overflow-hidden"
          >
            <div className="p-4">
              <div>
                {sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: sectionIndex * 0.1,
                      ease: "easeOut",
                    }}
                    className="space-y-4"
                  >
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: sectionIndex * 0.1 + itemIndex * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          <a
                            href={item.href}
                            className="flex gap-4 group hover:bg-primary/5 rounded-lg p-3 transition-all duration-200"
                          >
                            {item.icon && (
                              <item.icon className="w-12 h-12 p-3 bg-primary/10 rounded-lg text-primary group-hover:text-primary/80 transition-colors flex-shrink-0" />
                            )}
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-sm group-hover:text-primary transition-colors">
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-xs text-gray-400 group-hover:text-paragraph/80 transition-colors">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
