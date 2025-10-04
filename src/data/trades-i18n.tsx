import type { Locale } from '@/i18n/routing';

export interface TradesData {
  sectionTitle: string;
  heading: string;
  businesses: string[];
}

const localizedTrades: Record<Locale, TradesData> = {
  en: {
    sectionTitle: "Industries We Specialize In",
    heading: "We specialize in working with local businesses",
    businesses: [
      "Landscaping & Tree Care",
      "Solar Panel Installation",
      "Building Renovation",
      "Swimming Pool Construction",
      "General Contracting",
      "Roofing Services",
      "Real Estate",
      "Home Repair Services",
      "Interior Design",
    ]
  },
  th: {
    sectionTitle: "กลุ่มธุรกิจที่เราเชี่ยวชาญ",
    heading: "พวกเรา เชี่ยวชาญ ในการทำงานกับ ธุรกิจท้องถิ่นและ SME โดยเฉพาะ",
    businesses: [
      "ธุรกิจจัดสวน ดูแลต้นไม้",
      "ธุรกิจโซล่าเซลล์",
      "ธุรกิจรีโนเวทอาคาร",
      "ธุรกิจสร้างสระว่ายน้ำ",
      "ธุรกิจรับเหมา",
      "ธุรกิจปูหลังคา",
      "ธุรกิจอสังหาริมทรัพย์",
      "ธุรกิจซ่อมแซมบ้าน",
      "ธุรกิจตกแต่งภายใน",
    ]
  }
};

export function getTrades(locale: Locale): TradesData {
  return localizedTrades[locale] || localizedTrades.en;
}

// Legacy export for backward compatibility
export const tradeBusinesses = localizedTrades.th.businesses;

export type { Locale };
