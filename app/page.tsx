import dynamic from 'next/dynamic'
import Image from 'next/image'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import SkipToContent from '@/components/SkipToContent'
import { 
  pricing, 
  testimonials, 
  faqData, 
  servicesData, 
  deliveryAreas, 
  howItWorks 
} from '@/lib/data'
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema'

// Lazy load components that are not immediately visible
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="card" style={{ minHeight: '400px' }}>Ładowanie...</div>
})
const RevealAnimation = dynamic(() => import('@/components/RevealAnimation'))

export default function Home() {
  const productSchemas = generateProductSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Strona główna', url: 'https://www.sodaextreme.pl' }
  ])

  return (
    <>
      <SkipToContent />
      <div className="container">
        <Header />

        <main id="main">
          <section className="hero">
            <div className="hero-left">
              <h2>Wymiana cylindrów CO₂ z dowozem — szybko, wygodnie i ekologicznie</h2>
              <p>Nie musisz dźwigać butli. Zamów wymianę online — odbierzemy pustą, dostarczymy pełną. Obsługujemy Wrocław i okolice.</p>
              <div className="badges" role="list">
                <span className="badge">Dostawa pod drzwi</span>
                <span className="badge">Brak ukrytych kosztów</span>
                <span className="badge">Eko obieg butli</span>
                <span className="badge">Faktury</span>
              </div>
              <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a className="btn primary" href="#kontakt">Zamów teraz</a>
                <a className="btn" href="#cennik">Sprawdź ceny</a>
              </div>
            </div>
          </section>

          <section id="oferta" className="reveal">
            <div className="grid two">
              {servicesData.map((service) => (
                <article key={service.id} className="card" itemScope itemType="https://schema.org/Service">
                  <h3 itemProp="name">{service.icon} {service.name}</h3>
                  <p itemProp="description">{service.description}</p>
                  <div className="steps">
                    {service.features.map((feature, index) => (
                      <div key={index} className="step">
                        <div className="num">{index + 1}</div>
                        <div>{feature}</div>
                      </div>
                    ))}
                  </div>
                  <br />
                  <p style={{ marginTop: '10px' }} className="card-btn-container">
                    {service.pdfUrl ? (
                      <a className="btn" href={service.pdfUrl}>Sprawdź ofertę (PDF)</a>
                    ) : (
                      <a className="btn" href="#kontakt">Zamów wymianę</a>
                    )}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="cennik" className="reveal">
            <h3>Cennik wymiany</h3>
            <div className="pricegrid" style={{ marginTop: '12px' }}>
              {pricing.map((product) => (
                <article 
                  key={product.id} 
                  className="card"
                  itemScope 
                  itemType="https://schema.org/Product"
                >
                  <h4 itemProp="name">{product.name}</h4>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <p className="price-amount">
                      <span itemProp="price">{product.price}</span> <span itemProp="priceCurrency" content="PLN">zł</span> / wymiana
                    </p>
                    <link itemProp="availability" href={`https://schema.org/${product.availability}`} />
                  </div>
                  <Image 
                    src={product.image} 
                    alt={product.description} 
                    width={400} 
                    height={600} 
                    loading="lazy"
                    itemProp="image"
                  />
                </article>
              ))}
            </div>
          </section>

          <section id="jak" className="reveal">
            <div className="grid two" style={{ alignItems: 'stretch', gap: '24px' }}>
              
              <article className="card steps-card">
                <h3>Jak to działa — w 3 krokach</h3>
                <div className="steps-grid">
                  {howItWorks.map((step) => (
                    <div key={step.step} className="step-card">
                      <div className="num">{step.step}</div>
                      <p><strong>{step.title}:</strong> {step.description}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="card delivery-card">
                <h3>Obszar dostaw</h3>
                <p>Obsługujemy <strong>Wrocław i okolice</strong>. Jeśli jesteś poza strefą, skontaktuj się — często da się umówić wyjątkową dostawę.</p>

                <div className="delivery-grid">
                  {deliveryAreas.map((area) => (
                    <div key={area.id} className="delivery-item">
                      <span className="icon">{area.icon}</span>
                      <span>{area.name}</span>
                    </div>
                  ))}
                </div>
              </article>

            </div>
          </section>

          <section id="opinie" className="reveal">
            <h3>Opinie klientów</h3>
            <div className="quotes" style={{ marginTop: '12px' }}>
              {testimonials.map((testimonial) => (
                <blockquote 
                  key={testimonial.id}
                  itemScope 
                  itemType="https://schema.org/Review"
                >
                  <div className="quote-header">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="avatar" 
                      width={36} 
                      height={36} 
                      loading="lazy" 
                    />
                    <div>
                      <strong itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{testimonial.name}</span>
                      </strong><br />
                      <small className="date">
                        <time dateTime={testimonial.date} itemProp="datePublished">
                          {new Date(testimonial.date).toLocaleDateString('pl-PL')}
                        </time>
                      </small>
                    </div>
                  </div>
                  <p itemProp="reviewBody">„{testimonial.text}"</p>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" style={{ display: 'none' }}>
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="faq" className="reveal">
            <h3>Najczęstsze pytania</h3>
            {faqData.map((faq, index) => (
              <div key={faq.id}>
                {index > 0 && <br />}
                <details 
                  className="card" 
                  {...(index === 0 && { style: { marginTop: '12px' } })}
                  itemScope 
                  itemType="https://schema.org/Question"
                >
                  <summary itemProp="name">{faq.question}</summary>
                  <div 
                    style={{ paddingTop: '8px', color: 'var(--muted)' }}
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </div>
                </details>
              </div>
            ))}
          </section>

          <section id="kontakt" className="reveal">
            <h3>Skontaktuj się</h3>
            <div className="contact-grid" style={{ marginTop: '12px' }}>
              <article className="card contact-card">
                <p>
                  📞 Telefon: <a href="tel:+48730496403">+48 730 496 403</a><br />
                  ✉️ Email: <a href="mailto:kontakt@sodaextreme.pl">kontakt@sodaextreme.pl</a>
                </p>

                <p>🕘 Godziny: pon.–sb. 9:00–18:00</p>

                <SocialLinks />

                <p className="legal">
                  <a href="/polityka-prywatnosci">Polityka prywatności</a> • 
                  <a href="/regulamin">Regulamin</a>
                </p>
              </article>

              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />

        <div className="mobile-cta">
          <a className="btn primary" href="tel:+48730496403" style={{ flex: 1 }}>Zadzwoń</a>
          <a className="btn" href="#kontakt" style={{ flex: 1 }}>Formularz</a>
        </div>

        <RevealAnimation />
      </div>

      {/* Product Schema for each product */}
      {productSchemas.map((schema, index) => (
        <Script
          key={`product-${index}`}
          id={`schema-product-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}

      {/* Breadcrumb Schema */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  )
}
