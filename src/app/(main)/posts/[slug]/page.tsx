import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getAllPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || "Blog post image"}
          width={800}
          height={600}
          className="rounded-lg"
        />
        {value.caption && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold !mt-16 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold !mt-16 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold !mt-16 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 !leading-10">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-800 underline"
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
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Individual Blog Post Page
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(2400).height(1200).url()
    : null;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen md:mt-16 bg-white">
      {/* Hero Section */}
      <div className="relative">
        {imageUrl && (
          <div className="relative max-w-4xl px-4 aspect-video mx-auto overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover md:rounded-2xl border border-gray-300 "
              priority
            />
          </div>
        )}

        {/* Header Content */}
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className={imageUrl ? "inset-x-0 bottom-8" : "text-gray-900"}>
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      imageUrl
                        ? "bg-white bg-opacity-20 text-white"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl !tracking-tight leading-normal sm:text-5xl">
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
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 w-full">
          {/* Excerpt */}
          {/* {post.excerpt && (
              <div className="mb-8 text-xl leading-relaxed text-gray-600 border-l-4 border-blue-500 pl-6">
                {post.excerpt}
              </div>
            )} */}

          {/* Main Content */}
          <div className="col-span-3 md:col-span-2 w-full prose prose-lg">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>

          <div className="hidden md:block">
            <Link href="/roast">
              <div className="sticky top-24 bg-primary rounded-xl">
                <div className="p-6 space-y-8">
                  <h3 className="!text-white !text-2xl !font-semibold mb-4">
                    FREE Website Analysis
                  </h3>
                  <p className="!text-white !text-base">
                    Identify areas for improvement and boost your online
                    presence.
                  </p>
                  <button className="cta w-full !bg-white !text-primary">
                    Claim Free Audit
                  </button>
                </div>

                <div className="w-full mt-4">
                  <Image
                    src="/Roast_banner.png"
                    alt="Get a free audit"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
