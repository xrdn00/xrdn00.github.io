import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xrdn00 Github Page",
  description: "xrdn00 github page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
