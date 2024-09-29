import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import UnderConstructionModal from "@/components/modal/UnderConstructionModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Iglesia Por su gracia",
  description:
    "Sitio web oficial de la iglesia Por su gracia international church en Dresden Alemania, visítanos y únete a nuestra comunidad, te esperamos conlos brazos abiertos y la bendición de nuestro Dios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <UnderConstructionModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
