import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domus BCN 2026 — Portal Inmobiliario Premium",
  description:
    "Encuentra tu hogar ideal en Barcelona. Propiedades exclusivas, pisos, casas y locales sincronizados desde Inmovilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}

        <Footer />

        {/* Global Floating Actions - visible across the whole site */}
        <FloatingButtons propertyTitle="Domus BCN 2026" propertyId="home" />
      </body>
    </html>
  );
}
