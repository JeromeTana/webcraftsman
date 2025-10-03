import type { Locale } from '@/lib/i18n';

interface Testimonial {
  quote: string;
  description: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    companyLogo: string;
  };
  image: string;
  rating: number;
}

interface LocalizedTestimonial extends Omit<Testimonial, 'quote' | 'description' | 'author'> {
  quote: Record<Locale, string>;
  description: Record<Locale, string>;
  author: {
    name: string;
    title: Record<Locale, string>;
    avatar: string;
    companyLogo: string;
  };
}

const localizedTestimonials: LocalizedTestimonial[] = [
  {
    quote: {
      en: "Truly understands our branding",
      th: "เข้าใจใน branding ของเราจริงๆ"
    },
    description: {
      en: "Created a website that's not just beautiful, but clearly reflects our brand identity",
      th: "ทำให้เว็บไซต์ที่ออกมาไม่ใช่แค่สวย แต่ยังสะท้อนตัวตนของแบรนด์ได้อย่างชัดเจน"
    },
    author: {
      name: "Jatawat Xie",
      title: {
        en: "Founder of Data Echooo",
        th: "ผู้ก่อตั้ง Data Echooo"
      },
      avatar: "/Jatawat_Xie.png",
      companyLogo: "/dataechooo.png",
    },
    image: "/DE_comparison.png",
    rating: 5,
  },
];

export function getTestimonials(locale: Locale): Testimonial[] {
  return localizedTestimonials.map(testimonial => ({
    ...testimonial,
    quote: testimonial.quote[locale] || testimonial.quote.en,
    description: testimonial.description[locale] || testimonial.description.en,
    author: {
      ...testimonial.author,
      title: testimonial.author.title[locale] || testimonial.author.title.en
    }
  }));
}

// Keep the old export for backward compatibility
export const testimonials = getTestimonials('th'); // Default to Thai for existing code