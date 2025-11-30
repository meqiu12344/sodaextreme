'use client'

import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a className="btn social primary" href="tel:+48730496403" aria-label="Zadzwoń do SodaExtreme">
        <FaPhone /> Zadzwoń
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=61578432832489" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn social fb"
        aria-label="Facebook SodaExtreme"
      >
        <FaFacebook /> Facebook
      </a>
      <a 
        href="https://www.instagram.com/sodaextreme_wroclaw/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn social ig"
        aria-label="Instagram SodaExtreme"
      >
        <FaInstagram /> Instagram
      </a>
      <a 
        href="https://wa.me/48730496403?text=Hej%2C+chciałbym+zamówić+wymianę+butli+CO2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn social wa"
        aria-label="WhatsApp SodaExtreme"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  )
}
