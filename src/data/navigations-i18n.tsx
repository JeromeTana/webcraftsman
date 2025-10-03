import { contact } from "./contact";
import { getServices } from "./services-i18n";
import type { Locale } from '@/i18n/routing';

interface DropdownItem {
  name: string;
  url: string;
  description?: string;
  icon?: () => React.ReactNode;
}

interface NavBarLink {
  title: string;
  url: string;
  dropdown?: DropdownItem[];
}

interface FooterSection {
  section: string;
  links: { title: string; url: string }[];
}

function getNavBarLinks(locale: Locale): NavBarLink[] {
  const services = getServices(locale);
  
  const navTitles = {
    en: {
      about: "About",
      services: "Services"
    },
    th: {
      about: "เกี่ยวกับเรา",
      services: "บริการ"
    }
  };

  // Fallback to English if locale not found
  const titles = navTitles[locale] || navTitles.en;

  return [
    { title: titles.about, url: "/about" },
    {
      title: titles.services,
      url: "/service",
      dropdown: services.map((service) => ({
        name: service.title,
        url: service.url,
        description: service.headline.substring(0, 80) + "...",
        icon: () => <div>{service.icon}</div>,
      })),
    },
  ];
}

function getFooterLinks(locale: Locale): FooterSection[] {
  const services = getServices(locale);
  
  const sectionTitles = {
    en: {
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      about: "About"
    },
    th: {
      quickLinks: "ลิงก์ด่วน",
      services: "บริการ", 
      contact: "ติดต่อ",
      about: "เกี่ยวกับเรา"
    }
  };

  // Fallback to English if locale not found
  const titles = sectionTitles[locale] || sectionTitles.en;

  return [
    {
      section: titles.quickLinks,
      links: [
        { title: titles.about, url: "/about" },
      ],
    },
    {
      section: titles.services,
      links: services.map((service) => ({
        title: service.title,
        url: service.url,
      })),
    },
    {
      section: titles.contact,
      links: [
        { title: contact.email.label, url: contact.email.url },
      ],
    },
  ];
}

export { getNavBarLinks, getFooterLinks };

// Keep the old exports for backward compatibility
export const navBarLinks = getNavBarLinks('th'); // Default to Thai for existing code
export const footerLinks = getFooterLinks('th'); // Default to Thai for existing code