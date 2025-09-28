import React from "react";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

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
    description: service.description,
    openGraph: {
      title: `${service.title} - WEBCRAFTSMAN`,
      description: service.description,
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
      process: service.process || ["ปรึกษาและวางแผน", "ดำเนินการตามแผน", "ทดสอบและปรับปรุง", "ส่งมอบและดูแล"],
    };
  };

  const serviceContent = getServiceContent(service.title);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link href="/service" className="hover:text-primary">
              บริการ
            </Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Back Button */}
        <Link
          href="/service"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          กลับไปหน้าบริการ
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-primary flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">สิ่งที่คุณจะได้รับ</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceContent.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
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
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-8">
              <h3 className="text-xl font-semibold mb-6">พร้อมเริ่มต้นแล้วใช่ไหม?</h3>
              <p className="text-gray-600 mb-6">
                ปรึกษาฟรี! เราจะช่วยวิเคราะห์ความต้องการและแนะนำแผนที่เหมาะสมกับธุรกิจของคุณ
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">ปรึกษาฟรีไม่มีค่าใช้จ่าย</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">รับคำตอบภายใน 24 ชม.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">ไม่มีการบังคับซื้อ</span>
                </div>
              </div>

              <Link href="/quote">
                <button className="cta w-full justify-center">
                  ขอใบเสนอราคาฟรี
                </button>
              </Link>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-600 mb-2">หรือติดต่อโดยตรง</p>
                <a
                  href="tel:+66123456789"
                  className="text-primary font-semibold hover:underline"
                >
                  091-111-5846
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">บริการอื่นๆ ที่น่าสนใจ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.title !== service.title)
              .slice(0, 3)
              .map((relatedService, index) => (
                <Link
                  key={index}
                  href={`/service/${relatedService.url.split("/").pop()}`}
                  className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {relatedService.icon}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedService.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}