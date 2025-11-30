"use client";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <img className="banner-img shadow-lg" src={basePath + "/img/titelblatt_atelier.jpg"} alt="Titelbild" />
      </div>

      <section id="willkommen" className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">home</span>
          </div>
          <h1 className="text-3xl font-bold text-stone-800">Willkommen im Atelier Art Gold</h1>
        </div>
        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
          Das kleine Atelier, wo man kreativ seinem Hobby nachgehen kann. In netter Gesellschaft ist es moeglich viel Neues zu lernen.
        </p>
      </section>

      <div className="section-divider"></div>

      <section className="mb-16">
        <div className="card glass rounded-xl p-8 border border-gold-200/50">
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <img src={basePath + "/img/pic1.png"} className="w-64 h-auto rounded-xl shadow-md" alt="Evelyne" />
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Evelyne Chevillat-Gold</h2>
              <p className="text-stone-600 leading-relaxed">Aufgewachsen in Basel. Das kreative Gestalten mit Farben und Formen zaehlt zur grossen Leidenschaft.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="aktuelles" className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">new_releases</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-800">Aktuelles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card glass rounded-xl p-6 border border-gold-200/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-2xl">local_bar</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Glasobjekte</h3>
            <p className="text-sm text-stone-500 mb-6">Glasobjekte wie Cakeplatten, Vasen und Uhren.</p>
            <a href="mailto:chevigold@bluemail.ch" className="btn-gold">bestellen</a>
          </div>

          <div className="card glass rounded-xl p-6 border border-gold-200/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-2xl">school</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Kursprogramm</h3>
            <p className="text-sm text-stone-500 mb-6">Diverse Kurse nachmittags und abends.</p>
            <a href="#atelierkurse" className="btn-gold">Kurse ansehen</a>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="atelierkurse" className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">brush</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-800">Atelierkurse</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card glass rounded-xl p-6 border border-gold-200/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-2xl">palette</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Acrylmalkurs</h3>
            <p className="text-sm text-stone-500 mb-6">Leinwaende malen in kleinen Gruppen.</p>
            <a href={basePath + "/aag-acrylmalkurs-2024-01"} className="btn-gold">Kurs 2024</a>
          </div>

          <div className="card glass rounded-xl p-6 border border-gold-200/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-2xl">coffee</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Glasmalkurs</h3>
            <p className="text-sm text-stone-500 mb-6">Objekte bemalen mit moderner Technik.</p>
            <a href={basePath + "/aag-glasmalkurs-2024-01"} className="btn-gold">Kurs 2024</a>
          </div>

          <div className="card glass rounded-xl p-6 border border-gold-200/50">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-2xl">diamond</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Silberschmuck</h3>
            <p className="text-sm text-stone-500 mb-6">Ringe und Anhaenger in Silber gestalten.</p>
            <a href={basePath + "/aag-silberschmuckkurs-2024-01"} className="btn-gold">Kurs 2024</a>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="kontakt" className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">contact_mail</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-800">Kontakt</h2>
        </div>

        <div className="card glass rounded-xl p-8 border border-gold-200/50 max-w-md">
          <div className="space-y-3 text-stone-600 relative z-10">
            <p className="font-semibold text-stone-800 text-lg">Atelier Art Gold</p>
            <p>Evelyne Chevillat-Gold</p>
            <p>Vereinshausstrasse 18, 4133 Pratteln</p>
            <p>079 685 01 20</p>
            <a href="mailto:chevigold@bluemail.ch" className="text-gold-600">chevigold@bluemail.ch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
