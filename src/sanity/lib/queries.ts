"use server";
import { client } from "./client";

// Define the blog post type
export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  body: any[]; // Portable Text blocks
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    bio?: string;
  };
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
}

// Fetch all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        name,
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getLatestPosts(limit: number): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        name,
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset,
        alt
      },
      author-> {
        name,
        bio,
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Fetch previous and next posts
export async function getPreviousAndNextPosts(
  publishedAt: string,
  currentId: string
): Promise<{
  previous: BlogPost | null;
  next: BlogPost | null;
}> {
  const previousQuery = `
    *[_type == "post" && publishedAt < $publishedAt && _id != $currentId] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        name,
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;

  const nextQuery = `
    *[_type == "post" && publishedAt > $publishedAt && _id != $currentId] | order(publishedAt asc)[0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt
      },
      author-> {
        name,
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;

  try {
    const [previous, next] = await Promise.all([
      client.fetch(previousQuery, { publishedAt, currentId }),
      client.fetch(nextQuery, { publishedAt, currentId }),
    ]);

    return { previous: previous || null, next: next || null };
  } catch (error) {
    console.error("Error fetching previous/next posts:", error);
    return { previous: null, next: null };
  }
}
