import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { CtaButton } from "@/Components/CtaButton";

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

  // Service details content (you can customize this based on each service)
  const getServiceContent = (title: string) => {
    const commonBenefits = [
      "ปรึกษาฟรีก่อนเริ่มโปรเจค",
      "รับประกันคุณภาพงาน 100%",
      "ดูแลหลังการขายอย่างใกล้ชิด",
      "ทีมงานมืออาชีพและประสบการณ์สูง",
    ];

    // Return service-specific content or fallback to common benefits
    return {
      features: service.features || commonBenefits,
      process: service.process || [
        "ปรึกษาและวางแผน",
        "ดำเนินการตามแผน",
        "ทดสอบและปรับปรุง",
        "ส่งมอบและดูแล",
      ],
    };
  };

  const serviceContent = getServiceContent(service.title);

  return (
    <section className="min-h-screen">
      <div className="grid lg:grid-cols-1 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-12">
            <div className="md:text-center max-w-5xl m-auto gap-6 mb-6">
              <div className="flex items-start md:justify-center gap-4 mb-4 ">
                <div className="text-primary flex-shrink-0">{service.icon}</div>
                <h1 className="text-xl mb-4 text-primary">{service.title}</h1>
              </div>
              <h2 className="text-4xl md:text-7xl font-semibold leading-tight tracking-tight">
                {service.headline}
              </h2>
              <div className="mt-16 flex justify-center">
                <CtaButton />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-3xl p-8 mb-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">สิ่งที่คุณจะได้รับ</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceContent.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-3xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">ขั้นตอนการดำเนินงาน</h2>
            <div className="space-y-6">
              {serviceContent.process.map((step: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {/* <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 border border-border sticky top-32">
            <h3 className="text-xl font-semibold mb-6">
              พร้อมเริ่มต้นแล้วใช่ไหม?
            </h3>
            <p className="text-gray-600 mb-6">
              ปรึกษาฟรี!
              เราจะช่วยวิเคราะห์ความต้องการและแนะนำแผนที่เหมาะสมกับธุรกิจของคุณ
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">ปรึกษาฟรีไม่มีค่าใช้จ่าย</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">รับคำตอบภายใน 24 ชม.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm">ไม่มีการบังคับซื้อ</span>
              </div>
            </div>

            <Link href="/quote">
              <button className="cta w-full justify-center">
                ขอใบเสนอราคาฟรี
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
