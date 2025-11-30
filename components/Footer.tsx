'use client'

import { useEffect, useState, memo } from 'react'

function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <small>© {year} SodaExtreme — Wymiana CO₂. Wszelkie prawa zastrzeżone.</small>
        <div style={{ color: 'var(--muted)' }}>
          <a href="#faq">FAQ</a> • <a href="/polityka-prywatnosci">Polityka Prywatności</a>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
