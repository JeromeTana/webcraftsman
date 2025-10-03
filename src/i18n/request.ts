import { getRequestConfig } from "next-intl/server";
import { type Locale, routing } from "./routing";

const messageLoaders: Record<
  Locale,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  en: () => import("../messages/en.json"),
  th: () => import("../messages/th.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = await messageLoaders[locale as Locale]();

  return {
    locale,
    messages: messages.default as any,
  };
});
