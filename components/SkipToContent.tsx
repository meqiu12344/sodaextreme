'use client'

export default function SkipToContent() {
  return (
    <a 
      href="#main" 
      className="skip-to-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 999,
        padding: '1em',
        background: 'var(--accent1)',
        color: '#061018',
        textDecoration: 'none',
        fontWeight: 'bold',
        borderRadius: '0 0 8px 0',
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = '0'
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = '-9999px'
      }}
    >
      Przejdź do treści głównej
    </a>
  )
}
