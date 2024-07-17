import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


//components
import Socials from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xrdn00 Github",
  description: "xrdn00 github projects",
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
        <Socials />
        
      </body>
    </html>
  );
}
