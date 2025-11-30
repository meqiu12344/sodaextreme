'use client'

import { useState, useCallback, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header>
      <div className="nav">
        <div className="brand">
          <div className="logo" aria-hidden="true">
            <Image src="/images/logo.png" alt="SodaExtreme Logo" width={52} height={52} priority />
          </div>
          <div>
            <h1 style={{ fontSize: '16px', margin: 0 }}>SodaExtreme</h1>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Wymiana cylindrów CO₂ • Wrocław</div>
          </div>
        </div>

        <nav aria-label="Główne menu">
          <button
            className="hamburger"
            aria-expanded={isOpen}
            aria-controls="navlist"
            id="btnHamb"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul id="navlist" className={isOpen ? 'open' : ''}>
            <li><a href="#oferta" onClick={closeMenu}>Oferta</a></li>
            <li><a href="#cennik" onClick={closeMenu}>Cennik</a></li>
            <li><a href="#jak" onClick={closeMenu}>Jak działa</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#kontakt" onClick={closeMenu}>Kontakt</a></li>
          </ul>
        </nav>

        <div className="cta">
          <a className="btn" href="tel:+48730496403" aria-label="Zadzwoń">+48 730 496 403</a>
          <a className="btn primary" href="#kontakt">Zamów</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
