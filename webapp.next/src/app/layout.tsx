import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Atelier Art Gold',
  description: 'Atelier Art Gold website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar fixed-top bg-success navbar-expand-lg navbar-dark">
          <div className="container">
            <Link href="/" className="navbar-brand" style={{ fontWeight: 800, fontSize: '32px' }}>
              Atelier Art Gold
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#navbars">Home</a> {/* For scroll sections, <a href="#..."> is correct */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aktuelles">Aktuelles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#atelierkurse">Atelierkurse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{ marginTop: '80px' }}>{children}</div>

        <footer className="bg-light text-center p-4 mt-5">
          <p>
            &copy; 2024 Atelier Art Gold.
            <br />
            <Link href="https://atelier-art-gold.ch/page/aag-impressum" className="underline">
              Impressum
            </Link>{' '}
            |{' '}
            <Link href="/page/aag-kursbedingungen" className="underline">
              Kursbedingungen
            </Link>{' '}
            |{' '}
            <a
              href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/so-schuetzen-wir-uns.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BAG-Hygienekonzept
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
