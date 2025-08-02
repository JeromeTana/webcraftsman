"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideX } from "../Icons/LucideX";
import { CtaPopupProps } from './types';
import { SurveyForm } from './SurveyForm';

// Global function to trigger popup from anywhere
let triggerCtaPopup: (() => void) | null = null;

export const openCtaPopup = () => {
  if (triggerCtaPopup) {
    triggerCtaPopup();
  }
};

const SESSION_STORAGE_KEY = "ctaPopupShown";
const POPUP_DELAY = 3000; // 3 seconds
const INTERSECTION_THRESHOLD = 0.5; // 50%

export const CtaPopup: React.FC<CtaPopupProps> = ({
  triggerSelector = ".cta-section",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const showPopup = useCallback(() => {
    setIsVisible(true);
    setHasBeenShown(true);
    sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      // Uncomment if you want to close on backdrop click
      // handleClose();
    }
  }, []);

  const handleSubmitted = useCallback(() => {
    // Additional logic when form is submitted
    console.log("Form submitted successfully");
  }, []);

  useEffect(() => {
    // Register the trigger function
    triggerCtaPopup = showPopup;

    // Check if popup has been shown in this session
    const popupShownInSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (popupShownInSession === "true") {
      setHasBeenShown(true);
      return;
    }

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenShown) {
            // Add delay before showing popup
            setTimeout(() => {
              if (!hasBeenShown) { // Double check to prevent race conditions
                showPopup();
              }
            }, POPUP_DELAY);
          }
        });
      },
      {
        threshold: INTERSECTION_THRESHOLD,
        rootMargin: "0px",
      }
    );

    // Observe all CTA sections
    const ctaSections = document.querySelectorAll(triggerSelector);
    ctaSections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Clean up the global trigger function
      triggerCtaPopup = null;
    };
  }, [triggerSelector, hasBeenShown, showPopup]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-[9999] bg-white flex justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 rounded-full transition-colors z-10 cursor-pointer hover:bg-gray-100"
            aria-label="Close popup"
          >
            <LucideX className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
            className="bg-white pt-12 md:p-12 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {children || <SurveyForm onSubmitted={handleSubmitted} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
