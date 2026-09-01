import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://softservevolleyclub.ca"),
  title: {
    default: "Soft Serve Volley Club",
    template: "%s · Soft Serve Volley Club",
  },
  description:
    "U16 travel team. 2027 season. Developing youth for athletic performance.",
  applicationName: "Soft Serve Volley Club",
  openGraph: {
    title: "Soft Serve Volley Club",
    description: "2027 season. U16 travel team.",
    url: "https://softservevolleyclub.ca",
    siteName: "Soft Serve Volley Club",
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
