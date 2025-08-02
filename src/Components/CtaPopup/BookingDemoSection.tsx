"use client";

import React from "react";
import { motion } from "framer-motion";
import Calcom from "../Booking/DemoCall";
import { LucideCheck } from "../Icons/LucideCheck";
import RoastCallBooking from "../Booking/RoastCall";
import DemoCallBooking from "../Booking/DemoCall";

interface BookingDemoSectionProps {
  formData?: {
    fullName?: string;
    email?: string;
    phone?: string;
    currentWebsiteUrl?: string;
  };
}

export const BookingDemoSection: React.FC<BookingDemoSectionProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      {/* Embedded Booking Widget */}
      <div className="mt-8">
        <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-6">
          Step 2: Schedule Your{" "}
          <span className="highlight">Free Consultation</span>
        </h3>
        <p className="text-gray-600 max-w-md mx-auto text-center">
          We'll dive into your website strategy and discuss how we can help you
        </p>
        <div
          className="bg-gray-50 rounded-xl p-4 max-w-4xl mx-auto mt-16"
          style={{ height: "600px" }}
        >
          <DemoCallBooking
            prefillData={{
              name: formData?.fullName || "",
              email: formData?.email || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};
