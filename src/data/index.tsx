export * from "./contact";
export * from "./faqs";
export * from "./metadata";
export * from "./navigations";
export * from "./plans";
export * from "./portfolio";
export * from "./process";
export * from "./services";
export * from "./testimonials";
export * from "./trades";

// Internationalized exports
export { 
  getFaqs,
  faqs as faqsLegacy 
} from "./faqs-i18n";
export { 
  getMetadata,
  tagline as taglineLegacy,
  description as descriptionLegacy,
  siteUrl as siteUrlLegacy
} from "./metadata-i18n";
export { 
  getNavBarLinks, 
  getFooterLinks,
  navBarLinks as navBarLinksLegacy,
  footerLinks as footerLinksLegacy
} from "./navigations-i18n";
export { 
  getProcess,
  process as processLegacy 
} from "./process-i18n";
export { 
  getServices,
  services as servicesLegacy 
} from "./services-i18n";
export { 
  getTestimonials,
  testimonials as testimonialsLegacy 
} from "./testimonials-i18n";
export { 
  getTrades,
  tradeBusinesses as tradeBusinessesLegacy 
} from "./trades-i18n";
