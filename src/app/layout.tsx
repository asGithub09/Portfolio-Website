import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Akash Srivastava — Full-Stack Developer",
  description:
    "Portfolio of Akash Srivastava — Full-Stack Developer building digital products, automation systems and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
