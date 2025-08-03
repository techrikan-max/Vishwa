import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vishwa - Sacred Spiritual Jewelry",
  description: "Harness the Power of Rudraksha - Authentic spiritual beads for your sacred journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} antialiased`}
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
