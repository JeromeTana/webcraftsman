// Re-export core data files
export * from "./contact";
export * from "./portfolio";

// Internationalized exports with backward compatibility
export { 
  getFaqs
} from "./faqs-i18n";

export { 
  getMetadata,
  // Backward compatibility exports for legacy imports
  tagline,
  description,
  siteUrl
} from "./metadata-i18n";

export { 
  getNavBarLinks, 
  getFooterLinks
} from "./navigations-i18n";

export { 
  getProcess
} from "./process-i18n";

export { 
  getServices
} from "./services-i18n";

export { 
  getTestimonials
} from "./testimonials-i18n";

export { 
  getTrades
} from "./trades-i18n";
