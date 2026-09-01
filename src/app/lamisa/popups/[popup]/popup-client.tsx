"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Instagram } from "lucide-react";
import { Popup } from "@/data/lamisa-popups";

interface PopupClientProps {
  popup: Popup;
}

function formatPrice(amount: number) {
  return `€${amount.toFixed(0)}`;
}

export default function PopupClient({ popup }: PopupClientProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950 py-12 md:py-20 px-4"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <div className="max-w-md mx-auto mb-4">
        <Link
          href="/lamisa"
          className="inline-flex items-center gap-2 text-amber-300/70 hover:text-amber-200 text-sm tracking-wide transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          lamisa
        </Link>
      </div>

      <main className="max-w-md mx-auto bg-amber-50 text-amber-950 shadow-2xl overflow-hidden">
        {popup.heroImage && (
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={popup.heroImage}
              alt={popup.heroImageAlt || `${popup.title} popup`}
              fill
              className="object-cover"
              sizes="(max-width: 448px) 100vw, 448px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-950/35 via-amber-950/15 to-amber-950/35" />
          </div>
        )}

        <div className="px-8 md:px-12 py-14 md:py-16">
          <header className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-amber-950 mb-2">
              LAMISA
            </h1>
            <p className="text-amber-900 text-sm tracking-widest mb-2">
              {popup.subtitle}
            </p>
            <p className="text-amber-800 text-sm tracking-wide mb-10">
              {popup.title}
            </p>

            <div className="space-y-2 text-sm text-amber-800">
              {popup.date && (
                <p>
                  <span className="text-amber-600">when</span>
                  {" — "}
                  {popup.date}
                </p>
              )}
              {popup.address && (
                <p>
                  <span className="text-amber-600">where</span>
                  {" — "}
                  {popup.address}
                </p>
              )}
            </div>
          </header>

          <div className="space-y-10 text-center">
            {popup.items.map((item) => (
              <div key={item.name}>
                <h2 className="text-base md:text-lg font-medium mb-1.5 text-amber-950">
                  {item.name}
                </h2>
                <p className="text-amber-800 text-sm leading-relaxed mb-1">
                  {item.components.join(", ")}
                </p>
                {item.notes && (
                  <p className="text-amber-700 text-xs italic mb-1.5">
                    {item.notes}
                  </p>
                )}
                <p className="text-amber-950 text-sm font-medium">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="max-w-md mx-auto mt-12 text-center px-4">
        <p className="text-amber-300/80 text-sm mb-4 tracking-wide">
          enjoyed this popup? check other{" "}
          <Link
            href="/lamisa"
            className="text-amber-200 hover:text-amber-100 underline decoration-amber-500/50 hover:decoration-amber-400 transition-colors"
          >
            concepts
          </Link>
          , or follow us on instagram
        </p>
        <a
          href="https://www.instagram.com/lamisa.brunch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-amber-200 hover:text-amber-100 text-sm border-b border-amber-400/50 hover:border-amber-200 pb-0.5 transition-colors group"
        >
          <Instagram size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          @lamisa.brunch
        </a>
      </footer>
    </div>
  );
}
