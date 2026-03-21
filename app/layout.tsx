import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../lib/providers/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { footerContent } from "@/data/content";
import Resume from "@/components/ResumeBtn";
import "./globals.css";
import MessageBtn from "@/components/MessageBtn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prateek Kumar — Fullstack Developer & AI Engineer",
    template: "%s | Prateek Kumar",
  },
  description:
    "Full-stack developer bridging AI research and software engineering. Building intelligent systems with Next.js, Node.js, NLP, GenAI, and computer vision.",
  metadataBase: new URL("https://www.prateekkumar.dev"),
  openGraph: {
    title: "Prateek Kumar — Fullstack Developer & AI Engineer",
    description:
      "Full-stack developer bridging AI research and software engineering.",
    url: "https://www.prateekkumar.dev",
    siteName: "Prateek Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Kumar — Fullstack Developer & AI Engineer",
    description:
      "Full-stack developer bridging AI research and software engineering.",
    creator: "@codeWalker66",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <body className="relative font-serif h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Resume />
          <MessageBtn />
          <Navbar />

          <main className="flex-1 container lg:max-w-4xl mx-auto pt-20 px-4">
            {children}
          </main>
          <Footer itemList={footerContent} />
          <ToastContainer />
        </ThemeProvider>
        <BackgroundBeams className="z-[-10] min-h-screen text-neutral-300" />
      </body>
    </html>
  );
}
