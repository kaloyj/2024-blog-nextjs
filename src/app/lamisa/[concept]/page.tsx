import { use, Suspense } from 'react';
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getConcept, getAllConceptIds } from "@/data/lamisa-concepts";
import ConceptClient from "./concept-client";

interface ConceptPageProps { 
  params: Promise<{ concept: string }> 
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { concept: conceptId } = await params;
  const concept = getConcept(conceptId);
  
  if (!concept) {
    return {
      title: 'Concept Not Found - Lamisa',
      description: 'The requested menu concept could not be found.',
    };
  }

  return {
    title: `${concept.title} - Concept ${concept.id} | Lamisa`,
    description: `${concept.subtitle}. ${concept.theme}`,
    openGraph: {
      title: `${concept.title} - Concept ${concept.id} | Lamisa`,
      description: `${concept.subtitle}. ${concept.theme}`,
      type: 'website',
      images: concept.heroImage ? [
        {
          url: concept.heroImage,
          width: 1400,
          height: 700,
          alt: concept.heroImageAlt || `${concept.title} concept`,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${concept.title} - Concept ${concept.id} | Lamisa`,
      description: `${concept.subtitle}. ${concept.theme}`,
      images: concept.heroImage ? [concept.heroImage] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const conceptIds = getAllConceptIds();
  return conceptIds.map((id) => ({
    concept: id,
  }));
}

export default function ConceptPage({ params }: ConceptPageProps) {
  const { concept: conceptId } = use(params);
  const concept = getConcept(conceptId);
  
  if (!concept) {
    notFound();
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950 flex items-center justify-center">
        <div className="text-amber-200 text-lg">Loading...</div>
      </div>
    }>
      <ConceptClient concept={concept} />
    </Suspense>
  );
}

