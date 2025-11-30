export const siteConfig = {
  name: 'SodaExtreme',
  description: 'Szybka wymiana cylindrów CO₂ do SodaStream z dostawą pod drzwi. Obsługujemy Wrocław i okolice. Zamów online — wygodnie, tanio i ekologicznie.',
  url: 'https://www.sodaextreme.pl',
  ogImage: 'https://www.sodaextreme.pl/images/og-sodaextreme.jpg',
  keywords: [
    'wymiana cylindrów CO2',
    'SodaStream Wrocław',
    'dostawa butli CO2',
    'napełnianie butli CO2',
    'wymiana butli gazowych',
    'cylindry CO2 Wrocław',
    'SodaExtreme',
    'dowóz butli CO2',
    'serwis SodaStream',
    'wymiana butli pod drzwi'
  ],
  contact: {
    phone: '+48730496403',
    email: 'kontakt@sodaextreme.pl',
    address: 'Wilkszyn, 55-330',
    nip: '9131642270',
    hours: 'pon.–sb. 9:00–18:00'
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61578432832489',
    instagram: 'https://www.instagram.com/sodaextreme_wroclaw/',
    whatsapp: 'https://wa.me/48730496403?text=Hej%2C+chciałbym+zamówić+wymianę+butli+CO2'
  }
}

export const pricing = [
  {
    id: 1,
    name: 'Cylinder CO₂ – różowy',
    price: 25,
    currency: 'PLN',
    image: '/images/butla_roz_cala.png',
    description: 'Wymiana cylindra CO₂ w kolorze różowym kompatybilnego z SodaStream',
    availability: 'InStock'
  },
  {
    id: 2,
    name: 'Cylinder CO₂ – niebieski',
    price: 25,
    currency: 'PLN',
    image: '/images/butla_niebieska_cała.png',
    description: 'Wymiana cylindra CO₂ w kolorze niebieskim kompatybilnego z SodaStream',
    availability: 'InStock'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Jan Kowalski',
    avatar: '/images/avatars/avatar1.jpg',
    date: '2023-08-12',
    rating: 5,
    text: 'Szybko i bez problemów. Wymiana na drugi dzień, polecam!'
  },
  {
    id: 2,
    name: 'Anna Nowak',
    avatar: '/images/avatars/avatar2.jpg',
    date: '2023-09-05',
    rating: 5,
    text: 'Świetny kontakt i uczciwe ceny. W biurze mamy stałe dostawy.'
  },
  {
    id: 3,
    name: 'Piotr Wiśniewski',
    avatar: '/images/avatars/avatar3.jpg',
    date: '2023-09-28',
    rating: 5,
    text: 'Zero noszenia butli, wszystko pod drzwi. Super wygoda.'
  }
]

export const faqData = [
  {
    id: 1,
    question: 'Jak szybko realizujecie wymianę?',
    answer: 'Zwykle w ciągu 24–48 godzin w zależności od lokalizacji i dostępności.'
  },
  {
    id: 2,
    question: 'Jakie metody płatności są dostępne?',
    answer: 'Gotówka, BLIK, przelew online. Dla firm możliwość faktury VAT.'
  },
  {
    id: 3,
    question: 'Czy odbieracie butle innych marek?',
    answer: 'Wymieniamy cylindry kompatybilne z systemem SodaStream. W razie wątpliwości prześlij zdjęcie.'
  }
]

export const servicesData = [
  {
    id: 'home',
    name: 'Dla domu',
    description: 'Wygodna wymiana dla gospodarstw domowych — zamów online, a dostawca przyjedzie pod wskazany adres.',
    features: [
      'Zamów online lub telefonicznie',
      'Odbieramy pustą butlę i wydajemy pełną',
      'Płatność gotówką, BLIK lub przelew'
    ],
    icon: '🏠'
  },
  {
    id: 'business',
    name: 'Dla firm',
    description: 'Stałe dostawy do biur i gastronomii — indywidualne warunki, harmonogramy i faktury.',
    features: [
      'Dowóz cykliczny lub na żądanie',
      'Pakiety i rabaty dla stałych klientów',
      'Rozliczenia elektroniczne i opieka handlowa'
    ],
    icon: '🏢',
    pdfUrl: '/oferta_firmowa/oferta.pdf'
  }
]

export const deliveryAreas = [
  {
    id: 1,
    icon: '🏙️',
    name: 'Wrocław – centrum i dzielnice'
  },
  {
    id: 2,
    icon: '🏡',
    name: 'Osiedla i przedmieścia'
  },
  {
    id: 3,
    icon: '🚚',
    name: 'Miejscowości w promieniu 20 km - Do uzgodnienia'
  }
]

export const howItWorks = [
  {
    step: 1,
    title: 'Złóż zamówienie',
    description: 'Złóż zamówienie przez formularz lub telefon.'
  },
  {
    step: 2,
    title: 'Odbiór i dostawa',
    description: 'Kurjer odbierze pustą butlę i zostawi pełną.'
  },
  {
    step: 3,
    title: 'Gotowe!',
    description: 'Potwierdź odbiór — gotowe!'
  }
]
