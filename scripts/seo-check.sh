#!/bin/bash

# SEO Health Check Script for WEBCRAFTSMAN
# This script checks if all SEO files are properly configured

echo "🔍 WEBCRAFTSMAN SEO Health Check"
echo "=================================="

# Check if robots.txt exists
if [ -f "public/robots.txt" ]; then
    echo "✅ robots.txt found"
else
    echo "❌ robots.txt missing"
fi

# Check if sitemap.ts exists
if [ -f "src/app/sitemap.ts" ]; then
    echo "✅ sitemap.ts found"
else
    echo "❌ sitemap.ts missing"
fi

# Check if manifest.ts exists
if [ -f "src/app/manifest.ts" ]; then
    echo "✅ manifest.ts found"
else
    echo "❌ manifest.ts missing"
fi

# Check if metadata.ts exists
if [ -f "src/app/metadata.ts" ]; then
    echo "✅ metadata.ts found"
else
    echo "❌ metadata.ts missing"
fi

# Check if SEO utils exist
if [ -f "src/utils/seo.ts" ]; then
    echo "✅ SEO utilities found"
else
    echo "❌ SEO utilities missing"
fi

# Check environment variables
echo ""
echo "🔧 Environment Variables Check"
echo "=============================="

if [ -f ".env.local" ]; then
    echo "✅ .env.local found"
    
    # Check for specific variables (without showing values)
    if grep -q "GOOGLE_SITE_VERIFICATION" .env.local; then
        echo "✅ Google verification configured"
    else
        echo "⚠️  Google verification not configured"
    fi
    
    if grep -q "NEXT_PUBLIC_SITE_URL" .env.local; then
        echo "✅ Site URL configured"
    else
        echo "⚠️  Site URL not configured"
    fi
else
    echo "⚠️  .env.local not found - copy from .env.example"
fi

echo ""
echo "📊 Next Steps:"
echo "=============="
echo "1. Deploy your changes"
echo "2. Submit sitemap to Google Search Console: https://www.webcraftsman.co/sitemap.xml"
echo "3. Verify robots.txt: https://www.webcraftsman.co/robots.txt"
echo "4. Test with Rich Results Test: https://search.google.com/test/rich-results"
echo "5. Monitor with Google Search Console and Analytics"

echo ""
echo "🎉 SEO implementation complete!"
