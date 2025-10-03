# Internationalized Data Files Usage Guide

This document shows how to use the new internationalized data files in your components.

## Overview

All data files now support internationalization with both English (`en`) and Thai (`th`) content. Each data type has a getter function that accepts a locale parameter.

## Available Data Functions

### Services
```typescript
import { getServices } from '@/data';
import { type Locale } from '@/lib/i18n';

const services = getServices(locale); // Returns Service[] for the specified locale
```

### Testimonials
```typescript
import { getTestimonials } from '@/data';

const testimonials = getTestimonials(locale); // Returns testimonial data for the locale
```

### FAQs
```typescript
import { getFaqs } from '@/data';

const faqs = getFaqs(locale); // Returns FAQ data for the locale
```

### Process Steps
```typescript
import { getProcess } from '@/data';

const process = getProcess(locale); // Returns process steps for the locale
```

### Navigation
```typescript
import { getNavBarLinks, getFooterLinks } from '@/data';

const navBarLinks = getNavBarLinks(locale); // Returns navigation links
const footerLinks = getFooterLinks(locale); // Returns footer links
```

### Metadata
```typescript
import { getMetadata } from '@/data';

const metadata = getMetadata(locale); // Returns tagline, description, siteUrl
```

## Usage in Components

### Example: Service Page Component
```typescript
import { getServices } from '@/data';
import { type Locale } from '@/lib/i18n';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const services = getServices(locale);

  return (
    <div>
      {services.map((service) => (
        <div key={service.url}>
          <h2>{service.title}</h2>
          <p>{service.headline}</p>
          <p>{service.description}</p>
          <ul>
            {service.problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Example: FAQ Component
```typescript
import { getFaqs } from '@/data';
import { type Locale } from '@/lib/i18n';

interface FAQSectionProps {
  locale: Locale;
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const faqs = getFaqs(locale);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <h3 className="font-semibold">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example: Navigation Component
```typescript
import { getNavBarLinks } from '@/data';
import { type Locale } from '@/lib/i18n';
import Link from 'next/link';

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const navLinks = getNavBarLinks(locale);

  return (
    <nav>
      {navLinks.map((link) => (
        <Link key={link.url} href={`/${locale}${link.url}`}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
```

## Backward Compatibility

The old exports are still available with `Legacy` suffix for backward compatibility:

```typescript
import { 
  services,           // Same as getServices('th')
  servicesLegacy,     // Explicit legacy import
  testimonials,       // Same as getTestimonials('th') 
  testimonialsLegacy, // Explicit legacy import
  // ... etc
} from '@/data';
```

## Data Structure

### Service Interface
```typescript
interface Service {
  icon: React.ReactNode;
  title: string;
  thumbnail?: string;
  headline: string;
  description: string;
  url: string;
  problems: string[];
  benefits: { headline: string; description: string }[];
  process: string[];
}
```

### Testimonial Interface
```typescript
interface Testimonial {
  quote: string;
  description: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    companyLogo: string;
  };
  image: string;
  rating: number;
}
```

### FAQ Interface
```typescript
interface FAQ {
  question: string;
  answer: string;
}
```

## Migration Guide

To update existing components:

1. **Import the getter function** instead of the static data:
   ```typescript
   // Before
   import { services } from '@/data';
   
   // After
   import { getServices } from '@/data';
   ```

2. **Add locale parameter** to your component:
   ```typescript
   // Before
   const services = services;
   
   // After
   const services = getServices(locale);
   ```

3. **Pass locale from page params**:
   ```typescript
   export default async function Page({ params }) {
     const { locale } = await params;
     // Use locale with getter functions
   }
   ```

## Benefits

- **🌍 Full i18n support**: All content automatically localized
- **🔒 Type safety**: Full TypeScript support maintained
- **🔄 Backward compatible**: Existing code continues to work
- **📦 Single source**: All locales in one file per data type
- **🚀 Performance**: No additional network requests