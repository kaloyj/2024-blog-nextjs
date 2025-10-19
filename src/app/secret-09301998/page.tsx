import { Metadata } from "next";
import JournalClient from "./journal-client";

export const metadata: Metadata = {
  title: "Journal",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function SecretJournalPage() {
  return <JournalClient />;
}

