'use client'

import React from 'react'
import { useState, memo } from 'react'

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setMessage('Wysyłanie wiadomości...')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/manreylz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Wiadomość została wysłana pomyślnie! Odpowiemy najszybciej jak to możliwe.')
        form.reset()
      } else {
        setStatus('error')
        setMessage('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Wystąpił błąd podczas wysyłania. Sprawdź połączenie internetowe i spróbuj ponownie.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card" id="kontaktForm" aria-label="Formularz kontaktowy">
      <label htmlFor="name" style={{ display: 'none' }}>Imię i nazwisko</label>
      <input id="name" name="name" placeholder="Imię i nazwisko / nazwa firmy" required />

      <label htmlFor="email" style={{ display: 'none' }}>E‑mail</label>
      <input id="email" type="email" name="email" placeholder="Adres e‑mail" required />

      <label htmlFor="tel" style={{ display: 'none' }}>Telefon</label>
      <input id="tel" type="tel" name="tel" placeholder="Telefon (opcjonalnie)" />

      <label htmlFor="msg" style={{ display: 'none' }}>Wiadomość</label>
      <textarea id="msg" name="message" rows={5} placeholder="Wiadomość / adres dostawy" required></textarea>

      <button type="submit" className="btn primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
      </button>
      {message && (
        <p style={{ 
          color: status === 'error' ? '#ef4444' : status === 'success' ? '#22c55e' : 'var(--muted)', 
          marginTop: '8px',
          fontWeight: status === 'success' || status === 'error' ? '500' : 'normal'
        }}>
          {message}
        </p>
      )}
      <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>
        Klikając „Wyślij", wyrażasz zgodę na przetwarzanie danych osobowych zgodnie z{' '}
        <a href="/polityka-prywatnosci">Polityką prywatności</a>.
      </p>
    </form>
  )
}

export default memo(ContactForm)