import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moster SMD Technik GmbH",
  description: "Ihr Spezialist für SMD-Bestückung, Serienfertigung und Prototypenbau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
