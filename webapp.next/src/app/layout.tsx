import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Atelier Art Gold',
  description: 'Kreatives Atelier für Acrylmalerei, Glas- und Porzellanmalerei und Silberschmuck in Pratteln',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-stone-50 text-stone-800 min-h-screen">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="h-16 glass border-b border-gold-200/50 flex items-center justify-between px-6 sticky top-0 z-50 diagonal-stripes">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center hover-lift cursor-pointer">
                <span className="material-symbols-outlined text-white text-xl">palette</span>
              </div>
              <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
                Atelier Art Gold
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#willkommen" className="text-stone-600 hover:text-gold-600 transition-colors font-medium">
                Home
              </a>
              <a href="#aktuelles" className="text-stone-600 hover:text-gold-600 transition-colors font-medium">
                Aktuelles
              </a>
              <a href="#atelierkurse" className="text-stone-600 hover:text-gold-600 transition-colors font-medium">
                Atelierkurse
              </a>
              <a href="#kontakt" className="text-stone-600 hover:text-gold-600 transition-colors font-medium">
                Kontakt
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden w-10 h-10 rounded-lg glass hover:bg-gold-100/50 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-gold-600">menu</span>
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-1 grid-bg">
            {children}
          </main>

          {/* Footer */}
          <footer className="glass border-t border-gold-200/50 py-8 px-6 diagonal-stripes">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">palette</span>
                  </div>
                  <span className="text-stone-600 text-sm">&copy; 2024 Atelier Art Gold</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Link href="https://atelier-art-gold.ch/page/aag-impressum" className="text-stone-500 hover:text-gold-600 transition-colors">
                    Impressum
                  </Link>
                  <span className="text-stone-300">|</span>
                  <Link href="/page/aag-kursbedingungen" className="text-stone-500 hover:text-gold-600 transition-colors">
                    Kursbedingungen
                  </Link>
                  <span className="text-stone-300">|</span>
                  <a
                    href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/so-schuetzen-wir-uns.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-gold-600 transition-colors"
                  >
                    BAG-Hygienekonzept
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
