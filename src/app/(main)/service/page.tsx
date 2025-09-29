import React from "react";
import { services } from "@/data/services";
import ServiceCard from "@/Components/ServiceCard";
import { Metadata } from "next";
import { ServiceSection } from "@/Components/Sections";

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
    <>
    <ServiceSection/>
    </>
  );
}
