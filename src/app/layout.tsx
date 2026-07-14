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

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.juandaherrera.com/#person",
      name: "Juan David Herrera",
      url: "https://www.juandaherrera.com",
      image: "https://www.juandaherrera.com/img/juanda.webp",
      jobTitle: "Senior ML Backend Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Snoonu",
        url: "https://www.snoonu.com/",
      },
      description:
        "Ingeniero Industrial y Senior ML Backend Engineer con más de 5 años de experiencia en backend y data engineering, ML en producción y arquitecturas de microservicios.",
      knowsAbout: [
        "Python",
        "FastAPI",
        "Machine Learning",
        "Backend Engineering",
        "Data Engineering",
        "Airflow",
        "Microservices",
      ],
      sameAs: [
        "https://github.com/juandaherrera",
        "https://www.linkedin.com/in/juan-david-herrera/",
        "https://www.instagram.com/juandaherrep/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.juandaherrera.com/#website",
      url: "https://www.juandaherrera.com",
      name: "Juan David Herrera | Web Personal",
      description: "Portafolio personal de Juan David Herrera — Senior ML Backend Engineer",
      publisher: { "@id": "https://www.juandaherrera.com/#person" },
      inLanguage: "es",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juandaherrera.com"),
  title: "Juan David Herrera | Web Personal",
  description: "Portafolio personal de Juan David Herrera — Senior ML Backend Engineer",
  keywords: [
    "Juan David Herrera",
    "ML Backend Engineer",
    "Python Developer",
    "Data Engineer",
    "FastAPI",
    "Machine Learning",
  ],
  authors: [{ name: "Juan David Herrera", url: "https://www.juandaherrera.com" }],
  alternates: {
    canonical: "https://www.juandaherrera.com",
  },
  openGraph: {
    type: "website",
    siteName: "Juan David Herrera | Web Personal",
    locale: "es_CO",
    url: "https://www.juandaherrera.com",
    title: "Juan David Herrera | Web Personal",
    description:
      "Senior ML Backend Engineer con más de 5 años de experiencia en backend y data engineering.",
    images: ["/img/web_preview.jpg"],
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
        <Script
          id="json-ld"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static build-time JSON-LD, no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
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
