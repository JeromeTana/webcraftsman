# Internationalization (i18n) Implementation

This document describes the i18n implementation for the WEBCRAFTSMAN Next.js application with support for English (default) and Thai languages.

## Overview

The implementation follows Next.js 15 App Router best practices for internationalization using:
- Locale-based routing (`/en/`, `/th/`)
- Server-side translation loading
- Automatic locale detection from browser headers
- Middleware-based routing

## Features

✅ **Supported Locales**: English (`en`) and Thai (`th`)  
✅ **Default Locale**: English (`en`)  
✅ **Automatic Locale Detection**: Based on `Accept-Language` headers  
✅ **Language Switcher**: Component to switch between languages  
✅ **Server-side Translations**: Zero-impact on client bundle size  
✅ **Fallback Support**: Automatic fallback to English if translation missing  

## File Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout with locale support
│   │   ├── (main)/
│   │   │   ├── layout.tsx      # Main app layout
│   │   │   ├── page.tsx        # Homepage with translations
│   │   │   ├── about/
│   │   │   ├── service/
│   │   │   ├── posts/
│   │   │   └── ...
│   │   └── ...
│   └── layout.tsx              # Redirects to default locale
├── dictionaries/
│   ├── index.ts                # Dictionary exports
│   └── dictionaries.ts         # Combined TypeScript dictionaries
├── lib/
│   ├── i18n.ts                 # Locale configuration
│   └── locale.ts               # Locale detection logic
├── types/
│   └── i18n.ts                 # TypeScript interfaces
├── Components/
│   └── LanguageSwitcher.tsx    # Language switching component
└── middleware.ts               # Locale routing middleware
```

## Key Files

### 1. Locale Configuration (`src/lib/i18n.ts`)
```typescript
export const locales = ['en', 'th'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
```

### 2. Middleware (`middleware.ts`)
- Detects user's preferred language from headers
- Redirects to appropriate locale route
- Excludes static files and service workers

### 3. Dictionary System (`src/dictionaries/`)
- TypeScript-based translation system
- Combined dictionary file with type safety
- Synchronous translation loading
- Automatic fallback to English

### 4. Translation Structure
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "service": "Services",
    // ...
  },
  "hero": {
    "title": "Transform Your Business...",
    "subtitle": "Professional website...",
    // ...
  },
  "common": {
    "readMore": "Read More",
    "contactUs": "Contact Us",
    // ...
  }
}
```

## Usage Examples

### 1. Using Translations in Components
```typescript
import { getDictionary } from '@/dictionaries';
import { type Locale } from '@/lib/i18n';

export default async function Component({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale); // No await needed - synchronous!
  
  return (
    <div>
      <h1>{dict.hero.title}</h1>
      <p>{dict.hero.subtitle}</p>
    </div>
  );
}
```

### 2. Language Switcher Component
```typescript
import LanguageSwitcher from '@/Components/LanguageSwitcher';

// In your component
<LanguageSwitcher currentLocale={locale} />
```

### 3. Locale-aware Links
```typescript
<Link href={`/${locale}/about`}>
  {dict.nav.about}
</Link>
```

## URL Structure

- **Root (`/`)**: Redirects to `/en` (default locale)
- **English (`/en/`)**: English content
- **Thai (`/th/`)**: Thai content
- **Nested routes**: `/en/about`, `/th/about`, etc.

## Browser Support

- Automatic locale detection from `Accept-Language` header
- Manual language switching via UI component
- Locale preference maintained in URL

## Adding New Languages

1. **Add locale to configuration**:
   ```typescript
   // src/lib/i18n.ts
   export const locales = ['en', 'th', 'ja'] as const; // Add 'ja'
   ```

2. **Create translation file**:
   ```bash
   # Copy existing structure
   cp src/dictionaries/en.json src/dictionaries/ja.json
   ```

2. **Create translation structure**:
   ```typescript
   // Add to src/dictionaries/dictionaries.ts
   ja: {
     nav: { /* Japanese navigation */ },
     hero: { /* Japanese hero content */ },
     // ... other sections
   }
   ```

3. **Update dictionary file**:
   ```typescript
   // src/dictionaries/dictionaries.ts
   const dictionaries: Record<Locale, Dictionary> = {
     en: { /* English translations */ },
     th: { /* Thai translations */ },
     ja: { /* Japanese translations */ }, // Add this
   };
   ```

## Implementation Status

### ✅ Completed
- [x] Middleware setup for locale routing
- [x] Dictionary system with English and Thai
- [x] Layout components updated for i18n
- [x] Language switcher component
- [x] Main pages (home, about, services, etc.) updated
- [x] Type-safe translation system
- [x] Automatic fallback to English

### 🔄 Next Steps
- [ ] Update individual section components to use translations
- [ ] Add translations for all UI text
- [ ] Update blog post pages for i18n
- [ ] Add locale-specific metadata
- [ ] SEO optimization for multilingual content

## Performance

- **Zero client-side impact**: Translations loaded synchronously on server-side
- **Efficient bundle size**: TypeScript dictionaries compiled into bundle
- **Fast loading**: No async dictionary loading
- **Type safety**: Full TypeScript intellisense and error checking

## Testing

Access the application:
- English: `http://localhost:3000/en`
- Thai: `http://localhost:3000/th`
- Auto-detect: `http://localhost:3000` (redirects based on browser language)

The language switcher in the header allows manual switching between locales.

## Notes

- All page components now accept locale parameters
- Static metadata should be updated for locale-specific SEO
- Service worker routes are excluded from i18n middleware
- Build process successfully generates static routes for both locales