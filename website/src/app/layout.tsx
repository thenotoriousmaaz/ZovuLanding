import type { Metadata } from "next";
import { Outfit, Libre_Baskerville, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Expose Libre Baskerville for headings
export const libreBaskerville = Libre_Baskerville({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "ZOVU – Homepage",
  description: "ZOVU OS website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </head>
      <body
        className={`${outfit.variable} ${libreBaskerville.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
