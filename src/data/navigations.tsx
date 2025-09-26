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
];

export const socialLinks = {
  facebook: "",
  instagram: "",
  nostr: "",
};
