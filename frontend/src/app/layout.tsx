import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SITE_URL } from "@/data/profile";
import "./globals.css";

const sans = localFont({
  src: "./fonts/instrument-sans-latin-wght-normal.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains",
  weight: "400 700",
  display: "swap",
});

const DESCRIPTION =
  "AI engineer in Bengaluru building LLM agents and the pipelines that ship them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Prateek Kumar, AI engineer", template: "%s | Prateek Kumar" },
  description: DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: {
    title: "Prateek Kumar, AI engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Prateek Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary", creator: "@codeWalker66" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-[42rem] px-5 pb-24 pt-10 sm:pt-16">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
