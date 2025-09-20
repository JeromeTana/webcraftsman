import { MaterialSymbolsStarRounded } from "../Icons/MaterialStar";
import { FormData, ValidationResult, FormErrors } from "./types";

// Validation utility functions
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    return { isValid: false, message: "กรุณากรอกอีเมล" };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "รูปแบบอีเมลไม่ถูกต้อง" };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  const phoneRegex = /^[0-9+\-\s\(\)]{8,15}$/;
  if (!phone.trim()) {
    return { isValid: false, message: "กรุณากรอกเบอร์โทรศัพท์" };
  }
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return { isValid: false, message: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง" };
  }
  return { isValid: true };
};

export const validateFirstName = (firstName: string): ValidationResult => {
  if (!firstName.trim()) {
    return { isValid: false, message: "กรุณากรอกชื่อ" };
  }
  if (firstName.trim().length < 2) {
    return { isValid: false, message: "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร" };
  }
  return { isValid: true };
};

export const validateLastName = (lastName: string): ValidationResult => {
  if (!lastName.trim()) {
    return { isValid: false, message: "กรุณากรอกนามสกุล" };
  }
  if (lastName.trim().length < 2) {
    return { isValid: false, message: "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร" };
  }
  return { isValid: true };
};

export const validateBusinessName = (
  businessName: string
): ValidationResult => {
  if (!businessName.trim()) {
    return { isValid: false, message: "กรุณากรอกชื่อธุรกิจ" };
  }
  if (businessName.trim().length < 2) {
    return { isValid: false, message: "ชื่อธุรกิจต้องมีอย่างน้อย 2 ตัวอักษร" };
  }
  return { isValid: true };
};

export const validateBusinessDescription = (
  description: string
): ValidationResult => {
  if (!description.trim()) {
    return { isValid: false, message: "กรุณากรอกคำอธิบายธุรกิจ" };
  }
  if (description.trim().length < 10) {
    return {
      isValid: false,
      message: "คำอธิบายธุรกิจต้องมีอย่างน้อย 10 ตัวอักษร",
    };
  }
  return { isValid: true };
};

export const validateUrl = (url: string): ValidationResult => {
  if (!url.trim()) {
    return { isValid: true }; // URL is optional
  }
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, message: "รูปแบบ URL ไม่ถูกต้อง" };
  }
};

export const validateRequired = (
  value: string,
  fieldName: string
): ValidationResult => {
  if (!value || !value.trim()) {
    return { isValid: false, message: `กรุณาเลือก${fieldName}` };
  }
  return { isValid: true };
};

export const validateConsent = (consent: boolean): ValidationResult => {
  if (!consent) {
    return { isValid: false, message: "กรุณายินยอมให้ประมวลผลข้อมูลส่วนบุคคล" };
  }
  return { isValid: true };
};

// Form-wide validation functions
export const validateContactStep = (formData: FormData): ValidationResult => {
  const firstNameValidation = validateFirstName(formData.firstName);
  if (!firstNameValidation.isValid) return firstNameValidation;

  const lastNameValidation = validateLastName(formData.lastName);
  if (!lastNameValidation.isValid) return lastNameValidation;

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) return emailValidation;

  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) return phoneValidation;

  const consentValidation = validateConsent(formData.consent);
  if (!consentValidation.isValid) return consentValidation;

  // Website URL is always optional - validate format only if provided
  if (formData.currentWebsiteUrl && formData.currentWebsiteUrl.trim()) {
    const urlValidation = validateUrl(formData.currentWebsiteUrl);
    if (!urlValidation.isValid) return urlValidation;
  }

  return { isValid: true };
};

export const validateBusinessStep = (formData: FormData): ValidationResult => {
  // const businessNameValidation = validateBusinessName(formData.businessName);
  // if (!businessNameValidation.isValid) return businessNameValidation;

  // const businessDescValidation = validateBusinessDescription(formData.businessDescription);
  // if (!businessDescValidation.isValid) return businessDescValidation;

  return { isValid: true };
};

// Individual field validation
export const validateField = (
  field: keyof FormData,
  value: string | boolean,
  formData: FormData
): ValidationResult => {
  switch (field) {
    case "firstName":
      return validateFirstName(value as string);
    case "lastName":
      return validateLastName(value as string);
    case "email":
      return validateEmail(value as string);
    case "phone":
      return validatePhone(value as string);
    case "consent":
      return validateConsent(value as boolean);
    // case 'businessName':
    //   return validateBusinessName(value);
    // case 'businessDescription':
    //   return validateBusinessDescription(value);
    case "currentWebsiteUrl":
      return validateUrl(value as string);
    // case 'mainGoal':
    //   return validateRequired(value, 'เป้าหมายหลัก');
    case "biggestChallenge":
      return validateRequired(value as string, "ปัญหาที่ใหญ่ที่สุด");
    case "timeline":
      return validateRequired(value as string, "ไทม์ไลน์");
    case "budget":
      return validateRequired(value as string, "งบประมาณ");
    case "monthlyRevenue":
      return validateRequired(value as string, "รายได้ต่อเดือน");
    // case 'contentReady':
    //   return validateRequired(value, 'ความพร้อมของเนื้อหา');
    default:
      return { isValid: true };
  }
};

// Get all form errors
export const getFormErrors = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  // Validate all fields
  Object.keys(formData).forEach((key) => {
    const field = key as keyof FormData;
    const validation = validateField(field, formData[field], formData);
    if (!validation.isValid && validation.message) {
      errors[field] = validation.message;
    }
  });

  return errors;
};

// Legacy validation functions (for backward compatibility)
export const validateStep7 = (
  formData: FormData
): { isValid: boolean; message?: string } => {
  const validation = validateBusinessStep(formData);
  return { isValid: validation.isValid, message: validation.message };
};

export const validateStep8 = (
  formData: FormData
): { isValid: boolean; message?: string } => {
  const validation = validateContactStep(formData);
  return { isValid: validation.isValid, message: validation.message };
};

export const submitFormData = async (formData: FormData): Promise<void> => {
  console.log("Survey Data:", formData);

  try {
    const response = await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to submit form");
    }

    const result = await response.json();
    console.log("Form submitted successfully:", result);
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
};

export const renderStars = (rating: number = 5) => {
  return Array.from({ length: rating }, (_, index) => (
    <MaterialSymbolsStarRounded
      key={index}
      className="text-(--accent-yellow)"
      width={24}
      height={24}
      fill="currentColor"
      aria-label={`Star ${index + 1}`}
    />
  ));
};
