import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Atelier Art Gold</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className="navbar fixed-top bg-success navbar-expand-lg navbar-dark">
          <div className="container">
            <Link href="/" className="navbar-brand" style={{ fontWeight: 800, fontSize: '32px' }}>Atelier Art Gold</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#navbars">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#aktuelles">Aktuelles</a></li>
                <li className="nav-item"><a className="nav-link" href="#atelierkurse">Atelierkurse</a></li>
                <li className="nav-item"><a className="nav-link" href="#kontakt">Kontakt</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ marginTop: '80px' }}>{children}</div>
        <footer className="bg-light text-center p-4 mt-5">
          <p>
            Copyright &copy; 2024 Atelier Art Gold.
            <br />
            <Link href="/page/aag-impressum">Impressum</Link> |{' '}
            <Link href="/page/aag-kursbedingungen">Kursbedingungen</Link> |{' '}
            <a href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/so-schuetzen-wir-uns.html" target="_blank">BAG-Hygienekonzept</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
