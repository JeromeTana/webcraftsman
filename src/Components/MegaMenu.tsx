"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideChevronDown } from "./Icons/LucideChevronDown";
import { getAllPosts, type BlogPost } from "../sanity/lib/queries";
import { urlFor } from "../sanity/lib/image";
import Image from "next/image";

interface MegaMenuSection {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: {
    name: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface MegaMenuProps {
  trigger: string;
  sections: MegaMenuSection[];
  className?: string;
}

export const MegaMenu = ({
  trigger,
  sections,
  className = "",
}: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch blog posts when component mounts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoadingBlogs(true);
        const posts = await getAllPosts();
        setBlogPosts(posts.slice(0, 3)); // Get top 3 latest posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoadingBlogs(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={` ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div className="cursor-pointer flex items-center gap-1">
        <span className="font-medium hover:text-primary transition-colors">
          {trigger}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <LucideChevronDown className="w-4 h-4 text-paragraph" />
        </motion.div>
      </div>

      {/* Mega Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-screen bg-background/95 backdrop-blur-sm border border-border z-50 overflow-hidden"
          >
            <div className="p-6 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Blog Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg mb-4">Blog</h3>
                  <ul className="space-y-3">
                    {isLoadingBlogs ? (
                      // Loading skeleton
                      Array.from({ length: 3 }).map((_, index) => (
                        <motion.li
                          key={`loading-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.1 + index * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          <div className="flex gap-3 p-2 rounded-lg">
                            <div className="w-8 h-8 bg-gray-200 rounded-md animate-pulse flex-shrink-0" />
                            <div className="flex flex-col gap-1 flex-1">
                              <div className="h-4 bg-gray-200 rounded animate-pulse" />
                              <div className="h-3 bg-gray-100 rounded animate-pulse w-3/4" />
                            </div>
                          </div>
                        </motion.li>
                      ))
                    ) : (
                      blogPosts.map((post, itemIndex) => (
                        <motion.li
                          key={post._id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.1 + itemIndex * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          <a
                            href={`/posts/${post.slug.current}`}
                            className="flex gap-3 group hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                          >
                            {post.mainImage ? (
                              <div className="w-8 h-8 rounded-md overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                                <Image
                                  src={urlFor(post.mainImage).width(50).height(50).fit('crop').url()}
                                  alt={post.mainImage.alt || post.title}
                                  width={50}
                                  height={50}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-8 h-8 p-1.5 bg-primary/10 rounded-md text-primary group-hover:text-primary/80 transition-colors flex-shrink-0 flex items-center justify-center">
                                
                              </div>
                            )}
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                {post.title}
                              </div>
                              {post.excerpt && (
                                <div className="text-xs text-gray-400 group-hover:text-paragraph/80 transition-colors line-clamp-2">
                                  {post.excerpt}
                                </div>
                              )}
                              <div className="text-xs text-gray-300">
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </div>
                            </div>
                          </a>
                        </motion.li>
                      ))
                    )}
                  </ul>
                  <a 
                    href="/posts" 
                    className="inline-block text-sm text-primary hover:text-primary/80 font-medium transition-colors mt-4"
                  >
                    View All →
                  </a>
                </motion.div>

                {/* Template Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg mb-4">Template</h3>
                  <ul className="space-y-3">
                    {sections[1]?.items.slice(0, 4).map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2 + itemIndex * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={item.href}
                          className="flex gap-3 group hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                          {item.icon && (
                            <item.icon className="w-8 h-8 p-1.5 bg-primary/10 rounded-md text-primary group-hover:text-primary/80 transition-colors flex-shrink-0" />
                          )}
                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-xs text-gray-400 group-hover:text-paragraph/80 transition-colors line-clamp-2">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors mt-4">
                    View All →
                  </button>
                </motion.div>

                {/* Affiliate Software Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg mb-4">Affiliate Software</h3>
                  <ul className="space-y-3">
                    {sections[2]?.items.slice(0, 4).map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3 + itemIndex * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={item.href}
                          className="flex gap-3 group hover:bg-primary/5 rounded-lg p-2 transition-all duration-200"
                        >
                          {item.icon && (
                            <item.icon className="w-8 h-8 p-1.5 bg-primary/10 rounded-md text-primary group-hover:text-primary/80 transition-colors flex-shrink-0" />
                          )}
                          <div className="flex flex-col gap-1">
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-xs text-gray-400 group-hover:text-paragraph/80 transition-colors line-clamp-2">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors mt-4">
                    View All →
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
