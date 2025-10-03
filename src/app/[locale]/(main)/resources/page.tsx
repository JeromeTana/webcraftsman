import React from "react";
import { type Locale } from "@/i18n/routing";

export default async function ValuePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Value</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-foreground/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Learning Hub</h2>
            <p className="text-paragraph mb-4">
              Expand your knowledge with our comprehensive guides and tutorials.
            </p>
            <ul className="space-y-2">
              <li><a href="/posts" className="text-primary hover:underline">Blog Posts</a></li>
              <li><a href="/value/design-guides" className="text-primary hover:underline">Design Guides</a></li>
              <li><a href="/value/dev-tips" className="text-primary hover:underline">Development Tips</a></li>
            </ul>
          </div>
          
          <div className="bg-foreground/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tools & Resource</h2>
            <p className="text-paragraph mb-4">
              Access our collection of templates, snippets, and assets.
            </p>
            <ul className="space-y-2">
              <li><a href="/value/templates" className="text-primary hover:underline">Templates</a></li>
              <li><a href="/value/snippets" className="text-primary hover:underline">Code Snippets</a></li>
              <li><a href="/value/assets" className="text-primary hover:underline">Asset Library</a></li>
            </ul>
          </div>
          
          <div className="bg-foreground/5 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Business</h2>
            <p className="text-paragraph mb-4">
              Learn about our processes and get your project started.
            </p>
            <ul className="space-y-2">
              <li><a href="/value/case-studies" className="text-primary hover:underline">Case Studies</a></li>
              <li><a href="/value/pricing" className="text-primary hover:underline">Pricing Guide</a></li>
              <li><a href="/roast" className="text-primary hover:underline">Free Audit</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
