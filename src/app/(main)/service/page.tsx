import React from "react";
import { services } from "@/data/services";
import ServiceCard from "@/Components/ServiceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการของเรา - WEBCRAFTSMAN",
  description:
    "บริการด้านการสร้างเว็บไซต์, SEO, Marketing Digital และ Automation ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน",
  openGraph: {
    title: "บริการของเรา - WEBCRAFTSMAN",
    description:
      "บริการด้านการสร้างเว็บไซต์, SEO, Marketing Digital และ Automation ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน",
    url: "https://www.webcraftsman.co/service",
    siteName: "WEBCRAFTSMAN",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            บริการของเรา
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            เราให้บริการด้านการสร้างเว็บไซต์, SEO, Marketing Digital และ Automation 
            ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={`/service/${service.url.split("/").pop()}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            พร้อมที่จะเริ่มต้นกับเราแล้วใช่ไหม?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            ปรึกษาฟรี! เราจะช่วยวิเคราะห์ความต้องการและแนะนำแผนที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote">
              <button className="cta">
                ขอใบเสนอราคาฟรี
              </button>
            </a>
            <a 
              href="tel:+66911115846" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              โทร 091-111-5846
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
