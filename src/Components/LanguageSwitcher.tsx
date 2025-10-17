"use client";

import { locales, type Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-4 cursor-pointer rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
        <Globe className="w-4 h-4" />
        {currentLocale.toUpperCase()}
      </button>
      <div className="absolute w-full top-full left-0 mt-1 bg-white border border-border rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        {locales
          .filter((locale) => locale !== currentLocale)
          .map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className="flex items-center gap-2 w-full p-4 cursor-pointer text-left text-sm text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Globe className="w-4 h-4" />
              {locale.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}
