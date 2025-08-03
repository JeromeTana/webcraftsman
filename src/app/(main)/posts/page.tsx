import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, BlogPost } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

// Blog Post Card Component
function BlogPostCard({ post }: { post: BlogPost }) {
  const imageUrl = post.mainImage 
    ? urlFor(post.mainImage).width(600).height(400).url()
    : '/placeholder-image.svg'

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
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
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h2 className="mb-3 line-clamp-2 !leading-8 text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>
            )}

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
                <span>{post.author?.name || "Anonymous"}</span>
              </div>
              <time dateTime={post.publishedAt}>{publishedDate}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Main Blog Posts Page
export default async function BlogPostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog Posts
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Insights, tutorials, and thoughts on web development
            </p>
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
