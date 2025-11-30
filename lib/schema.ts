import { siteConfig, pricing, faqData, testimonials } from './data'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    image: [siteConfig.ogImage],
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wilkszyn',
      postalCode: '55-330',
      addressCountry: 'PL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1079,
      longitude: 17.0385
    },
    priceRange: 'PLN',
    description: siteConfig.description,
    areaServed: {
      '@type': 'City',
      name: 'Wrocław'
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ],
    openingHours: 'Mo-Sa 09:00-18:00',
    paymentAccepted: ['Cash', 'BLIK', 'Bank Transfer'],
    currenciesAccepted: 'PLN'
  }
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateProductSchema() {
  return pricing.map(product => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        name: siteConfig.name
      }
    }
  }))
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Wymiana cylindrów CO₂',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email
    },
    areaServed: {
      '@type': 'City',
      name: 'Wrocław'
    },
    description: 'Profesjonalna wymiana cylindrów CO₂ do SodaStream z dostawą pod drzwi',
    offers: {
      '@type': 'Offer',
      price: '25',
      priceCurrency: 'PLN'
    }
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    review: testimonials.map(testimonial => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name
      },
      datePublished: testimonial.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: testimonial.text
    }))
  }
}
