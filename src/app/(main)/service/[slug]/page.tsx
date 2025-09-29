import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Frown, X } from "lucide-react";
import { CtaButton } from "@/Components/CtaButton";
import {
  FAQSection,
  ProcessSection,
  ShowcaseSection,
} from "@/Components/Sections";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
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
  return services.map((service) => ({
    slug: service.url.split("/").pop() || "",
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  // Find the service based on the slug
  const service = services.find((s) => s.url.includes(slug));

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  return (
    <>
      <section id="hero" className="!p-0 !max-w-full grid lg:grid-cols-2 gap-8">
        {/* Main Content */}
        <div className="p-20 my-auto">
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
            <CtaButton className="mt-16" />
          </div>
        </div>
        <div className="w-full h-full max-h-[60vh] bg-primary"> </div>
      </section>
      <section id="problem">
        {/* 3 grid items */}
        <div className="grid md:grid-cols-3 gap-8 my-20">
          {service.problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-8  p-8 border border-border rounded-2xl duration-200"
            >
              <X size={48} className="text-paragraph" />
              <h3 className="text-2xl font-semibold text-paragraph !leading-normal">
                {problem}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section id="benefit">
        {/* 3 grid items */}
        <div className="grid md:grid-cols-3 gap-8 my-20">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-8  p-8 border border-border rounded-2xl duration-200"
            >
              <button className="bg-primary !p-4 !rounded-3xl cta !cursor-default">
                <Check size={48} className="text-white" />
              </button>
              <div>
                <h3 className="text-2xl font-semibold text-paragraph !leading-normal mb-4">
                  {benefit.headline}
                </h3>
                <p className="text-center text-paragraph/80">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <ShowcaseSection /> */}
      <ProcessSection />
      <FAQSection />
    </>
  );
}
