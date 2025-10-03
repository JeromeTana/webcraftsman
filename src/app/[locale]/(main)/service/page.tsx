import React from "react";
import { getServices } from "@/data/services-i18n";
import ServiceCard from "@/Components/ServiceCard";
import { Metadata } from "next";
import { ServiceSection } from "@/Components/Sections";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";

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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const dict = getDictionary(locale);

  return (
    <>
    <ServiceSection locale={locale} />
    </>
  );
}
