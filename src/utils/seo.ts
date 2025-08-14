import { Metadata } from 'next'
import { siteUrl } from '@/app/global'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  author,
  section,
  tags = [],
  noIndex = false,
}: SEOProps): Metadata {
  const defaultKeywords = [
    'เว็บไซต์',
    'ออกแบบเว็บไซต์',
    'พัฒนาเว็บไซต์',
    'Landing Page',
    'SEO',
    'Digital Marketing',
    'Thailand web development',
  ]

  const fullTitle = title ? `${title} | WEBCRAFTSMAN` : 'WEBCRAFTSMAN'
  const fullDescription = description || 'รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่'
  const fullImage = image || `${siteUrl}/OG_Home.png`
  const fullUrl = url || siteUrl
  const allKeywords = [...defaultKeywords, ...keywords]

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: 'WEBCRAFTSMAN Team' }],
    openGraph: {
      type,
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: 'WEBCRAFTSMAN',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || 'WEBCRAFTSMAN',
        },
      ],
      locale: 'th_TH',
      ...(type === 'article' && {
        publishedTime,
        authors: author ? [author] : ['WEBCRAFTSMAN Team'],
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: '@webcraftsman',
      site: '@webcraftsman',
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// Structured data generators
export function generateOrganizationStructuredData() {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'WEBCRAFTSMAN',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.svg`,
    },
    description: 'รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Thai', 'English'],
    },
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'WEBCRAFTSMAN',
    description: 'รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/posts?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url?: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
}
