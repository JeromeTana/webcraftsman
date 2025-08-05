# SEO Configuration Documentation

## Overview
This document explains the comprehensive SEO setup implemented for your WebCraftsman blog posts.

## Features Implemented

### 1. Dynamic Metadata Generation
- **Title**: Dynamic titles in the format `{Post Title} | {Site Name} Blog`
- **Description**: Uses post excerpt or automatically generates from content (max 160 characters)
- **Keywords**: Combines general web development terms with post categories
- **Canonical URLs**: Prevents duplicate content issues
- **Author Information**: Dynamic author metadata from Sanity

### 2. Open Graph Metadata
- **Social Media Sharing**: Optimized for Facebook, LinkedIn, and other platforms
- **Dynamic Images**: Uses post featured image or fallback to site default
- **Article Metadata**: Includes publish date, author, categories, and tags
- **Proper Image Sizing**: 1200x630px for optimal social media display

### 3. Twitter Cards
- **Large Image Cards**: Enhanced Twitter sharing experience
- **Dynamic Handles**: Configurable Twitter usernames via environment variables
- **Optimized Descriptions**: Truncated to Twitter's requirements

### 4. Structured Data (JSON-LD)
- **Schema.org BlogPosting**: Helps search engines understand content structure
- **Rich Snippets**: May enable enhanced search results
- **Author and Publisher Info**: Complete organization and author data
- **Article Sections**: Category-based content classification

### 5. Search Engine Optimization
- **Robot Directives**: Proper indexing instructions for search engines
- **Google Bot Configuration**: Optimized crawling settings
- **Site Verification**: Support for Google and Bing verification codes

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required for SEO
NEXT_PUBLIC_SITE_URL=https://webcraftsman.co
NEXT_PUBLIC_SITE_NAME=WebCraftsman

# Social Media (Optional)
NEXT_PUBLIC_TWITTER_HANDLE=@webcraftsman
NEXT_PUBLIC_TWITTER_SITE=@webcraftsman

# Search Engine Verification (Optional)
GOOGLE_SITE_VERIFICATION=your-google-verification-code
BING_SITE_VERIFICATION=your-bing-verification-code
```

## File Structure

### Modified Files
- `/src/app/(main)/posts/[slug]/page.tsx` - Added comprehensive metadata generation
- `/.env.example` - Template for environment variables

### Key Functions Added
1. `generateMetadata()` - Dynamic metadata generation for each blog post
2. Structured data object for JSON-LD schema
3. Environment variable configuration system

## SEO Best Practices Implemented

### 1. Content Optimization
- Dynamic meta descriptions from post excerpts
- Automatic keyword generation from categories
- Proper heading structure in Portable Text components

### 2. Technical SEO
- Canonical URLs to prevent duplicate content
- Proper robots.txt directives
- Structured data for rich snippets
- Optimized image sizes and alt texts

### 3. Social Media Optimization
- Open Graph tags for all major platforms
- Twitter Card optimization
- Dynamic social media images
- Proper aspect ratios (1200x630px)

### 4. Performance Considerations
- Efficient image loading with Next.js Image component
- Static generation for better performance
- Minimal JavaScript for metadata generation

## Testing Your SEO

### Tools to Test
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Google Rich Results Test**: https://search.google.com/test/rich-results
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### What to Test
- Meta title and description display
- Social media card previews
- Structured data validation
- Image loading and sizing
- Canonical URL correctness

## Monitoring and Maintenance

### Regular Checks
1. Monitor Google Search Console for crawl errors
2. Check social media sharing previews regularly
3. Validate structured data with Google's testing tools
4. Monitor page load speeds with Core Web Vitals

### Updates Needed
- Update environment variables when changing domains
- Modify Twitter handles when social media accounts change
- Add new categories to keyword arrays as content grows
- Update fallback images in the public folder

## Additional Recommendations

### Content Strategy
1. Write compelling meta descriptions for better click-through rates
2. Use descriptive, keyword-rich titles
3. Optimize featured images for social sharing
4. Include relevant categories for better content organization

### Technical Improvements
1. Set up Google Analytics and Search Console
2. Implement breadcrumb navigation
3. Add sitemap generation
4. Consider implementing AMP for mobile optimization

## Troubleshooting

### Common Issues
1. **Images not showing in social previews**: Check image URLs and sizes
2. **Metadata not updating**: Clear cache and regenerate static pages
3. **Structured data errors**: Validate with Google's testing tool
4. **Environment variables not working**: Ensure proper .env.local setup

### Debug Steps
1. Check browser developer tools for meta tags
2. Use "View Page Source" to verify structured data
3. Test with social media debugging tools
4. Monitor Next.js build logs for errors
