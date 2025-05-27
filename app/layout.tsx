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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prateek Kumar",
  description: "Prateek Kumar portfolio website",
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
        <Resume />
        <MessageBtn />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          <main className="flex-1 container lg:max-w-4xl mx-auto pt-20 px-4">
            {children}
          </main>
          <Footer itemList={footerContent} />
        </ThemeProvider>
        <BackgroundBeams className="z-[-10] min-h-screen text-neutral-300" />
      </body>
    </html>
  );
}
