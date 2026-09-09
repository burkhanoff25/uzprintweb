import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://uz-print.uz'),
  title: {
    default: "Barcha turdagi poligrafiya xizmatlari | UzPrint Markazi",
    template: "%s | UzPrint",
  },
  description: "Namanganda yuqori sifatli poligrafiya, vizitka, banner va dizayn xizmatlari. Tezkor va ishonchli chop etish markazi. +998972534400",
  keywords: ["Namanganda print", "Namanganda dizayn", "Namanganda reklama", "Vizitka Namangan", "Banner Namangan"],
  alternates: {
    canonical: "/",
    languages: {
      "uz": "/",
      "ru": "/ru", // Assuming a Russian version exists or will exist based on the user's hreflang request
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://uz-print.uz",
    siteName: "UzPrint Markazi",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "UzPrint",
              "image": "https://uz-print.uz/logo.png",
              "telephone": ["+998972534400", "+998692334400"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Namangan",
                "addressCountry": "UZ"
              },
              "url": "https://uz-print.uz",
              "sameAs": [
                "https://t.me/uzprint_uz",
                "https://instagram.com/uzprint"
              ]
            })
          }}
        />
        <Providers>
          <LoadingScreen />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
