import { contact } from "./contact";
import { services } from "./services";

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

export const navBarLinks: NavBarLink[] = [
  { title: "เกี่ยวกับเรา", url: "/about" },
  // { title: "ผลงาน", url: "/showcase" },
  {
    title: "บริการ",
    url: "/service",
    dropdown: services.map((service) => ({
      name: service.title,
      url: service.url,
      description: service.headline.substring(0, 80) + "...",
      icon: () => <div>{service.icon}</div>,
    })),
  },
];

export const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { title: "เกี่ยวกับเรา", url: "/about" },
      // { title: "ผลงาน", url: "/showcase" },
    ],
  },
  {
    section: "Services",
    links: services.map((service) => ({
      title: service.title,
      url: service.url,
    })),
  },
  {
    section: "Contact",
    links: [
      { title: contact.email.label, url: contact.email.url },
      { title: contact.phone.label, url: contact.phone.url },
      { title: "Location", url: contact.address.url },
    ],
  },
];

export const socialLinks = {
  facebook: "",
  instagram: "",
  nostr: "",
};
