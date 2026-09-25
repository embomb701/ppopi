import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { AmbientScene } from "@/components/ambient-scene";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260925b", sizes: "any", type: "image/x-icon" },
      { url: "/icon-32.png?v=20260925b", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg?v=20260925b", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=20260925b",
    apple: "/apple-touch-icon.png?v=20260925b",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="page-shell">
          <AmbientScene />
          <Header />
          <main id="main" className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
