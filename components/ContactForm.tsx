'use client'

import { useState, FormEvent, useCallback, memo } from 'react'

function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    
    const name = data.get('name')
    const email = data.get('email')
    const tel = data.get('tel') || ''
    const message = data.get('message')

    // Build mailto as fallback
    const body = `Imię/Nazwa: ${name}%0AEmail: ${email}%0ATel: ${tel}%0A%0A${encodeURIComponent(message as string)}`
    const mailto = `mailto:kontakt@sodaextreme.pl?subject=Zapytanie%20wymiany%20CO2&body=${body}`

    setStatus('Wysyłanie...')

    // Try to send via API
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        setStatus('Dziękujemy — otrzymaliśmy wiadomość. Skontaktujemy się wkrótce.')
        form.reset()
      } else {
        throw new Error('no backend')
      }
    } catch (error) {
      // Fallback to mailto
      setStatus('Nie wykryto zewnętrznego formularza — otwieram program pocztowy.')
      window.location.href = mailto
    }
  }, [])

  return (
    <form className="card" id="kontaktForm" onSubmit={handleSubmit} aria-label="Formularz kontaktowy">
      <label htmlFor="name" style={{ display: 'none' }}>Imię i nazwisko</label>
      <input id="name" name="name" placeholder="Imię i nazwisko / nazwa firmy" required />

      <label htmlFor="email" style={{ display: 'none' }}>E‑mail</label>
      <input id="email" type="email" name="email" placeholder="Adres e‑mail" required />

      <label htmlFor="tel" style={{ display: 'none' }}>Telefon</label>
      <input id="tel" type="tel" name="tel" placeholder="Telefon (opcjonalnie)" />

      <label htmlFor="msg" style={{ display: 'none' }}>Wiadomość</label>
      <textarea id="msg" name="message" rows={5} placeholder="Wiadomość / adres dostawy" required></textarea>

      <button type="submit" className="btn primary">Wyślij zapytanie</button>
      {status && <p style={{ color: 'var(--muted)', marginTop: '8px' }}>{status}</p>}
      <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>
        Klikając „Wyślij", wyrażasz zgodę na przetwarzanie danych osobowych zgodnie z{' '}
        <a href="/polityka-prywatnosci">Polityką prywatności</a>.
      </p>
    </form>
  )
}

export default memo(ContactForm)
