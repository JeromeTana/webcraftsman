# Internationalization (i18n) Implementation

This project uses [`next-intl`](https://github.com/amannn/next-intl) to localize the Next.js 15 App Router experience. The stack is configured for English (`en`) and Thai (`th`) with locale-prefixed routing (`/en/...`, `/th/...`).

## Highlights

✅ `next-intl` powers server & client translations  
✅ Locale-prefixed routing with automatic redirects via middleware  
✅ Type-safe locale utilities shared between server and client  
✅ Messages stored in JSON under `src/messages`  
✅ `NextIntlClientProvider` registered in the locale layout  
✅ `getTranslations`/`useTranslations` available in all components

## File Structure

```
src/
├── i18n/
│   ├── request.ts          # Supplies messages for each request
│   └── routing.ts          # Defines locales + navigation helpers
├── messages/
│   ├── en.json             # English messages
│   └── th.json             # Thai messages
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Wraps pages with NextIntlClientProvider
│   │   └── (main)/...
│   └── layout.tsx          # Pass-through root layout
├── Components/
│   └── ...                 # Server/client components using translations
└── middleware.ts           # Locale-aware routing middleware
```

## Core Pieces

### 1. Routing (`src/i18n/routing.ts`)
```ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'th'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  defaultLocale: 'en',
  localePrefix: 'always',
  locales,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```
This centralizes locale information and exposes helpers that are safe to use in both server and client code.

### 2. Request Configuration (`src/i18n/request.ts`)
```ts
import { getRequestConfig } from 'next-intl/server';
import { type Locale, locales } from './routing';

const messageLoaders: Record<Locale, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('../messages/en.json'),
  th: () => import('../messages/th.json'),
};

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const messages = await messageLoaders[requestedLocale]();

  return {
    locale: requestedLocale,
    messages: messages.default,
  };
});
```
`next-intl/plugin` consumes this configuration to preload the correct messages at build/runtime.

### 3. Middleware (`middleware.ts`)
```ts
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createIntlMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|public|.*\\..*).*)'],
};
```
This keeps locales in the URL and redirects `/` to `/en` (or to `/th` based on the visitor's preference).

### 4. Locale Layout (`src/app/[locale]/layout.tsx`)
```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/routing';

export const metadata = baseMetadata;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }>; }) {
  const requestedLocale = (await params)?.locale ?? 'en';
  const locale = locales.includes(requestedLocale) ? requestedLocale : 'en';

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```
All server/client components beneath this layout now have access to hooks/utilities from `next-intl`.

## Authoring Translations

1. **Add message keys** to `src/messages/{locale}.json`. Keep nesting minimal and reuse namespaces (e.g. `common`, `ctaButton`, `sections.process`).
2. **Server components**: use `getTranslations`.
   ```tsx
   import { getTranslations } from 'next-intl/server';

   export default async function HeroSection() {
     const t = await getTranslations('hero');
     return <h1>{t('headlinePrefix')}</h1>;
   }
   ```
3. **Client components**: use `useTranslations`.
   ```tsx
   'use client';
   import { useTranslations } from 'next-intl';

   export default function Header() {
     const t = useTranslations('nav');
     return <span>{t('booking')}</span>;
   }
   ```
4. **Routing helpers**: prefer the exports from `src/i18n/routing.ts` (e.g., `useRouter`, `Link`) to keep locale awareness intact.

## Adding a New Locale

1. Append the locale code to `locales` in `src/i18n/routing.ts`.  
2. Create a new `src/messages/{locale}.json` file (copy another file to keep structure).  
3. Provide translations for every key used in the UI.  
4. Re-run the build; static params and middleware will recognize the new locale automatically.

## Tips

- Co-locate translations logically. Namespaces like `common`, `ctaButton`, `sections.process`, etc. keep lookups consistent.
- Use `t.rich` for rich text scenarios that require inline React nodes.
- For larger data sets (services, FAQs, etc.), the repo keeps locale-aware TypeScript data factories (`src/data/*-i18n.tsx`). These still consume the `Locale` type exported from `src/i18n/routing.ts`.
- When adding new UI, wire translations first; TypeScript will surface any missing keys while you develop.

## Testing

- Run `npm run lint` (or `pnpm lint`) to ensure type safety and ESLint rules pass.  
- Visit `/en`, `/th` locally to verify routing and middleware redirection.

This setup removes the custom dictionary system that previously shipped with the project and standardises on `next-intl` for all locale-related concerns.
