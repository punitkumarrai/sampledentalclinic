import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sample Dental Clinic — Premium Dental Care in Greater Noida",
  description:
    "Trusted dental clinic near Alpha 2 Main Market, Greater Noida. Gentle, modern care for the whole family — teeth cleaning, braces, implants, root canal & more. Book your appointment today.",
  keywords: [
    "dentist greater noida",
    "dental clinic alpha 2",
    "teeth cleaning",
    "braces orthodontics",
    "dental implants greater noida",
    "root canal treatment",
    "kids dentistry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
