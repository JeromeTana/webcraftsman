"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AuditUrlInput from "./AuditUrlInput";
interface MobileCTAProps {
  className?: string;
}

export default function MobileCTA({ className }: MobileCTAProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ${className || ""}`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleExpanded}
        className="w-full p-4 flex items-center justify-between"
        aria-label={isExpanded ? "Hide audit form" : "Show audit form"}
      >
        <span className="text-xl font-semibold">Get Your FREE Website Audit</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-4 pt-0">
          <AuditUrlInput />
        </div>
      </div>
    </div>
  );
}
