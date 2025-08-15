"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideClock } from "@/Components/Icons/LucideClock";

const AdUrgency: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const urgencyReasons = [
    {
      icon: "⚡",
      title: "Limited Analysis Spots",
      description: "We only analyze 50 websites per week to ensure quality"
    },
    {
      icon: "🎯",
      title: "Expert Availability",
      description: "Our conversion specialists have limited capacity"
    },
    {
      icon: "💰",
      title: "Free Offer Ends Soon",
      description: "This $299 analysis will return to paid after promotion"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50 border-y border-red-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            <LucideClock className="w-4 h-4" />
            <span className="font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ⏰ Free Analysis Ends In:
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-lg min-w-[80px]">
              <div className="text-3xl font-bold text-red-600">{formatTime(timeLeft.hours)}</div>
              <div className="text-sm text-gray-600 font-medium">Hours</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg min-w-[80px]">
              <div className="text-3xl font-bold text-red-600">{formatTime(timeLeft.minutes)}</div>
              <div className="text-sm text-gray-600 font-medium">Minutes</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg min-w-[80px]">
              <div className="text-3xl font-bold text-red-600">{formatTime(timeLeft.seconds)}</div>
              <div className="text-sm text-gray-600 font-medium">Seconds</div>
            </div>
          </div>
        </motion.div>

        {/* Urgency Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {urgencyReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl mb-3">{reason.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scarcity Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto"
        >
          <h3 className="font-bold text-gray-900 mb-4">Analysis Spots Remaining This Week</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Available Spots:</span>
              <span className="font-bold text-red-600">7 out of 50</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-red-500 h-3 rounded-full relative"
                style={{ width: '86%' }}
              >
                <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              86% of spots taken • Only 7 remaining
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#lead-form"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            🚨 Claim My Spot Before It's Gone
          </a>
          <p className="text-sm text-gray-600 mt-3">
            Don't miss out • Next free analysis available in 2 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdUrgency;
