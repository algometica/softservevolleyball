import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clubName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      `${clubName} | High-level youth volleyball training in South Surrey, BC`,
    template: `%s · ${clubName}`,
  },
  description:
    `${clubName} is a U16 club team in South Surrey, BC. 2027 club season.`,
  applicationName: clubName,
  keywords: [
    "Super Nova Volleyball Club",
    "Super Nova Volley Club",
    "Supernova volleyball",
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
    title: clubName,
    description:
      "U16 club team. 2027 club season. South Surrey, BC.",
    url: siteUrl,
    siteName: clubName,
    locale: "en_CA",
    type: "website",
    images: [{ url: "/snv-logo.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: clubName,
    description: "U16 club team. 2027 club season. South Surrey, BC.",
    images: ["/snv-logo.png"],
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
