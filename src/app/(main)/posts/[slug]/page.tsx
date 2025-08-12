import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import Breadcrumb from "@/Components/Breadcrumb";
import AuditUrlInput from "@/Components/AuditUrlInput";
import MobileCTA from "@/Components/MobileCTA";

// Utility function to generate slug from text
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s\u0E00-\u0E7F-]/g, "") // Keep word characters, spaces, Thai characters (U+0E00-U+0E7F), and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
}

// Function to extract headings from portable text
function extractHeadings(
  body: any[]
): { level: number; text: string; slug: string }[] {
  const headings: { level: number; text: string; slug: string }[] = [];

  body.forEach((block) => {
    if (block._type === "block" && block.style === "h2") {
      const text =
        block.children?.map((child: any) => child.text).join("") || "";
      if (text.trim()) {
        const level = parseInt(block.style.substring(1)); // Extract number from h2
        const slug = generateSlug(text);
        headings.push({ level, text, slug });
      }
    }
  });

  return headings;
}

// Force this page to use SSR instead of static generation
export const dynamic = "force-dynamic";
// Revalidate every 15 minutes for individual posts
export const revalidate = 900;

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(1600).height(900).url()}
          alt={value.alt || "Blog post image"}
          width={1600}
          height={900}
          className="rounded-xl mx-auto border border-gray-300"
        />
        {value.caption && (
          <p className="mt-2 text-center !text-sm text-gray-600">
            {value.caption}
          </p>
        )}
      </div>
    ),
    table: ({ value }: any) => (
      <div className="my-8 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              {value.rows[0]?.cells.map((cell: any, index: number) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.slice(1).map((row: any, rowIndex: number) => (
              <tr key={rowIndex} className="even:bg-gray-50">
                {row.cells.map((cell: any, cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2 text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {value.caption && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children, value }: any) => {
      const text =
        value.children?.map((child: any) => child.text).join("") || "";
      const slug = generateSlug(text);
      return (
        <h1
          id={slug}
          className="text-3xl font-bold !mt-16 mb-4 !leading-12 scroll-mt-24"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, value }: any) => {
      const text =
        value.children?.map((child: any) => child.text).join("") || "";
      const slug = generateSlug(text);
      return (
        <h2
          id={slug}
          className="text-2xl font-bold !mt-16 mb-4 !leading-12 scroll-mt-24"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const text =
        value.children?.map((child: any) => child.text).join("") || "";
      const slug = generateSlug(text);
      return (
        <h3
          id={slug}
          className="text-xl font-bold !mt-16 mb-3 !leading-12 scroll-mt-24"
        >
          {children}
        </h3>
      );
    },
    normal: ({ children }: any) => (
      <p className="mb-4 !leading-10">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2 !leading-10">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2 !leading-10">{children}</li>
    ),
  },
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).url()
    : null;

  const publishedDate = new Date(post.publishedAt).toISOString();
  const categories = post.categories?.map((cat) => cat.title).join(", ") || "";

  // Create a clean description from excerpt or truncated body content
  const description =
    post.excerpt ||
    (post.body && post.body.length > 0
      ? `${post.body.find((block) => block._type === "block")?.children?.[0]?.text?.substring(0, 160) || post.title}...`
      : `Read ${post.title} - A comprehensive blog post about ${categories || "web development"}.`);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webcraftsman.co";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN";
  const twitterHandle =
    process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@webcraftsman";
  const url = `${baseUrl}/posts/${slug}`;

  return {
    title: `${post.title} | ${siteName} Blog`,
    description: description.substring(0, 160),
    keywords: [
      "web development",
      "digital marketing",
      "web design",
      "SEO",
      siteName,
      ...categories.split(", ").filter(Boolean),
    ],
    authors: [{ name: post.author?.name || `${siteName} Team` }],
    creator: post.author?.name || `${siteName} Team`,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: description.substring(0, 160),
      url: url,
      siteName: `${siteName} Blog`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : [
            {
              url: `${baseUrl}/OG_Home.png`,
              width: 1200,
              height: 630,
              alt: `${siteName} - Web Development & Digital Marketing`,
            },
          ],
      locale: "en_US",
      type: "article",
      publishedTime: publishedDate,
      authors: [post.author?.name || `${siteName} Team`],
      section: categories || "Web Development",
      tags: categories.split(", ").filter(Boolean),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description.substring(0, 160),
      images: imageUrl ? [imageUrl] : [`${baseUrl}/OG_Home.png`],
      creator: twitterHandle,
      site: twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      ...(process.env.BING_SITE_VERIFICATION && {
        other: {
          "msvalidate.01": process.env.BING_SITE_VERIFICATION,
        },
      }),
    },
  };
}

