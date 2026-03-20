import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio — Web Design & Development Agency",
  description:
    "We design and build websites that are fast, intentional, and impossible to ignore. Strategy, design, and code — all under one roof. Based in Bucharest, Romania.",
  keywords: "web design, web development, e-commerce, SEO, branding, digital marketing, agency, Romania",
  openGraph: {
    title: "Studio — Web Design & Development Agency",
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
        {children}
      </body>
    </html>
  );
}
