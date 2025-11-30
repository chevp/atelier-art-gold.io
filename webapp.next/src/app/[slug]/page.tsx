import { notFound } from "next/navigation";
import Link from "next/link";

type Course = {
  title: string;
  description: string;
};

const courses: Record<string, Course> = {
  "aag-acrylmalkurs-2024-01": {
    title: "Acrylmalkurs Januar 2024",
    description: "Tauchen Sie ein in die Welt der Acrylmalerei. Geeignet fuer Anfaenger und Fortgeschrittene.",
  },
  "aag-acrylmalkurs-2023": {
    title: "Acrylmalkurs August 2023",
    description: "Ein kreativer Kurs, in dem individuelle Leinwandprojekte realisiert wurden.",
  },
  "aag-acrylmalkurs": {
    title: "Acrylmalkurs Januar 2023",
    description: "Malen, Lernen, Spass haben - unser Acrylmalkurs fuer den Jahresstart!",
  },
  "aag-glasmalkurs-2024-01": {
    title: "Glas- und Porzellanmalkurs Januar 2024",
    description: "Gestalten Sie kreative Objekte aus Glas und Porzellan.",
  },
  "aag-glasmalkurs-2023": {
    title: "Glas- und Porzellanmalkurs August 2023",
    description: "Farbige Akzente auf Glas und Porzellan, individuell gestaltet.",
  },
  "aag-glasmalkurs": {
    title: "Glas- und Porzellanmalkurs Januar 2023",
    description: "Malen auf Glas und Porzellan fuer Anfaenger und Fortgeschrittene.",
  },
  "aag-silberschmuckkurs-2024-01": {
    title: "Silberschmuckkurs Januar 2024",
    description: "Erstellen Sie Ihre eigenen Schmuckstuecke aus Silber.",
  },
  "aag-silberschmuckkurs-2023": {
    title: "Silberschmuckkurs August 2023",
    description: "Ringe, Anhaenger und mehr - handgefertigt in Silber.",
  },
  "aag-silberschmuckkurs": {
    title: "Silberschmuckkurs Januar 2023",
    description: "Schmuckdesign in Silber - kreative Umsetzung eigener Ideen.",
  },
};

export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses[resolvedParams.slug];
  if (!course) {
    return { title: "Kurs nicht gefunden" };
  }
  return { title: course.title };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses[resolvedParams.slug];

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="card glass rounded-xl p-8 border border-gold-200/50">
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">school</span>
          </div>
          <h1 className="text-3xl font-bold text-stone-800">{course.title}</h1>
        </div>
        <p className="text-stone-600 text-lg leading-relaxed mb-8 relative z-10">{course.description}</p>
        <Link href="/#atelierkurse" className="btn-gold relative z-10">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Zurueck zu den Kursen
        </Link>
      </div>
    </div>
  );
}
