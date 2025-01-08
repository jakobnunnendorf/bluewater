import Footer from "@/app/components/LayoutComponents/Footer";
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
        <main className="">{children}</main>
        <Footer marginTop="" />
      </body>
    </html>
  );
}
