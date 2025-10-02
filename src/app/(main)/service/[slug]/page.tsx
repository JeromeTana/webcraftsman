import React from "react";
import { services } from "@/data/services";
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
      <section id="hero" className="!p-0 !max-w-full grid xl:grid-cols-2 gap-8">
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
            <div className="w-fit">
              <CtaButton className="relative mt-16" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full bg-primary">
          <Image
            src={service.thumbnail as string}
            alt={`${service.title} Thumbnail`}
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
        </div>
      </section>
      <IntegrationSection />
      {/* <section id="problem">
        <AnimatedContent
          distance={100}
          direction="vertical"
          initialOpacity={0.05}
          animateOpacity
          damping={10}
          stiffness={50}
          scale={0.9}
          threshold={0.2}
        >
          <h2 className="text-4xl md:text-5xl !mb-0 !pb-0 shaded text-center">
            ปัญหาที่เจ้าของธุรกิจมักเจอ
          </h2>
        </AnimatedContent>
        <div className="grid md:grid-cols-3 gap-8 my-20">
          {service.problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-8  p-8 border border-border rounded-2xl duration-200"
            >
              <X size={48} className="text-paragraph opacity-80" />
              <h3 className="text-2xl font-semibold text-paragraph/80 !leading-normal">
                {problem}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section id="benefit">
        <AnimatedContent
          distance={100}
          direction="vertical"
          initialOpacity={0.05}
          animateOpacity
          damping={10}
          stiffness={50}
          scale={0.9}
          threshold={0.2}
        >
          <h2 className="text-4xl md:text-5xl !mb-0 !pb-0 shaded text-center">
            ประโยชน์ที่คุณจะได้รับจากบริการนี้
          </h2>
        </AnimatedContent>
        <div className="space-y-48 my-20 px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="aspect-video bg-primary rounded-3xl"></div>
            <div>
              <h3 className="text-4xl font-semibold !leading-normal mb-4">
                {service.benefits[0].headline}
              </h3>
              <p className="mt-4 text-paragraph/80">
                {service.benefits[0].description}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-semibold !leading-normal mb-4">
                {service.benefits[1].headline}
              </h3>
              <p className="mt-4 text-paragraph/80">
                {service.benefits[1].description}
              </p>
            </div>
            <div className="aspect-video bg-primary rounded-3xl"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="aspect-video bg-primary rounded-3xl"></div>
            <div>
              <h3 className="text-4xl font-semibold !leading-normal mb-4">
                {service.benefits[2].headline}
              </h3>
              <p className="mt-4 text-paragraph/80">
                {service.benefits[2].description}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <ShowcaseSection /> */}
      <TradeSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
