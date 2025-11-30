# SodaExtreme - Next.js

Aplikacja SodaExtreme przepisana z czystego HTML/CSS/JS na Next.js 14 z App Router i TypeScript.

## 📋 Wymagania

- Node.js 18+ 
- npm lub yarn

## 🚀 Instalacja i uruchomienie

### 1. Zainstaluj zależności

```bash
npm install
```

lub

```bash
yarn install
```

### 2. Uruchom serwer deweloperski

```bash
npm run dev
```

lub

```bash
yarn dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000)

### 3. Build produkcyjny

```bash
npm run build
npm start
```

lub

```bash
yarn build
yarn start
```

## 📁 Struktura projektu

```
nextjs-sodaextreme/
├── app/
│   ├── layout.tsx              # Root layout z metadata i SEO
│   ├── page.tsx                # Strona główna
│   ├── globals.css             # Globalne style CSS
│   └── polityka-prywatnosci/
│       └── page.tsx            # Strona polityki prywatności i regulaminu
├── components/
│   ├── Header.tsx              # Komponent nawigacji
│   ├── Footer.tsx              # Komponent stopki
│   ├── ContactForm.tsx         # Formularz kontaktowy
│   └── RevealAnimation.tsx     # Animacje scroll reveal
├── public/
│   ├── images/                 # Obrazy, logo, wideo
│   └── oferta_firmowa/         # Oferta PDF
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🔧 Główne zmiany w stosunku do oryginalnej wersji

### Konwersja na React Components
- HTML został podzielony na komponenty React (Header, Footer, ContactForm)
- Użyto TypeScript dla lepszej typizacji
- State management za pomocą React hooks (useState, useEffect)

### Routing
- Wykorzystano App Router Next.js 14
- Strona główna: `/`
- Polityka prywatności: `/polityka-prywatnosci`

### SEO i Metadata
- Dodano metadata w `layout.tsx`
- Structured Data (JSON-LD) dla LocalBusiness i FAQPage
- Open Graph tags dla social media
- Canonical URLs

### Stylowanie
- CSS przeniesione do `globals.css`
- Zachowano oryginalny design i animacje
- Responsive design bez zmian

### Interaktywność
- Hamburger menu jako komponent React
- Formularz kontaktowy z obsługą stanu
- Animacje scroll reveal z Intersection Observer
- Przełączanie zakładek w polityce prywatności

### Optymalizacje
- Server-side rendering (SSR) domyślnie
- Optymalizacja obrazów przez Next.js
- Code splitting automatyczny
- Fast refresh w trybie deweloperskim

## 🌐 Deployment

### Vercel (rekomendowane)

1. Połącz repozytorium z Vercel
2. Vercel automatycznie wykryje Next.js i wdroży aplikację
3. Lub użyj CLI:

```bash
npm install -g vercel
vercel
```

### Inne platformy

Build produkcyjny generuje statyczne i dynamiczne pliki w folderze `.next/`

## ⚡ Optymalizacje

### Performance
- ✅ **Next.js Image** - automatyczna optymalizacja obrazów (WebP/AVIF)
- ✅ **Lazy loading** - dynamic imports dla komponentów poniżej fold
- ✅ **React.memo** - memoizacja komponentów
- ✅ **useCallback** - optymalizacja funkcji
- ✅ **Code splitting** - automatyczny przez Next.js
- ✅ **Compression** - Gzip/Brotli włączone
- ✅ **Preconnect** - do Google Fonts

### SEO
- ✅ **Metadata** - kompleksowe meta tagi
- ✅ **Structured Data** - JSON-LD dla LocalBusiness i FAQ
- ✅ **Sitemap** - automatycznie generowana
- ✅ **Robots.txt** - zoptymalizowany
- ✅ **Canonical URLs** - poprawne linki kanoniczne
- ✅ **Open Graph** - social media tags

### Accessibility (a11y)
- ✅ **Skip to content** - link dla użytkowników keyboard
- ✅ **Focus states** - widoczne dla wszystkich interaktywnych elementów
- ✅ **ARIA labels** - poprawne dla czytników ekranu
- ✅ **Semantic HTML** - znaczniki semantyczne
- ✅ **Alt text** - dla wszystkich obrazów
- ✅ **rel="noopener noreferrer"** - bezpieczeństwo linków zewnętrznych

### Assets
- ✅ **React Icons** - zamiast Font Awesome CDN (bundle tylko użyte ikony)
- ✅ **Video optimization** - preload, playsInline, aria-hidden
- ✅ **Image formats** - AVIF i WebP support
- ✅ **Responsive images** - srcset automatycznie

### Lighthouse Score (oczekiwany)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📝 Dalsze kroki

- [ ] Dodać API endpoint dla formularza kontaktowego (`/api/send-contact`)
- [ ] Skonfigurować zmienne środowiskowe dla email
- [ ] Dodać Google Analytics / Plausible
- [ ] Dodać Service Worker dla PWA
- [ ] Dodać testy (Jest + React Testing Library)
- [ ] Skonfigurować ESLint i Prettier

## 📞 Kontakt

- Email: kontakt@sodaextreme.pl
- Telefon: +48 730 496 403
- Website: https://www.sodaextreme.pl

## 📄 Licencja

© 2025 SodaExtreme. Wszelkie prawa zastrzeżone.
