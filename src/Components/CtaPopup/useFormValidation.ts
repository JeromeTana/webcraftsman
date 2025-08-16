import { useState, useCallback } from 'react';
import { FormData, FormErrors } from './types';
import { validateField } from './utils';

export const useFormValidation = (formData: FormData) => {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const validateCurrentField = useCallback((field: keyof FormData, value: string | boolean) => {
    const validation = validateField(field, value, formData);
    setFormErrors(prev => ({
      ...prev,
      [field]: validation.isValid ? undefined : validation.message
    }));
    return validation.isValid;
  }, [formData]);

  const markFieldTouched = useCallback((field: keyof FormData) => {
    setTouchedFields(prev => new Set(prev).add(field));
  }, []);

  const getFieldError = useCallback((field: keyof FormData): string | undefined => {
    return touchedFields.has(field) ? formErrors[field] : undefined;
  }, [touchedFields, formErrors]);

  const markAllFieldsTouched = useCallback((fields: (keyof FormData)[]) => {
    setTouchedFields(prev => {
      const newSet = new Set(prev);
      fields.forEach(field => newSet.add(field));
      return newSet;
    });
  }, []);

  return {
    formErrors,
    touchedFields,
    validateCurrentField,
    markFieldTouched,
    getFieldError,
    markAllFieldsTouched,
  };
};
