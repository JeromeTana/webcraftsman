import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "th"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  defaultLocale: "en",
  localePrefix: "always",
  locales,
});

export const { Link, redirect, permanentRedirect, usePathname, useRouter } =
  createNavigation(routing);
