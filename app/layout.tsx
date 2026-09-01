import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://softservevolleyclub.ca"),
  title: {
    default: "Soft Serve Volleyball Club",
    template: "%s · Soft Serve Volleyball Club",
  },
  description:
    "U16 travel team. 2027 season. Developing youth for athletic performance. A Volleyball BC member club.",
  applicationName: "Soft Serve Volleyball Club",
  openGraph: {
    title: "Soft Serve Volleyball Club",
    description: "U16. 2027 season. Travel team.",
    url: "https://softservevolleyclub.ca",
    siteName: "Soft Serve Volleyball Club",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
