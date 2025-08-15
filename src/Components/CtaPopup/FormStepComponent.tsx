"use client";

import React from "react";
import { motion } from "framer-motion";
import { FormStep, FormData } from "./types";

interface FormStepComponentProps {
  step: FormStep;
  formData: FormData;
  onOptionSelect: (field: keyof FormData, value: string) => void;
  onInputChange: (field: keyof FormData, value: string) => void;
  onInputBlur?: (field: keyof FormData) => void;
  getFieldError?: (field: keyof FormData) => string | undefined;
}

export const FormStepComponent: React.FC<FormStepComponentProps> = ({
  step,
  formData,
  onOptionSelect,
  onInputChange,
  onInputBlur,
  getFieldError,
}) => {
  const renderSelectStep = () => (
    <div className="grid grid-cols-1 gap-3">
      {step.options?.map((option) => (
        <button
          key={option}
          onClick={() => onOptionSelect(step.field, option)}
          className={`p-4 rounded-full border transition-all duration-200 text-center cursor-pointer ${
            formData[step.field] === option
              ? "border-primary bg-blue-50 text-blue-700"
              : "border-gray-200 hover:border-gray-300 text-gray-700"
          }`}
        >
          <span className="font-medium">{option}</span>
        </button>
      ))}
    </div>
  );

  // Business step disabled - fields not currently used
  // const renderBusinessStep = () => (
  //   <div className="space-y-4">
  //     <div>
  //       <label
  //         htmlFor="businessName"
  //         className="block text-sm font-medium text-gray-700 mb-2"
  //       >
  //         ชื่อธุรกิจ
  //       </label>
  //       <input
  //         id="businessName"
  //         type="text"
  //         value={formData.businessName}
  //         onChange={(e) => onInputChange("businessName", e.target.value)}
  //         onBlur={() => onInputBlur?.("businessName")}
  //         className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
  //         placeholder="กรอกชื่อธุรกิจของคุณ"
  //         autoFocus
  //       />
  //       {getFieldError?.("businessName") && (
  //         <p className="!text-red-500 text-sm mt-1">{getFieldError("businessName")}</p>
  //       )}
  //     </div>
  //     <div>
  //       <label
  //         htmlFor="businessDescription"
  //         className="block text-sm font-medium text-gray-700 mb-2"
  //       >
  //         คำอธิบายธุรกิจคร่าว ๆ
  //       </label>
  //       <textarea
  //         id="businessDescription"
  //         value={formData.businessDescription}
  //         onChange={(e) => onInputChange("businessDescription", e.target.value)}
  //         onBlur={() => onInputBlur?.("businessDescription")}
  //         className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent h-24 resize-none"
  //         placeholder="กรอกคำอธิบายธุรกิจของคุณคร่าว ๆ ว่าทำเกี่ยวกับอะไร ตอนนี้เป็นอย่างไร"
  //       />
  //       {getFieldError?.("businessDescription") && (
  //         <p className="!text-red-500 text-sm mt-1">{getFieldError("businessDescription")}</p>
  //       )}
  //     </div>
  //   </div>
  // );

  const renderContactStep = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ชื่อ
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            onBlur={() => onInputBlur?.("firstName")}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="กรอกชื่อของคุณ"
          />
          {getFieldError?.("firstName") && (
            <p className="!text-red-500 !text-sm mt-1">{getFieldError("firstName")}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            นามสกุล
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => onInputChange("lastName", e.target.value)}
            onBlur={() => onInputBlur?.("lastName")}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="กรอกนามสกุลของคุณ"
          />
          {getFieldError?.("lastName") && (
            <p className="!text-red-500 !text-sm mt-1">{getFieldError("lastName")}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          อีเมล
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          onBlur={() => onInputBlur?.("email")}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="กรอกอีเมลของคุณ"
        />
        {getFieldError?.("email") && (
          <p className="!text-red-500 !text-sm mt-1">{getFieldError("email")}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          เบอร์โทรศัพท์
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          onBlur={() => onInputBlur?.("phone")}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="กรอกเบอร์โทรศัพท์ของคุณ"
        />
        {getFieldError?.("phone") && (
          <p className="!text-red-500 !text-sm mt-1">{getFieldError("phone")}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="currentWebsiteUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          URL เว็บไซต์ปัจจุบัน (ไม่บังคับ)
        </label>
        <input
          id="currentWebsiteUrl"
          type="url"
          value={formData.currentWebsiteUrl}
          onChange={(e) => onInputChange("currentWebsiteUrl", e.target.value)}
          onBlur={() => onInputBlur?.("currentWebsiteUrl")}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="https://yourwebsite.com (ไม่บังคับ)"
        />
        {getFieldError?.("currentWebsiteUrl") && (
          <p className="!text-red-500 !text-sm mt-1">{getFieldError("currentWebsiteUrl")}</p>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-3xl !leading-12 mb-8 font-semibold text-gray-900 text-center">
        {step.question}
      </h3>
      {step.type === "select" && renderSelectStep()}
      {/* {step.type === "business" && renderBusinessStep()} */}
      {step.type === "contact" && renderContactStep()}
    </motion.div>
  );
};
