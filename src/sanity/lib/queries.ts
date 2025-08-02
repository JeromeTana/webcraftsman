import { client } from './client'

// Define the blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  body: any[] // Portable Text blocks
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  author?: {
    name: string
    image?: {
      asset: {
        _ref: string
        _type: string
      }
    }
  }
  categories?: Array<{
    title: string
    slug: {
      current: string
    }
  }>
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
  `
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
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
        image {
          asset
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `
  
  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}
