// src/app/layout.tsx

import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "A Voice Born of Vision, Grounded in Truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${merriweather.variable}`}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}