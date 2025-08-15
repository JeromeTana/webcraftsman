import React from "react";
import { motion } from "framer-motion";
import { LucideUsers } from "@/Components/Icons/LucideUsers";
import { LucideTrendingUp } from "@/Components/Icons/LucideTrendingUp";
import Image from "next/image";

const AdSocialProof: React.FC = () => {
  const stats = [
    {
      icon: LucideUsers,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses we've helped grow online"
    },
    {
      icon: LucideTrendingUp,
      number: "200%",
      label: "Average Sales Increase",
      description: "Results after our optimization"
    },
    {
      icon: LucideUsers,
      number: "24hrs",
      label: "Delivery Time",
      description: "Get your analysis quickly"
    }
  ];

  const logos = [
    { name: "DataEcho", src: "/dataechooo.webp" },
    { name: "ContentCreator", src: "/contentcreatorcom.webp" },
    { name: "DevWhoLifts", src: "/DevWhoLifts.webp" },
    { name: "WhatsYourDream", src: "/whatsyourdream.webp" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="font-medium text-gray-700 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by growing businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            No Long-term Contracts
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            100% Money Back Guarantee
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            Expert-Driven Analysis
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdSocialProof;
