"use client";

import React, { useState, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "./AnalysisContactForm";

// Global state for the popup
let triggerAnalysisPopup: (() => void) | null = null;
let closeAnalysisPopup: (() => void) | null = null;

export const openAnalysisPopup = () => {
  if (triggerAnalysisPopup) {
    triggerAnalysisPopup();
  }
};

export const closeAnalysisPopupGlobal = () => {
  if (closeAnalysisPopup) {
    closeAnalysisPopup();
  }
};

export const AnalysisPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = useCallback(() => {
    setIsVisible(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Restore body scroll when popup is closed
    document.body.style.overflow = 'unset';
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  const handleSubmitted = useCallback(() => {
    // Keep the popup open to show the success screen
    console.log("Analysis form submitted successfully");
  }, []);

  // Set global trigger functions
  React.useEffect(() => {
    triggerAnalysisPopup = showPopup;
    closeAnalysisPopup = handleClose;
    
    return () => {
      triggerAnalysisPopup = null;
      closeAnalysisPopup = null;
    };
  }, [showPopup, handleClose]);

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible, handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8 pt-12">
              <ContactForm onSubmitted={handleSubmitted} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
