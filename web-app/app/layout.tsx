import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "@/app/LayoutComponents/HeaderBar/HeaderBar";
import Footer from "@/app/LayoutComponents/Footer";
import ContactSection from "@/app/contact/ContactSection";
import Hero from "@/app/LayoutComponents/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueWater Interiors",
  description: "Boutique websites for Yacht Interior Designers",
  icons: {
    icon: "/favicons/favicon_v3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <HeaderBar />
        <Hero />
        <main className="relative md:static md:top-0">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
