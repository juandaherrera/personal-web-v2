import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const robotoCondensed = Roboto_Condensed({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-var",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juandaherrera.com"),
  title: "Juan David Herrera | Web Personal",
  description: "Portafolio personal de Juan David Herrera — Senior ML Backend Engineer",
  openGraph: {
    title: "Juan David Herrera | Web Personal",
    description:
      "Senior ML Backend Engineer con más de 5 años de experiencia en backend y data engineering.",
    images: ["/img/web_preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${robotoCondensed.variable} ${figtree.variable} ${jetbrains.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
