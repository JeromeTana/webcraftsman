import React from "react";
import { getServices } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Frown, X } from "lucide-react";
import { CtaButton } from "@/Components/CtaButton";
import {
  FAQSection,
  IntegrationSection,
  ProcessSection,
  ShowcaseSection,
  TestimonialSection,
  TradeSection,
} from "@/Components/Sections";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";
import { type Locale } from "@/i18n/routing";
import BenefitSection from "@/Components/Sections/BenefitSection";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string; locale: Locale }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;
  const services = getServices(locale);
  const service = services.find((s) => s.url.includes(slug));

  if (!service) {
    return {
      title: "Service Not Found - WEBCRAFTSMAN",
      description: "The service you're looking for doesn't exist.",
    };
  }

  return {
    title: `${service.title} - WEBCRAFTSMAN`,
    description: service.headline,
    openGraph: {
      title: `${service.title} - WEBCRAFTSMAN`,
      description: service.headline,
      url: `https://www.webcraftsman.co/service/${slug}`,
      siteName: "WEBCRAFTSMAN",
      type: "website",
    },
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  const { locales } = await import("@/i18n/routing");

  const params = [];
  for (const locale of locales) {
    const services = getServices(locale);
    for (const service of services) {
      params.push({
        locale,
        slug: service.url.split("/").pop() || "",
      });
    }
  }

  return params;
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  // Find the service based on the slug
  const services = getServices(locale);
  const service = services.find((s) => s.url.includes(slug));

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  return (
    <>
      <section id="hero" className="!p-0 !max-w-full grid xl:grid-cols-2 gap-8">
        {/* Main Content */}
        <div className="p-8 md:p-20 my-auto">
          <div className="gap-6 mb-6">
            <div className="flex items-start gap-4 mb-4 ">
              <div className="text-primary flex-shrink-0">{service.icon}</div>
              <h1 className="text-xl mb-4 text-primary !tracking-normal">
                {service.title}
              </h1>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-relaxed tracking-tight">
              {service.headline}
            </h2>
            <p className="max-w-lg text-xl text-paragraph/90">
              {service.description ||
                "รายละเอียดเพิ่มเติมเกี่ยวกับบริการนี้จะถูกอัปเดตเร็วๆ นี้"}
            </p>
            <div className="w-fit">
              <CtaButton className="relative mt-16" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full bg-primary rounded-l-4xl">
          <Image
            src={service.thumbnail as string}
            alt={`${service.title} Thumbnail`}
            width={1000}
            height={1000}
            className="h-full object-cover rounded-l-4xl"
          />
        </div>
      </section>
      <IntegrationSection locale={locale} />
      <BenefitSection locale={locale} service={service} />
      <TradeSection locale={locale} />
      <ShowcaseSection locale={locale} />
      <ProcessSection locale={locale} />
      <TestimonialSection locale={locale} />
      {/* <FAQSection locale={locale} /> */}
    </>
  );
}
