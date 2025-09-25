import { Metadata } from 'next'
import { siteUrl, tagline, description } from '@/data/metadata'

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: tagline,
    template: `%s | WEBCRAFTSMAN`,
  },
  description,
  keywords: [
    'เว็บไซต์',
    'ออกแบบเว็บไซต์',
    'พัฒนาเว็บไซต์',
    'Landing Page',
    'SEO',
    'Digital Marketing',
    'Thailand web development',
    'responsive design',
    'website audit',
    'conversion optimization',
  ],
  authors: [{ name: 'WEBCRAFTSMAN Team' }],
  creator: 'WEBCRAFTSMAN',
  publisher: 'WEBCRAFTSMAN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: siteUrl,
    title: tagline,
    description,
    siteName: 'WEBCRAFTSMAN',
    images: [
      {
        url: `${siteUrl}/OG_Home.png`,
        width: 1200,
        height: 630,
        alt: 'WEBCRAFTSMAN - รับออกแบบและพัฒนาเว็บไซต์สำหรับทำการตลาดออนไลน์',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: tagline,
    description,
    images: [`${siteUrl}/OG_Home.png`],
    creator: '@webcraftsman',
    site: '@webcraftsman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    // Add other search engine verifications as needed
    // bing: process.env.BING_SITE_VERIFICATION,
    // yandex: process.env.YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
}
