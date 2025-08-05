import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface FeaturedBlogPostCardProps {
  post: BlogPost;
  locale?: 'en-US' | 'th-TH';
}

export default function FeaturedBlogPostCard({ post, locale = 'en-US' }: FeaturedBlogPostCardProps) {
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : '/placeholder-image.svg'

  const publishedDate = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="group cursor-pointer mb-16">
      <Link href={`/posts/${post.slug.current}`}>
        <div className="relative overflow-hidden transition-all duration-300 rounded-3xl p-8">
          {/* Featured Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white shadow-md">
              ✨ Latest Post
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
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
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="mb-6 text-lg text-gray-700 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              {/* Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {post.author?.image && (
                    <Image
                      src={urlFor(post.author.image).width(100).height(100).url()}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="mr-3 rounded-full border-2 border-white shadow-sm"
                    />
                  )}
                  <div>
                    <span className="font-medium text-gray-900">{post.author?.name || "Anonymous"}</span>
                    <p className="text-sm text-gray-600">
                      <time dateTime={post.publishedAt}>{publishedDate}</time>
                    </p>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Read more →
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
