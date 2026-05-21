import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/layout/CTAFooter";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Liedko Studio — Web Design & Development Agency",
  description:
    "We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof. Based in Bucharest, Romania.",
  keywords: "web design, web development, e-commerce, SEO, branding, digital marketing, agency, Romania",
  openGraph: {
    title: "Liedko Studio — Web Design & Development Agency",
    description:
      "We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">
        <LanguageProvider>
          <Navbar />
          <main style={{ background: "#000" }}>
            {children}
          </main>
          <CTAFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
