"use client";

import { useEffect } from "react";

/** Chrome prefers the root favicon.ico over route icons — replace it on Lamisa pages. */
export default function FaviconOverride() {
  useEffect(() => {
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach((link) => link.parentNode?.removeChild(link));

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = "32x32";
    link.href = "/lamisa/icon?v=lamisa-950";
    document.head.appendChild(link);
  }, []);

  return null;
}
