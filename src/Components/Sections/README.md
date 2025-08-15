# Reusable Section Components

This directory contains reusable section components that can be used across different pages in the website.

## Components

### HeroSection
A reusable hero section component with animated content and CTA.

**Props:**
- `title` (string): Main title text
- `subtitle` (string): Subtitle text
- `highlightText` (string): Text to highlight
- `description` (string): Description text
- `showAvailableSpots` (boolean, optional): Show available spots component
- `showCta` (boolean, optional): Show CTA button

### ImageShowcaseSection
A section for displaying a grid of images with hover effects.

**Props:**
- `images` (array): Array of image objects with src, alt, and optional className
- `containerClassName` (string, optional): Custom container class

### ComparisonSection
A section for comparing two items/service side by side.

**Props:**
- `pillText` (string): Text for the pill/badge
- `title` (string): Section title
- `highlightText` (string): Text to highlight
- `subtitle` (string): Subtitle
- `leftComparison` (object): Left comparison data
- `rightComparison` (object): Right comparison data
- `sectionId` (string, optional): Section ID

### WorkShowcaseSection
A section for showcasing work/portfolio items.

**Props:**
- `pillText` (string): Text for the pill/badge
- `title` (string): Section title
- `highlightText` (string): Text to highlight
- `subtitle` (string, optional): Subtitle
- `works` (array): Array of work items
- `titleIcon` (ReactNode, optional): Icon for the title
- `sectionId` (string, optional): Section ID
- `showCTACard` (boolean, optional): Show CTA card
- `ctaCardHref` (string, optional): CTA card link

### ProcessSection
A section for displaying process steps.

**Props:**
- `pillText` (string): Text for the pill/badge
- `title` (string): Section title
- `highlightText` (string): Text to highlight
- `subtitle` (string): Subtitle
- `process` (array): Array of process steps
- `sectionId` (string, optional): Section ID
- `showCta` (boolean, optional): Show CTA button
- `gridCols` ("2" | "3", optional): Grid columns

### TestimonialSection
A section for displaying customer testimonials.

**Props:**
- `pillText` (string): Text for the pill/badge
- `title` (string): Section title
- `highlightText` (string): Text to highlight
- `subtitle` (string): Subtitle
- `titleIcon` (ReactNode, optional): Icon for the title
- `testimonial` (object): Testimonial data
- `sectionId` (string, optional): Section ID
- `maxWidth` (string, optional): Max width class

### FAQSection
A section for displaying frequently asked questions.

**Props:**
- `pillText` (string): Text for the pill/badge
- `title` (string): Section title
- `highlightText` (string): Text to highlight
- `subtitle` (string): Subtitle
- `titleIcon` (ReactNode, optional): Icon for the title
- `faqs` (array): Array of FAQ objects
- `sectionId` (string, optional): Section ID

## Usage

```tsx
import { HeroSection, ComparisonSection } from '@/Components/Sections';

// Use in your page component
<HeroSection
  title="Your Title"
  subtitle="Your Subtitle"
  highlightText="Highlight"
  description="Your description"
/>
```

## Data Structure

All data is centralized in `/src/data/pageData.tsx` to maintain consistency and make updates easier.
