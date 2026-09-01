import { use, Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPopup, getAllPopupIds } from "@/data/lamisa-popups";
import PopupClient from "./popup-client";

interface PopupPageProps {
  params: Promise<{ popup: string }>;
}

export async function generateMetadata({
  params,
}: PopupPageProps): Promise<Metadata> {
  const { popup: popupId } = await params;
  const popup = getPopup(popupId);

  if (!popup) {
    return {
      title: "Popup Not Found - Lamisa",
      description: "The requested popup could not be found.",
    };
  }

  return {
    title: `${popup.title} - ${popup.subtitle} | Lamisa`,
    description: `${popup.subtitle} popup menu by Lamisa.`,
    openGraph: {
      title: `${popup.title} - ${popup.subtitle} | Lamisa`,
      description: `${popup.subtitle} popup menu by Lamisa.`,
      type: "website",
      images: popup.heroImage
        ? [
            {
              url: popup.heroImage,
              width: 1400,
              height: 1200,
              alt: popup.heroImageAlt || `${popup.title} popup`,
            },
          ]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const popupIds = getAllPopupIds();
  return popupIds.map((id) => ({
    popup: id,
  }));
}

export default function PopupPage({ params }: PopupPageProps) {
  const { popup: popupId } = use(params);
  const popup = getPopup(popupId);

  if (!popup) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950 flex items-center justify-center">
          <div className="text-amber-200 text-lg">Loading...</div>
        </div>
      }
    >
      <PopupClient popup={popup} />
    </Suspense>
  );
}
