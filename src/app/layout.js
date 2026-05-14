import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18143610596"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18143610596');
          `}
        </Script>
      </body>
    </html>
  );
}
