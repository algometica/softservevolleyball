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
    "U16 club team. 2027 season. Developing youth for athletic performance.",
  applicationName: "Soft Serve Volley Club",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Soft Serve Volley Club",
    description: "2027 season. U16 club team.",
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
