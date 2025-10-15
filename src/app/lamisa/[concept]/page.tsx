import { use } from 'react';
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
    },
    twitter: {
      card: 'summary_large_image',
      title: `${concept.title} - Concept ${concept.id} | Lamisa`,
      description: `${concept.subtitle}. ${concept.theme}`,
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

  return <ConceptClient concept={concept} />;
}

