'use client'

import { useState } from 'react'
import { useEffect } from 'react'

export default function PolitykaPrywatnosci() {
  const [activeTab, setActiveTab] = useState<'pp' | 'reg'>('pp')
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.title = 'Polityka Prywatności i Regulamin - SodaExtreme'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Polityka prywatności RODO i regulamin świadczenia usług wymiany cylindrów CO₂ SodaExtreme.')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    const root = document.documentElement
    if (!isDark) {
      root.style.setProperty('--bg', '#0b0f14')
      root.style.setProperty('--panel', '#0f1724')
      root.style.setProperty('--panel-2', '#121a2a')
      root.style.setProperty('--text', '#e8eef7')
      root.style.setProperty('--muted', '#a9b6c9')
      root.style.setProperty('--border', '#22314b')
      root.style.setProperty('--shadow', '0 20px 40px rgba(0,0,0,.35)')
    } else {
      root.style.setProperty('--bg', '#f6f8fc')
      root.style.setProperty('--panel', '#ffffff')
      root.style.setProperty('--panel-2', '#f2f5fb')
      root.style.setProperty('--text', '#0b0f14')
      root.style.setProperty('--muted', '#4b5b74')
      root.style.setProperty('--border', '#dbe3f3')
      root.style.setProperty('--shadow', '0 10px 30px rgba(10,40,90,.08)')
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <style jsx global>{`
        :root{
          --bg: #0b0f14;
          --panel: #0f1724;
          --panel-2: #121a2a;
          --text: #e8eef7;
          --muted: #a9b6c9;
          --brand: #62d6ff;
          --brand-2:#55ffa5;
          --danger:#ff6b6b;
          --ok:#64d38a;
          --ring: rgba(98,214,255,.35);
          --border: #22314b;
          --shadow: 0 20px 40px rgba(0,0,0,.35), 0 2px 8px rgba(0,0,0,.25);
          --radius: 18px;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{
          margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          color:var(--text); background: radial-gradient(1200px 600px at 10% -10%, #11223a 0%, transparent 50%),
                                   radial-gradient(1200px 600px at 110% 10%, #0c1e2e 0%, transparent 50%),
                                   var(--bg);
          line-height:1.6;
        }
        .wrap{max-width:1100px; margin:40px auto; padding:20px}
        .header{
          display:flex; gap:18px; align-items:center; justify-content:space-between; flex-wrap:wrap; margin-bottom:22px
        }
        .brand{display:flex; align-items:center; gap:14px}
        .logo{width:44px; height:44px; border-radius:50%; background:
          radial-gradient(circle at 30% 30%, #fff 0 8%, transparent 9%),
          radial-gradient(circle at 70% 70%, #fff 0 8%, transparent 9%),
          conic-gradient(from 200deg at 50% 50%, var(--brand), var(--brand-2));
          box-shadow:0 6px 24px rgba(98,214,255,.35), inset 0 0 0 2px rgba(255,255,255,.08);
        }
        h1{font-size:clamp(24px, 3.5vw, 38px); margin:0}
        .subtitle{color:var(--muted); margin-top:-6px}

        .toolbar{display:flex; gap:10px; align-items:center}
        .btn{appearance:none; border:1px solid var(--border); background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.01)); color:var(--text);
          padding:10px 14px; border-radius:12px; cursor:pointer; box-shadow: var(--shadow); transition: transform .06s ease, box-shadow .2s ease, border-color .2s ease; font-weight:600}
        .btn:hover{transform:translateY(-1px); border-color:var(--brand)}
        .btn.primary{border-color:transparent; background:linear-gradient(135deg, var(--brand), var(--brand-2)); color:#061018}

        .notice{margin:14px 0 24px; padding:12px 16px; border:1px dashed var(--border); border-radius:12px; color:var(--muted)}

        .tabs{display:flex; gap:10px; flex-wrap:wrap; margin:18px 0 14px}
        .tab{padding:10px 14px; border-radius:12px; border:1px solid var(--border); cursor:pointer; background:var(--panel); color:var(--text); font-weight:600}
        .tab[aria-selected="true"]{outline:2px solid var(--ring); border-color:transparent; background:linear-gradient(180deg, #17243a, #111a2b)}

        .card{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.015)); border:1px solid var(--border); border-radius:var(--radius); box-shadow:var(--shadow)}
        .panel{padding:26px; background:
          radial-gradient(800px 400px at 20% -10%, rgba(98,214,255,.06) 0%, transparent 50%),
          linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01));
          border-radius:var(--radius);
        }

        .grid{display:grid; gap:16px}
        @media(min-width:900px){.grid{grid-template-columns: 8fr .8fr}}

        .doc{background:var(--panel); border:1px solid var(--border); border-radius:16px; padding:22px}
        .doc h2{font-size:clamp(20px, 2.6vw, 28px); margin:6px 0 14px}
        .doc h3{font-size:clamp(16px, 2vw, 20px); margin:18px 0 8px}
        .doc p{margin:8px 0}
        .doc ul{padding-left:20px; margin:6px 0}
        .doc li{margin:4px 0}
        .badge{display:inline-block; font-size:12px; letter-spacing:.3px; padding:4px 10px; border-radius:999px; border:1px solid var(--border); color:var(--muted)}

        .meta{display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:10px}
        .meta .item{padding:12px 14px; border-radius:12px; border:1px solid var(--border); background:var(--panel-2)}
        .meta .k{display:block; font-size:12px; color:var(--muted)}
        .meta .v{font-weight:700}

        .side{display:grid; gap:16px}
        .side .box{padding:18px; border:1px solid var(--border); background:var(--panel); border-radius:16px}
        .side h4{margin:0 0 10px}

        .foot{margin-top:18px; color:var(--muted); font-size:13px}

        details{border:1px solid var(--border); border-radius:12px; padding:10px 12px; margin:10px 0; background:var(--panel)}
        details[open]{outline:2px solid var(--ring)}
        details summary{cursor:pointer; font-weight:700}

        @media print{
          body{background:#fff; color:#000}
          .wrap{margin:0; padding:0}
          .header,.tabs,.toolbar,.side,.notice{display:none}
          .doc{border:none; background:#fff; box-shadow:none; padding:0}
          .doc h2,.doc h3{color:#000}
        }
      `}</style>

      <div className="wrap">
        <header className="header">
          <div className="brand">
            <div className="logo" aria-hidden="true"></div>
            <div>
              <h1>SodaExtreme – Dokumenty Serwisu</h1>
              <div className="subtitle">Polityka Prywatności (RODO) i Regulamin świadczenia usług</div>
            </div>
          </div>
          <div className="toolbar">
            <button className="btn" onClick={toggleTheme}>Jasny/Ciemny</button>
            <button className="btn primary" onClick={() => window.print()}>Drukuj / PDF</button>
          </div>
        </header>

        <nav className="tabs" role="tablist" aria-label="Dokumenty">
          <button 
            className="tab" 
            role="tab" 
            aria-selected={activeTab === 'pp'} 
            onClick={() => setActiveTab('pp')}
          >
            Polityka Prywatności
          </button>
          <button 
            className="tab" 
            role="tab" 
            aria-selected={activeTab === 'reg'} 
            onClick={() => setActiveTab('reg')}
          >
            Regulamin
          </button>
        </nav>

        <section className="grid">
          {activeTab === 'pp' && (
            <article className="doc" role="tabpanel">
              <span className="badge">Wersja: 1.0 • Ostatnia aktualizacja: <time dateTime="2025-08-17">17 sierpnia 2025</time></span>
              <h2>Polityka Prywatności SodaExtreme</h2>
              <p>
                Niniejsza Polityka opisuje zasady przetwarzania danych osobowych użytkowników serwisu <strong>sodaextreme.pl</strong> (dalej: „Serwis"). Administratorem danych jest <strong> SodaExtreme </strong>, NIP: <strong>9131642270</strong>, e‑mail: <strong>kontakt@sodaextreme.pl</strong>, tel.: <strong>+48 730 496 403</strong> (dalej: „Administrator").
              </p>

              <h3>1. Zakres i cele przetwarzania</h3>
              <ul>
                <li><strong>Realizacja usług</strong> (wymiana butli CO₂, dostawa, rozliczenia) – art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Obsługa zapytań</strong> poprzez formularz/kontakt – art. 6 ust. 1 lit. a lub f RODO.</li>
                <li><strong>Obowiązki prawne</strong> (rachunkowość, reklamacje) – art. 6 ust. 1 lit. c RODO.</li>
                <li><strong>Marketing własny</strong> (np. newsletter, powiadomienia) – art. 6 ust. 1 lit. a RODO.</li>
                <li><strong>Statystyka i bezpieczeństwo</strong> Serwisu – art. 6 ust. 1 lit. f RODO.</li>
              </ul>

              <h3>2. Kategorię danych</h3>
              <ul>
                <li>Dane identyfikacyjne: imię i nazwisko / firma, NIP (gdy dotyczy).</li>
                <li>Dane kontaktowe: adres dostawy, e‑mail, telefon.</li>
                <li>Dane transakcyjne i rozliczeniowe: szczegóły zamówienia, płatności, faktury.</li>
                <li>Dane techniczne: identyfikatory urządzeń, adres IP, logi, cookies.</li>
              </ul>

              <h3>3. Odbiorcy danych</h3>
              <p>Dane mogą być przekazywane wyłącznie podmiotom, którym Administrator powierza przetwarzanie: dostawcom IT/hostingu, firmom kurierskim, operatorom płatności, biuru rachunkowemu, narzędziom analitycznym – w zakresie niezbędnym do celu.</p>

              <h3>4. Przekazywanie poza EOG</h3>
              <p>Jeżeli wybrani dostawcy IT przechowują dane poza EOG, Administrator zapewni odpowiednie zabezpieczenia, np. standardowe klauzule umowne UE. Informacja o takich transferach będzie dostępna na żądanie.</p>

              <h3>5. Okres przechowywania</h3>
              <ul>
                <li>dane umowne – przez czas trwania umowy i przedawnienia roszczeń (zwykle do 6 lat),</li>
                <li>dokumenty księgowe – przez 5 lat od końca roku obrotowego,</li>
                <li>dane marketingowe – do wycofania zgody,</li>
                <li>logi techniczne – do 12 miesięcy lub dłużej, jeśli wymagają tego względy bezpieczeństwa.</li>
              </ul>

              <h3>6. Prawa osób</h3>
              <p>Przysługują Ci prawa: dostępu do danych, sprostowania, usunięcia („prawo do bycia zapomnianym"), ograniczenia, przenoszenia, sprzeciwu wobec przetwarzania, a także prawo do wniesienia skargi do Prezesa UODO. W sprawach RODO kontakt: <strong> kontakt@sodaextreme.pl </strong>.</p>

              <h3>7. Pliki cookies i podobne technologie</h3>
              <p>Serwis używa cookies niezbędnych do działania oraz (opcjonalnie) analitycznych/marketingowych.</p>

              <h3>8. Zautomatyzowane podejmowanie decyzji</h3>
              <p>Administrator nie podejmuje decyzji w sposób wyłącznie zautomatyzowany wywołujący skutki prawne wobec użytkowników.</p>

              <h3>9. Dobrowolność podania danych</h3>
              <p>Podanie danych jest dobrowolne, ale konieczne do realizacji usług (np. dostawy). Brak podania danych może uniemożliwić zawarcie umowy.</p>

              <h3>10. Zmiany Polityki</h3>
              <p>Aktualna wersja Polityki jest publikowana w Serwisie. Zmiany wchodzą w życie z dniem publikacji, chyba że wskazano inaczej.</p>

              <div className="meta" aria-label="Metadane dokumentu">
                <div className="item"><span className="k">Administrator</span><span className="v">SodaExtreme - Mateusz Maniak</span></div>
                <div className="item"><span className="k">Kontakt RODO</span><span className="v">kontakt@sodaextreme.pl</span></div>
                <div className="item"><span className="k">Siedziba</span><span className="v">Wilkszyn, 55-330</span></div>
                <div className="item"><span className="k">NIP/REGON</span><span className="v">9131642270</span></div>
              </div>
            </article>
          )}

          {activeTab === 'reg' && (
            <article className="doc" role="tabpanel">
              <span className="badge">Wersja: 1.0 • Ostatnia aktualizacja: <time dateTime="2025-08-17">17 sierpnia 2025</time></span>
              <h2>Regulamin serwisu i świadczenia usług SodaExtreme</h2>

              <h3>§1. Definicje</h3>
              <p><strong>Serwis</strong> – strona internetowa sodaextreme.pl. <strong>Usługa</strong> – wymiana butli CO₂ na pełne z dostawą. <strong>Klient</strong> – osoba fizyczna, przedsiębiorca lub jednostka organizacyjna korzystająca z Usługi. <strong>Sprzedawca/Usługodawca</strong> – <strong>SodaExtreme</strong>.</p>

              <h3>§2. Postanowienia ogólne</h3>
              <ul>
                <li>Regulamin określa zasady korzystania z Serwisu oraz świadczenia Usług przez Usługodawcę.</li>
                <li>Do korzystania z Serwisu wymagane jest urządzenie z dostępem do Internetu i aktualna przeglądarka.</li>
                <li>Kontakt: <strong>kontakt@sodaextreme.pl</strong>, tel.: <strong>+48 730 496 403</strong>.</li>
              </ul>

              <h3>§3. Zakres i warunki świadczenia Usług</h3>
              <ul>
                <li>Usługa polega na odbiorze pustej butli CO₂ i wydaniu butli napełnionej (wymiana). Dostawa na obszarze: <strong>[obszar dostaw, np. Wrocław i okolice]</strong>.</li>
                <li>Klient zobowiązany jest wydać butlę zgodną z systemem wymiany (standard SodaStream / kompatybilne).</li>
                <li>Butle pozostają własnością systemu depozytowego; Klient otrzymuje butlę zamienną o równych parametrach.</li>
              </ul>

              <h3>§4. Zamówienia</h3>
              <ul>
                <li>Zamówienia składane są przez formularz w Serwisie / telefonicznie / e‑mailowo.</li>
                <li>Do realizacji niezbędne są: imię i nazwisko / firma, adres dostawy, telefon oraz e‑mail.</li>
                <li>Zawarcie umowy następuje z chwilą potwierdzenia przyjęcia zamówienia przez Usługodawcę.</li>
              </ul>

              <h3>§5. Ceny i płatności</h3>
              <ul>
                <li>Ceny podane w Serwisie są cenami brutto i obejmują wymianę butli. Dodatkowe koszty (np. dojazd poza strefę) są wskazane przed złożeniem zamówienia.</li>
                <li>Metody płatności: <strong>[gotówka przy odbiorze / BLIK / szybki przelew / faktura]</strong>.</li>
                <li>Przykładowe ceny (do dostosowania): wymiana butli niebieskiej – <strong>[25]</strong> zł; różowej – <strong>[25]</strong> zł.</li>
              </ul>

              <h3>§6. Realizacja dostawy</h3>
              <ul>
                <li>Standardowy termin realizacji: <strong>[np. do 48 h]</strong>. Termin może ulec zmianie z przyczyn niezależnych (warunki drogowe, siła wyższa).</li>
                <li>Klient zapewnia dostęp do miejsca odbioru butli oraz osobę uprawnioną do odbioru.</li>
                <li>W razie nieobecności pod wskazanym adresem może być naliczona opłata za ponowny dojazd: <strong>[30]</strong> zł.</li>
              </ul>

              <h3>§7. Odpowiedzialność i bezpieczeństwo</h3>
              <ul>
                <li>Butle CO₂ są wyrobami ciśnieniowymi – należy stosować je zgodnie z instrukcją producenta sodomatu.</li>
                <li>Usługodawca nie ponosi odpowiedzialności za szkody wynikłe z niewłaściwego użytkowania urządzeń przez Klienta.</li>
              </ul>

              <h3>§8. Reklamacje</h3>
              <ul>
                <li>Reklamację można złożyć mailowo na adres: <strong>kontakt@sodaextreme.pl</strong> w terminie <strong>[14]</strong> dni od zdarzenia.</li>
                <li>W zgłoszeniu prosimy o: opis, dane kontaktowe, zdjęcia (jeśli dotyczy). Reklamacje rozpatrujemy w ciągu <strong>[14]</strong> dni.</li>
              </ul>

              <h3>§9. Prawo odstąpienia (konsumenci)</h3>
              <p>Klient będący konsumentem ma prawo odstąpić od umowy zawartej na odległość w terminie 14 dni, z wyjątkami wynikającymi z ustawy (np. świadczenie usługi w pełni za wyraźną zgodą przed upływem terminu). Informacje o odstąpieniu i wzór formularza stanowią załącznik do Regulaminu.</p>

              <h3>§10. Dane osobowe</h3>
              <p>Zasady przetwarzania danych określa Polityka Prywatności dostępna w Serwisie. W sprawach RODO kontakt: <strong>kontakt@sodaextreme.pl</strong>.</p>

              <h3>§11. Postanowienia końcowe</h3>
              <ul>
                <li>Prawem właściwym jest prawo polskie. Spory rozstrzygane będą przez właściwy sąd powszechny.</li>
                <li>Usługodawca zastrzega możliwość zmian Regulaminu z ważnych przyczyn (zmiany prawa, oferty, technologii). O zmianach informujemy w Serwisie.</li>
              </ul>
            </article>
          )}
        </section>

        <p className="foot">© {currentYear} • SodaExtreme</p>
      </div>
    </>
  )
}
