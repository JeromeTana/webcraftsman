import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Author {
  name: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bio?: string;
}

interface AuthorCardProps {
  author?: Author;
  siteName?: string;
}

export default function AuthorCard({ author, siteName = "WEBCRAFTSMAN" }: AuthorCardProps) {
  const authorName = author?.name || `${siteName} Team`;
  const authorImage = author?.image ? urlFor(author.image).width(300).height(300).url() : null;
  
  // Default bio if none provided
  const defaultBio = `${authorName} is a dedicated member of the ${siteName} team, specializing in web development, digital marketing, and creating exceptional user experiences.`;
  const authorBio = author?.bio || defaultBio;

  return (
    <div className="bg-gray-50 rounded-2xl p-8 border border-foreground">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Author Image */}
        <div className="flex-shrink-0">
          {authorImage ? (
            <Image
              src={authorImage}
              alt={authorName}
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-4 border-white">
              <span className="text-2xl font-bold text-primary">
                {authorName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Written by {authorName}
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Author at {siteName}
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            {authorBio}
          </p>

          {/* Social Links or CTA */}
          {/* <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Follow Author
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Share Article
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
