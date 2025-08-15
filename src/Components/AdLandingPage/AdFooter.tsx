"use client";

import React from "react";
import Logo from "../Icons/Logo";

const AdFooter: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-flex gap-4 items-center sm:text-2xl font-semibold tracking-tight">
            <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
            <span>WEBCRAFTSMAN</span>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-gray-400 text-sm">
            © 2025 WEBCRAFTSMAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AdFooter;
