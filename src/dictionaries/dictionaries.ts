import 'server-only';
import type { Locale } from '@/lib/i18n';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    service: string;
    showcase: string;
    posts: string;
    resources: string;
    booking: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  services: {
    title: string;
    webDevelopment: {
      title: string;
      description: string;
    };
    seo: {
      title: string;
      description: string;
    };
    digitalMarketing: {
      title: string;
      description: string;
    };
  };
  footer: {
    company: string;
    services: string;
    resources: string;
    contact: string;
    rights: string;
  };
  common: {
    readMore: string;
    viewMore: string;
    getStarted: string;
    contactUs: string;
    loading: string;
    error: string;
    close: string;
    submit: string;
    name: string;
    email: string;
    message: string;
    phone: string;
    company: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      service: "Services",
      showcase: "Showcase",
      posts: "Blog",
      resources: "Resources",
      booking: "Book a Call",
      contact: "Contact"
    },
    hero: {
      title: "Transform Your Business with Expert Web Development",
      subtitle: "Professional website development, SEO optimization, and digital marketing solutions",
      cta: "Get Started",
      learnMore: "Learn More"
    },
    services: {
      title: "Our Services",
      webDevelopment: {
        title: "Web Development",
        description: "Custom websites built with modern technologies"
      },
      seo: {
        title: "SEO Optimization",
        description: "Improve your search engine rankings"
      },
      digitalMarketing: {
        title: "Digital Marketing",
        description: "Comprehensive marketing strategies"
      }
    },
    footer: {
      company: "Company",
      services: "Services",
      resources: "Resources",
      contact: "Contact",
      rights: "All rights reserved."
    },
    common: {
      readMore: "Read More",
      viewMore: "View More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      loading: "Loading...",
      error: "Something went wrong",
      close: "Close",
      submit: "Submit",
      name: "Name",
      email: "Email",
      message: "Message",
      phone: "Phone",
      company: "Company"
    }
  },
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      service: "บริการ",
      showcase: "ผลงาน",
      posts: "บล็อก",
      resources: "ทรัพยากร",
      booking: "จองนัดหมาย",
      contact: "ติดต่อ"
    },
    hero: {
      title: "เปลี่ยนธุรกิจของคุณด้วยการพัฒนาเว็บไซต์ระดับมืออาชีพ",
      subtitle: "บริการพัฒนาเว็บไซต์ การปรับปรุง SEO และโซลูชันการตลาดดิจิทัล",
      cta: "เริ่มต้น",
      learnMore: "เรียนรู้เพิ่มเติม"
    },
    services: {
      title: "บริการของเรา",
      webDevelopment: {
        title: "พัฒนาเว็บไซต์",
        description: "เว็บไซต์ที่ปรับแต่งตามความต้องการด้วยเทคโนโลยีที่ทันสมัย"
      },
      seo: {
        title: "ปรับปรุง SEO",
        description: "เพิ่มอันดับการค้นหาของคุณ"
      },
      digitalMarketing: {
        title: "การตลาดดิจิทัล",
        description: "กลยุทธ์การตลาดที่ครอบคลุม"
      }
    },
    footer: {
      company: "บริษัท",
      services: "บริการ",
      resources: "ทรัพยากร",
      contact: "ติดต่อ",
      rights: "สงวนลิขสิทธิ์ทุกประการ"
    },
    common: {
      readMore: "อ่านเพิ่มเติม",
      viewMore: "ดูเพิ่มเติม",
      getStarted: "เริ่มต้น",
      contactUs: "ติดต่อเรา",
      loading: "กำลังโหลด...",
      error: "เกิดข้อผิดพลาด",
      close: "ปิด",
      submit: "ส่ง",
      name: "ชื่อ",
      email: "อีเมล",
      message: "ข้อความ",
      phone: "โทรศัพท์",
      company: "บริษัท"
    }
  }
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.en;
};

export type { Locale } from '@/lib/i18n';