import type { Locale } from '@/lib/i18n';

interface Metadata {
  tagline: string;
  description: string;
  siteUrl: string;
}

const localizedMetadata: Record<Locale, Metadata> = {
  en: {
    tagline: "Website design and development for local businesses and SMEs",
    description: "Website design and development for online marketing to increase sales and attract new customers",
    siteUrl: "https://www.webcraftsman.co/en"
  },
  th: {
    tagline: "รับออกแบบและพัฒนาเว็บไซต์ สำหรับธุรกิจท้องถิ่นและ SME",
    description: "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่",
    siteUrl: "https://www.webcraftsman.co/th"
  }
};

export function getMetadata(locale: Locale): Metadata {
  return localizedMetadata[locale] || localizedMetadata.en;
}

// Keep the old exports for backward compatibility
export const tagline = localizedMetadata.th.tagline;
export const description = localizedMetadata.th.description;
export const siteUrl = localizedMetadata.th.siteUrl;