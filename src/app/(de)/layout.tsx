import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

/** Root-Layout für Deutsch (Standardsprache, ohne URL-Präfix). */
export const metadata = rootMetadata("de");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="de">{children}</RootShell>;
}
