"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavDropdownItem {
  name: string;
  url: string;
  description?: string;
  icon?: () => React.ReactNode;
}

interface NavDropdownProps {
  trigger: string;
  items: NavDropdownItem[];
  locale: string;
  className?: string;
}

export const ServiceDropdown = ({
  trigger,
  items,
  locale,
  className = "",
}: NavDropdownProps) => {
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
      <div className="cursor-pointer flex items-center gap-2">
        <span className="font-medium hover:text-primary transition-colors">
          {trigger}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-paragraph" />
        </motion.div>
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-background border border-border rounded-2xl z-50 overflow-hidden"
          >
            <div className="p-4">
              <ul className="space-y-2">
                {items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: itemIndex * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={`/${locale}${item.url}`}
                      className="flex gap-3 group hover:bg-primary/5 rounded-lg p-3 transition-all duration-200"
                    >
                      {item.icon && (
                      <div className="w-10 h-10 p-2 bg-primary/10 rounded-md text-primary group-hover:text-primary/80 transition-colors flex-shrink-0 flex items-center justify-center">
                        {item.icon()}
                      </div>
                      )}
                      <div className="flex flex-col gap-1 flex-1">
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      {item.description && (
                        <div className="text-xs text-gray-400 group-hover:text-paragraph/80 transition-colors line-clamp-1">
                        {item.description}
                        </div>
                      )}
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};