import { notFound } from 'next/navigation';

type Course = {
  title: string;
  description: string;
};

const courses: Record<string, Course> = {
  'aag-acrylmalkurs-2024-01': {
    title: 'Acrylmalkurs Januar 2024',
    description: 'Tauchen Sie ein in die Welt der Acrylmalerei. Geeignet für Anfänger und Fortgeschrittene.',
  },
  'aag-acrylmalkurs-2023': {
    title: 'Acrylmalkurs August 2023',
    description: 'Ein kreativer Kurs, in dem individuelle Leinwandprojekte realisiert wurden.',
  },
  'aag-acrylmalkurs': {
    title: 'Acrylmalkurs Januar 2023',
    description: 'Malen, Lernen, Spaß haben – unser Acrylmalkurs für den Jahresstart!',
  },
  'aag-glasmalkurs-2024-01': {
    title: 'Glas- und Porzellanmalkurs Januar 2024',
    description: 'Gestalten Sie kreative Objekte aus Glas und Porzellan.',
  },
  'aag-glasmalkurs-2023': {
    title: 'Glas- und Porzellanmalkurs August 2023',
    description: 'Farbige Akzente auf Glas und Porzellan, individuell gestaltet.',
  },
  'aag-glasmalkurs': {
    title: 'Glas- und Porzellanmalkurs Januar 2023',
    description: 'Malen auf Glas und Porzellan für Anfänger und Fortgeschrittene.',
  },
  'aag-silberschmuckkurs-2024-01': {
    title: 'Silberschmuckkurs Januar 2024',
    description: 'Erstellen Sie Ihre eigenen Schmuckstücke aus Silber.',
  },
  'aag-silberschmuckkurs-2023': {
    title: 'Silberschmuckkurs August 2023',
    description: 'Ringe, Anhänger und mehr – handgefertigt in Silber.',
  },
  'aag-silberschmuckkurs': {
    title: 'Silberschmuckkurs Januar 2023',
    description: 'Schmuckdesign in Silber – kreative Umsetzung eigener Ideen.',
  },
};

// For static generation of all course slugs
export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug,
  }));
}

// For dynamic metadata (SEO per page)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses[resolvedParams.slug];
  if (!course) {
    return { title: 'Kurs nicht gefunden' };
  }
  return { title: course.title };
}

// ✅ Fixed: Page component must be async now!
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses[resolvedParams.slug];

  if (!course) {
    notFound();
  }

  return (
    <main className="container mt-5 mb-5">
      <div className="page-header">
        <h1>{course.title}</h1>
      </div>
      <p>{course.description}</p>
      <a href="/#atelierkurse" className="btn btn-primary mt-4">
        Zurück zu den Kursen
      </a>
    </main>
  );
}
