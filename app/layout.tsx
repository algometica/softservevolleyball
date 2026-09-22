import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clubName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soft Serve Volley Club | High Level youth volleyball training in Surrey BC",
    template: `%s · ${clubName}`,
  },
  description:
    "Soft Serve Volley Club is a U16 club team in Surrey, BC. 2027 club season.",
  applicationName: clubName,
  keywords: [
    "Soft Serve Volley Club",
    "Soft Serve Volleyball Club",
    "SSV volleyball",
    "U16 volleyball Surrey",
    "volleyball club South Surrey",
    "Volleyball BC club",
  ],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Soft Serve Volley Club",
    description:
      "U16 club team. 2027 club season. Surrey, BC.",
    url: siteUrl,
    siteName: clubName,
    locale: "en_CA",
    type: "website",
    images: [{ url: "/ssv-logo.png", width: 720, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soft Serve Volley Club",
    description: "U16 club team. 2027 club season. Surrey, BC.",
    images: ["/ssv-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
