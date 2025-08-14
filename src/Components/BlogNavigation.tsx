import { BlogPost } from '@/sanity/lib/queries'
import BlogPostCard from './BlogPostCard'

interface BlogNavigationProps {
  previous: BlogPost | null;
  next: BlogPost | null;
}

export default function BlogNavigation({ previous, next }: BlogNavigationProps) {
  if (!previous && !next) return null;

  return (
    <div className="pt-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Continue Reading</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Post */}
        <div className="space-y-4">
          {previous ? (
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                {/* <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Post */}
              </div>
              <BlogPostCard post={previous} />
            </div>
          ) : (
            <div className="flex flex-col space-y-3 opacity-50">
              <div className="flex items-center text-sm text-gray-400">
                {/* <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Post */}
              </div>
              <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                <p className="text-gray-500 text-center">No previous post</p>
              </div>
            </div>
          )}
        </div>

        {/* Next Post */}
        <div className="space-y-4">
          {next ? (
            <div>
              <div className="flex items-center justify-end text-sm text-gray-500 mb-4">
                {/* Next Post
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg> */}
              </div>
              <BlogPostCard post={next} />
            </div>
          ) : (
            <div className="flex flex-col space-y-3 opacity-50">
              <div className="flex items-center justify-end text-sm text-gray-400">
                {/* Next Post
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg> */}
              </div>
              {/* <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                <p className="text-gray-500 text-center">No next post</p>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
