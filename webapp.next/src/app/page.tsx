"use client";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main className="container">

      {/* Banner Image */}
      <div>
        <img
          className="banner-img"
          src={`${basePath}/img/titelblatt_atelier.jpg`}
          alt="Titelbild"
        />
      </div>

      {/* Willkommen Section */}
      <section id="navbars" className="mt-5">
        <div className="page-header">
          <h1>Willkommen im Atelier Art Gold</h1>
        </div>
        <p>
          Das kleine Atelier, wo man kreativ seinem Hobby nachgehen kann. In netter Gesellschaft ist es möglich viel Neues zu lernen und auszuprobieren. Frau Evelyne Chevillat hilft Ihnen Ideen umzusetzen und gemeinsam zu tollen Ergebnissen zu gelangen.
        </p>
      </section>

      {/* About Evelyne */}
      <section className="mt-5">
        <div className="row">
          <div className="col-lg-3">
            <img
              src={`${basePath}/img/pic1.png`}
              width="267"
              height="204"
              alt="Evelyne Chevillat-Gold"
            />
          </div>
          <div className="col-lg-7">
            <h2>Evelyne Chevillat-Gold</h2>
            <p>
              Aufgewachsen und Schulbesuche in Basel. Lebt mit Ihrer Familie in Muttenz. Nebst der beruflichen Ausbildung und Tätigkeit als Dental- und Prophylaxe-Assistentin und Expertin der Berufsschule, zählt das kreative Gestalten mit Farben und Formen mit verschiedenen Materialien zur grossen Leidenschaft. Künstlerische Aus- und Weiterbildungen durch diverse Seminare bei Kunstschaffenden sowie autodidaktische Ausbildungen.
            </p>
          </div>
        </div>
      </section>

      {/* Aktuelles Section */}
      <section id="aktuelles" className="mt-5">
        <div className="page-header">
          <h1>Aktuelles</h1>
        </div>
        <div className="row">

          {/* Card 1 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Verkauf von Glasobjekten</h4>
                <p className="card-text">Ich bemale vielseitige Glasobjekte wie Cakeplatten, Vasen, Uhren und saisonale Deko. Auch individuelle Wünsche werden umgesetzt.</p>
                <a href="mailto:chevigold@bluemail.ch?subject=Glasobjektbestellung" className="btn btn-primary btn-lg">hier bestellen</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Kursprogramm</h4>
                <p className="card-text">Diverse Kurse finden nachmittags und abends statt. Freie Plätze auf Anfrage verfügbar.</p>
                <a href="#atelierkurse" className="btn btn-primary btn-lg">zum Kursprogramm</a><br /><br />
                <a href="/assets/pdf/Flyer%202023.pdf" className="btn btn-primary btn-lg">Download Flyer</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Verkauf von Fächern</h4>
                <p className="card-text">Ich bemale Fächer individuell, auch mit Clublogos. Handgemalt und einzigartig!</p>
                <a href="mailto:chevigold@bluemail.ch?subject=Fächerbestellung" className="btn btn-primary btn-lg">hier bestellen</a>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Products */}
        <div className="row">

          {/* Card 4 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Verkauf von Acrylbildern</h4>
                <p className="card-text">Liebevoll gestaltete Acrylbilder auf Leinwand zum Verkauf verfügbar.</p>
                <a href="mailto:chevigold@bluemail.ch?subject=Acrylbildbestellung" className="btn btn-primary btn-lg">hier bestellen</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Country-Glasanhänger</h4>
                <p className="card-text">Individuelle Glasanhänger – Form, Farbe und Sujet frei wählbar.</p>
                <a href="mailto:chevigold@bluemail.ch?subject=Glasanhängerbestellung" className="btn btn-primary btn-lg">hier bestellen</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Atelierkurse Section */}
      <section id="atelierkurse" className="mt-5">
        <div className="page-header">
          <h1>Atelierkurse</h1>
        </div>
        <p>Ich vermittle gerne mein Wissen und unterstütze bei der kreativen Umsetzung eigener Ideen. Seit über 15 Jahren führe ich diese Kurse mit Begeisterung durch.</p>
        <div className="row">

          {/* Kurs 1 */}
          <div className="col-lg-4">
            <div className="card border-primary mb-4">
              <div className="card-body">
                <h4 className="card-title">Acrylmalkurs</h4>
                <p className="card-text">Malen Sie Leinwände nach Wunsch in kleinen Gruppen. Geeignet für Anfänger und Fortgeschrittene.</p>
                <a href={`${basePath}/aag-acrylmalkurs-2024-01`} className="btn btn-primary btn-lg">Kurs Januar 2024</a><br />
                <a href={`${basePath}/aag-acrylmalkurs-2023`} className="btn btn-secondary btn-lg mt-2">Kurs August 2023</a><br />
                <a href={`${basePath}/aag-acrylmalkurs`} className="btn btn-secondary btn-lg mt-2">Kurs Januar 2023</a>
              </div>
            </div>
          </div>

          {/* Kurs 2 */}
          <div className="col-lg-4">
            <div className="card border-secondary mb-4">
              <div className="card-body">
                <h4 className="card-title">Glas- und Porzellanmalkurs</h4>
                <p className="card-text">Individuelle Objekte bemalen mit moderner Technik. Perfekt auch für saisonale Motive.</p>
                <a href={`${basePath}/aag-glasmalkurs-2024-01`} className="btn btn-primary btn-lg">Kurs Januar 2024</a><br />
                <a href={`${basePath}/aag-glasmalkurs-2023`} className="btn btn-secondary btn-lg mt-2">Kurs August 2023</a><br />
                <a href={`${basePath}/aag-glasmalkurs`} className="btn btn-secondary btn-lg mt-2">Kurs Januar 2023</a>
              </div>
            </div>
          </div>

          {/* Kurs 3 */}
          <div className="col-lg-4">
            <div className="card border-success mb-4">
              <div className="card-body">
                <h4 className="card-title">Silberschmuckkurs</h4>
                <p className="card-text">Gestalten Sie unter Anleitung Ringe, Anhänger oder Ohrschmuck in Silber.</p>
                <a href={`${basePath}/aag-silberschmuckkurs-2024-01`} className="btn btn-primary btn-lg">Kurs Januar 2024</a><br />
                <a href={`${basePath}/aag-silberschmuckkurs-2023`} className="btn btn-secondary btn-lg mt-2">Kurs August 2023</a><br />
                <a href={`${basePath}/aag-silberschmuckkurs`} className="btn btn-secondary btn-lg mt-2">Kurs Januar 2023</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="mt-5 mb-5">
        <div className="page-header">
          <h1>Kontakt</h1>
        </div>
        <p>
          Atelier Art Gold<br />
          Evelyne Chevillat-Gold<br />
          Vereinshausstrasse 18<br />
          4133 Pratteln<br />
          079 685 01 20<br />
          chevigold@bluemail.ch
        </p>

      </section>

    </main>
  );
}
