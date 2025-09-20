import React from "react";

export default function PulsingDot() {
  return (
    <div className="relative flex items-center">
      <div className="w-3 h-3 rounded-full bg-accent-green" />
      <div className="w-3 h-3 rounded-full bg-accent-green animate-ping absolute" />
    </div>
  );
}
