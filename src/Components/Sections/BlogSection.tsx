import Link from "next/link";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import BlogPostCard from "@/Components/BlogPostCard";
import { BlogPost } from "@/sanity/lib/queries";
import { ReactNode } from "react";

interface BlogSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle?: string;
  posts: BlogPost[];
  titleIcon?: ReactNode;
  sectionId?: string;
}

export default function BlogSection({
  pillText,
  title,
  highlightText,
  subtitle,
  posts,
  titleIcon,
  sectionId = "blog",
}: BlogSectionProps) {
  // Only show first 3 posts
  const displayPosts = posts.slice(0, 3);

  return (
    <section id={sectionId} className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text={pillText} speed={5} />
      </div>

      <AnimatedContent
        distance={100}
        direction="vertical"
        initialOpacity={0.05}
        animateOpacity
        damping={10}
        stiffness={50}
        scale={0.9}
        threshold={0.2}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {titleIcon && titleIcon}
            <h2 className="text-center text-4xl font-bold lg:text-5xl">
              {title} <span className="text-primary highlight">{highlightText}</span>
              {subtitle && <span className="block">{subtitle}</span>}
            </h2>
          </div>
        </div>
      </AnimatedContent>

      {/* Blog Posts Grid */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        initialOpacity={0.05}
        animateOpacity
        damping={10}
        stiffness={50}
        scale={0.9}
        threshold={0.2}
        delay={0.2}
      >
        <div className="w-full max-w-7xl mx-auto">
          {displayPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-8">
                ยังไม่มีบทความในขณะนี้ กรุณาติดตามใน blog ของเรา
              </p>
              <Link href="/posts">
                <button className="cta mx-auto">ดูบทความทั้งหมด</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayPosts.map((post) => (
                  <BlogPostCard key={post._id} post={post} locale="th-TH" />
                ))}
              </div>

              {/* View All Posts Button */}
              <div className="text-center mt-12">
                <Link href="/posts">
                  <button className="cta mx-auto">ดูบทความทั้งหมด</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </AnimatedContent>
    </section>
  );
}
