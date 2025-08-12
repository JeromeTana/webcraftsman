import Link from "next/link";
import { getAllPosts, BlogPost } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import BlogPostCard from "@/Components/BlogPostCard";
import FeaturedBlogPostCard from "@/Components/FeaturedBlogPostCard";
import { Metadata } from "next";
import Breadcrumb from "@/Components/Breadcrumb";

// Force this page to use SSR instead of static generation
export const dynamic = 'force-dynamic';
// Revalidate every 30 minutes for fresh content
export const revalidate = 1800;

// Generate metadata for SEO
export const metadata: Metadata = {
  title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"}`,
  description:
    "Explore our collection of web development insights, tutorials, and digital marketing strategies. Stay updated with the latest trends in web design, SEO, and development best practices.",
  keywords: [
    "web development blog",
    "digital marketing tutorials",
    "web design insights",
    "SEO strategies",
    "development best practices",
    "WEBCRAFTSMAN blog",
    "web development tips",
    "coding tutorials",
  ],
  openGraph: {
    title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"}`,
    description:
      "Explore our collection of web development insights, tutorials, and digital marketing strategies.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/posts`,
    siteName: `${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"} Blog`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/OG_Home.png`,
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"} Blog - Web Development & Digital Marketing Insights`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"}`,
    description:
      "Explore our collection of web development insights, tutorials, and digital marketing strategies.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/OG_Home.png`,
    ],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@WEBCRAFTSMAN",
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@WEBCRAFTSMAN",
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
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/posts`,
  },
};

// Main Blog Posts Page
export default async function BlogPostsPage() {
  const posts = await getAllPosts();

  // Structured data for blog listing page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"} Blog`,
    description:
      "Web development insights, tutorials, and digital marketing strategies",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/posts`,
    author: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/logo.svg`,
      },
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt || post.title,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://WEBCRAFTSMAN.co"}/posts/${post.slug.current}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name:
          post.author?.name ||
          `${process.env.NEXT_PUBLIC_SITE_NAME || "WEBCRAFTSMAN"} Team`,
      },
      ...(post.mainImage && {
        image: urlFor(post.mainImage).width(1200).height(630).url(),
      }),
    })),
  };

  // Breadcrumb items
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb Navigation */}

      {/* Header */}
      <div>
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              อ่านบทความของเรา
            </h1>
            {/* <p className="mt-4 text-xl text-gray-600">
              อ่านความรู้และเทคนิคใหม่ๆ เกี่ยวกับการออกแบบและพัฒนาเว็บไซต์
            </p> */}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No blog posts found
            </h2>
            <p className="text-gray-600 mb-8">
              It looks like there are no blog posts available yet. Check back
              soon!
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary transition-colors"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Latest Post */}
            <FeaturedBlogPostCard post={posts[0]} locale="th-TH" />

            {/* Remaining Posts Grid */}
            {posts.length > 1 && (
              <div>
                {/* <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  บทความล่าสุด
                </h3> */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {posts.slice(1).map((post) => (
                    <BlogPostCard key={post._id} post={post} locale="th-TH" />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
