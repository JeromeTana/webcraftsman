import Link from "next/link";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import BlogPostCard from "@/Components/BlogPostCard";
import { BlogPost, getLatestPosts } from "@/sanity/lib/queries";

export default async function BlogSection() {
  const posts = await getLatestPosts(3);

  return (
    <section id="blog" className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text="บทความ" speed={5} />
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
            <h2 className="text-center text-5xl font-bold lg:text-6xl">
              <span className="text-primary highlight">ความรู้และบทความ</span>
              <span className="block">ล่าสุดจากเรา</span>
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
          {posts.length === 0 ? (
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
                {posts.map((post) => (
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
