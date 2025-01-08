import Footer from "@/app/components/LayoutComponents/Footer";
import HeaderBar from "@/app/components/LayoutComponents/HeaderBar/HeaderBar";
import type { Metadata } from "next";
import "../globals.css";

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
      <body className="">
        <HeaderBar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
