import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { siteConfig } from '@/lib/data'
import { 
  generateOrganizationSchema, 
  generateFAQSchema,
  generateServiceSchema,
  generateReviewSchema 
} from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SodaExtreme — Wymiana cylindrów CO₂ z dowozem | Wrocław i okolice',
    template: '%s | SodaExtreme'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'SodaExtreme' }],
  creator: 'SodaExtreme',
  publisher: 'SodaExtreme',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: siteConfig.name,
    title: 'SodaExtreme — Wymiana cylindrów CO₂ z dowozem',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'SodaExtreme - Wymiana cylindrów CO₂'
      }
    ],
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SodaExtreme — Wymiana cylindrów CO₂ z dowozem',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const faqSchema = generateFAQSchema()
  const serviceSchema = generateServiceSchema()
  const reviewSchema = generateReviewSchema()

  return (
    <html lang="pl">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          id="myVideo"
          preload="auto"
          aria-hidden="true"
        >
          <source src="/images/bg5.mp4" type="video/mp4" />
        </video>
        {children}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-45CMQP50V0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45CMQP50V0');
          `}
        </Script>
        
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          strategy="beforeInteractive"
        />
        
        <Script
          id="schema-reviews"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
          strategy="beforeInteractive"
        />
        
        <noscript>
          <div
            style={{
              position: 'fixed',
              left: '12px',
              right: '12px',
              bottom: '12px',
              background: '#fffb',
              backdropFilter: 'blur(4px)',
              padding: '10px',
              borderRadius: '10px',
              textAlign: 'center',
              color: '#061018',
            }}
          >
            Włącz JavaScript, aby skorzystać z pełni funkcji strony. Zamówienia przyjmujemy też telefonicznie: {siteConfig.contact.phone}
          </div>
        </noscript>
      </body>
    </html>
  )
}
