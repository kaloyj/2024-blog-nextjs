import type { Metadata } from "next";
import FaviconOverride from "./favicon-override";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/lamisa/icon",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: "/lamisa/icon",
    apple: "/lamisa/icon",
  },
};

export default function LamisaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FaviconOverride />
      {children}
    </>
  );
}