// Removed generateStaticParams to enable SSR instead of SSG
// export async function generateStaticParams() {
//   const posts = await getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug.current,
//   }));
// }

// TableOfContents component
function TableOfContents({
  headings,
}: {
  headings: { level: number; text: string; slug: string }[];
}) {
  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <h3 className="!text-base font-semibold mb-4 !mt-0 text-gray-900 flex items-center gap-2">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.slug}`}
                className="block py-1 px-2 rounded text-sm hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium text-gray-700"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// Individual Blog Post Page
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract headings for table of contents
  const headings = extractHeadings(post.body || []);

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(2400).height(1350).url()
    : null;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Site configuration
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webcraftsman.co";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN";
  const twitterHandle =
    process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@webcraftsman";
  const categories = post.categories?.map((cat) => cat.title).join(", ") || "";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || `Read ${post.title} on ${siteName} Blog`,
    image: imageUrl ? [imageUrl] : [`${baseUrl}/OG_Home.png`],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || `${siteName} Team`,
      ...(post.author?.image && {
        image: urlFor(post.author.image).width(100).height(100).url(),
      }),
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${slug}`,
    },
    ...(post.categories &&
      post.categories.length > 0 && {
        articleSection: post.categories.map((cat) => cat.title),
        keywords: post.categories.map((cat) => cat.title).join(", "),
      }),
  };

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/posts" },
    { label: post.title },
  ];

  return (
    <article className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Hero Section */}
      <div className="relative md:px-4 my-16">
        {/* Header Content */}
        <div className="relative mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mx-auto pb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className={imageUrl ? "inset-x-0 bottom-8" : "text-gray-900"}>
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary border border-primary/20"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl !tracking-tight !leading-normal sm:text-5xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                {post.author?.image && (
                  <Image
                    src={urlFor(post.author.image).width(100).height(100).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="mr-3 rounded-full"
                  />
                )}
                <p className="font-medium">
                  {post.author?.name || "Anonymous"}
                </p>
              </div>
              <p className="opacity-75">{publishedDate}</p>
            </div>
          </div>
        </div>

        {imageUrl && (
          <div className="relative max-w-5xl aspect-video mx-auto">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover md:rounded-3xl border border-gray-300"
              priority
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-20 lg:mb-0">
          {/* Main Content */}
          <div className="lg:col-span-2 w-full prose prose-lg max-w-none">
            {/* Table of Contents - Mobile */}
            <div className="lg:hidden mb-8">
              <TableOfContents headings={headings} />
            </div>

            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents - Desktop */}
              <div className="hidden lg:block">
                <TableOfContents headings={headings} />
              </div>

              {/* CTA Section - Desktop Only */}
              <div className="hidden lg:block bg-primary/10 rounded-2xl">
                <div className="p-6 space-y-6">
                  <h3 className="text-center text-2xl font-semibold mb-8">
                    Get Your FREE <br />
                    Website Audit
                  </h3>
                  <AuditUrlInput />
                </div>

                <div className="w-full">
                  <Image
                    src="/Roast_banner.png"
                    alt="Get a free audit"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA Section - Fixed Bottom */}
      <MobileCTA />
    </article>
  );
}
