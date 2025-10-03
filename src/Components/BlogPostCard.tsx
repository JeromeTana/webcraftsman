import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { BlogPost } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface BlogPostCardProps {
  post: BlogPost;
  locale?: 'en-US' | 'th-TH';
}

export default function BlogPostCard({ post, locale = 'en-US' }: BlogPostCardProps) {
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(800).height(450).url()
    : '/placeholder-image.svg'

  const publishedDate = new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="group cursor-pointer">
      <Link href={`/posts/${post.slug.current}`}>
        <div className="overflow-hidden transition-all duration-300">
          {/* Image */}
          <div className="relative w-full aspect-video border border-gray-300 rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover  transition-transform  duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="py-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
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
            <h2 className="!mb-3 line-clamp-2 !leading-snug text-2xl !font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            {/* {post.excerpt && (
              <p className="!text-base mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>
            )} */}

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                {post.author?.image && (
                  <Image
                    src={urlFor(post.author.image).width(100).height(100).url()}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                )}
                <div className="flex flex-col">
                  <p className="!text-sm !text-black">
                    {post.author?.name || "Anonymous"}
                  </p>
                  <p className="!text-xs">
                    <time dateTime={post.publishedAt}>{publishedDate}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
