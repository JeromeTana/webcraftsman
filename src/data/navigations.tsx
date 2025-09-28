import { contact } from "./contact";
import { services } from "./services";

export const navBarLinks = [
  { title: "เกี่ยวกับเรา", url: "/about" },
  { title: "ผลงาน", url: "/showcase" },
  { title: "บริการ", url: "/service" },
];

export const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { title: "เกี่ยวกับเรา", url: "/about" },
      { title: "ผลงาน", url: "/showcase" },
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
    ]
  }
];

export const socialLinks = {
  facebook: "",
  instagram: "",
  nostr: "",
};
