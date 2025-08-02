import { FormData } from './types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateStep8 = (formData: FormData): { isValid: boolean; message?: string } => {
  if (!formData.fullName.trim()) {
    return { isValid: false, message: "Please enter your full name" };
  }
  
  if (!formData.email.trim()) {
    return { isValid: false, message: "Please enter your email address" };
  }
  
  if (!validateEmail(formData.email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }
  
  if (!formData.phone.trim()) {
    return { isValid: false, message: "Please enter your phone number" };
  }
  
  return { isValid: true };
};

export const submitFormData = async (formData: FormData): Promise<void> => {
  console.log("Survey Data:", formData);
  
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Here you can integrate with your preferred backend/email service
  // Example:
  // const response = await fetch('/api/survey', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // });
  // 
  // if (!response.ok) {
  //   throw new Error('Failed to submit form');
  // }
};
