"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data";

// Form validation schemas
const step1Schema = z.object({
  service: z.string().min(1, "กรุณาเลือกบริการที่สนใจ"),
  websiteUrl: z.string().optional().default(""),
  businessDescription: z
    .string()
    .min(1, "กรุณาอธิบายเกี่ยวกับธุรกิจของคุณคร่าว ๆ"),
  timeline: z.string().min(1, "กรุณาเลือกระยะเวลา"),
  budget: z.string().min(1, "กรุณาเลือกช่วงงบประมาณ"),
});

const step2Schema = z.object({
  fullName: z.string().min(1, "โปรดระบุชื่อ-นามสกุล"),
  email: z.string().min(1, "โปรดงระบุอีเมล").email("กรุณาระบุอีเมลที่ถูกต้อง"),
  phone: z.string().min(1, "โปรดระบุหมายเลขโทรศัพท์"),
  company: z.string().optional().default(""),
  consent: z
    .boolean()
    .refine((val) => val === true, "โปรดรับการประมวลผลข้อมูลของคุณ"),
});

const completeFormSchema = step1Schema.merge(step2Schema);

type QuoteFormData = z.infer<typeof completeFormSchema>;

const timelineOptions = [
  "ด่วน (ภายใน 2 สัปดาห์)",
  "1 เดือน",
  "3 เดือน",
  "6 เดือน",
];

const budgetOptions = [
  "10,000 - 30,000 บาท",
  "30,000 - 50,000 บาท",
  "50,000 - 100,000 บาท",
  "100,000 - 250,000 บาท",
];

interface QuoteFormProps {
  onSubmitted?: () => void;
}

export default function QuoteForm({ onSubmitted }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form with react-hook-form
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(completeFormSchema),
    mode: "onChange" as const,
    defaultValues: {
      service: "",
      websiteUrl: "",
      businessDescription: "",
      timeline: "",
      budget: "",
      fullName: "",
      email: "",
      phone: "",
      company: "",
      consent: false,
    },
  });

  const validateStep1 = async (): Promise<boolean> => {
    const step1Fields = [
      "service",
      "businessDescription",
      "timeline",
      "budget",
    ] as const;
    return await trigger(step1Fields);
  };

  const validateStep2 = async (): Promise<boolean> => {
    const step2Fields = ["fullName", "email", "phone", "consent"] as const;
    return await trigger(step2Fields);
  };

  const handleNextStep = async () => {
    if (await validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: "2-step-quote-form",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit quote request");
      }

      setIsSubmitted(true);

      // Handle analytics tracking if available
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "quote_form_completed", {
          event_category: "engagement",
          event_label: "quote_request",
        });
      }

      onSubmitted?.();
    } catch (error) {
      console.error("Quote form submission failed:", error);
      alert("เกิดข้อผิดพลาดในการส่งคำขอใบเสนอราคา กรุณาลองอีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === 1) {
      await handleNextStep();
      return;
    }

    // For step 2, use react-hook-form's handleSubmit
    await handleSubmit(onSubmit)();
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            ส่งคำขอใบเสนอราคาสำเร็จ
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            ขอบคุณสำหรับความสนใจ! เราจะติดต่อกลับพร้อมข้อเสนอที่เหมาะสมภายใน 24
            ชั่วโมง
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">ขั้นตอนต่อไป</h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                เราจะตรวจสอบความต้องการของคุณและจัดทำข้อเสนอโดยละเอียด
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                คุณจะได้รับใบเสนอราคาที่เหมาะสมทางอีเมลภายใน 24 ชั่วโมง
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                เราจะจัดการพูดคุยสำหรับหารือโปรเจกต์ของคุณอย่างละเอียด
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-8">
      {currentStep === 1 ? (
        <>
          {/* Step 1: Project Details */}
          {/* Service Selection */}
          <div className="space-y-3">
            <label
              htmlFor="service"
              className="block text-lg font-semibold text-gray-900"
            >
              สนใจรับบริการใด
            </label>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="service"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                    errors.service ? "border-red-500" : ""
                  }`}
                >
                  <option value="">เลือกบริการ...</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>

          {/* Current Website */}
          <div className="space-y-3">
            <label
              htmlFor="websiteUrl"
              className="block text-lg font-semibold text-gray-900"
            >
              เว็บไซต์ปัจจุบัน (ถ้ามี)
            </label>
            <Controller
              name="websiteUrl"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="url"
                  id="websiteUrl"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              )}
            />
          </div>

          {/* Business Description */}
          <div className="space-y-3">
            <label
              htmlFor="businessDescription"
              className="block text-lg font-semibold text-gray-900"
            >
              บอกเราเกี่ยวกับธุรกิจของคุณ
            </label>
            <Controller
              name="businessDescription"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="businessDescription"
                  placeholder="อธิบายเกี่ยวกับธุรกิจ กลุ่มลูกค้าเป้าหมาย เป้าหมายที่ต้องการบรรลุ ปัญหาที่ต้องการแก้ไข และความต้องการเฉพาะอื่นๆ..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              )}
            />
            {errors.businessDescription && (
              <p className="text-red-500 text-sm">
                {errors.businessDescription.message}
              </p>
            )}
          </div>

          {/* Timeline and Budget - Side by Side */}
          <div className="grid gap-6">
            {/* Timeline */}
            <div className="space-y-3">
              <label
                htmlFor="timeline"
                className="block text-lg font-semibold text-gray-900"
              >
                ระยะเวลาดำเนินการ
              </label>
              <Controller
                name="timeline"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="timeline"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                      errors.timeline ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">เลือกระยะเวลา...</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.timeline && (
                <p className="text-red-500 text-sm">
                  {errors.timeline.message}
                </p>
              )}
            </div>

            {/* Budget */}
            <div className="space-y-3">
              <label
                htmlFor="budget"
                className="block text-lg font-semibold text-gray-900"
              >
                ช่วงงบประมาณ
              </label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="budget"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                      errors.budget ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">เลือกช่วงงบประมาณ...</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.budget && (
                <p className="text-red-500 text-sm">{errors.budget.message}</p>
              )}
            </div>
          </div>

          {/* Next Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="cta w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              ถัดไป
              <ArrowRight />
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Step 2: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ข้อมูลการติดต่อ
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  ชื่อ-นามสกุล
                </label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Jerome Tana"
                    />
                  )}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  บริษัท (ถ้ามี)
                </label>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="ชื่อบริษัทของคุณ"
                    />
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  ที่อยู่อีเมล
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="jerome@example.com"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  หมายเลขโทรศัพท์
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 pt-4">
              <Controller
                name="consent"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <input
                    type="checkbox"
                    id="consent"
                    name={name}
                    ref={ref}
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                )}
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-600 leading-relaxed"
              >
                ฉันยอมรับการประมวลผลข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ในการจัดการคำขอใบเสนอราคานี้
                ฉันเข้าใจว่าฉันสามารถถอนความยินยอมได้ตลอดเวลาโดยติดต่อคุณโดยตรง
                ข้อมูลของฉันจะถูกจัดการตาม{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  นโยบายความเป็นส่วนตัว
                </a>
                .
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent.message}</p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  กำลังดำเนินการ...
                </>
              ) : (
                <>
                  ขอใบเสนอราคาฟรี
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
