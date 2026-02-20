import type { Metadata } from "next";
import { Roboto_Condensed, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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

export const metadata: Metadata = {
  title: "Juan David Herrera | Web Personal",
  description:
    "Portafolio personal de Juan David Herrera — Senior ML Backend Engineer",
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
    <html lang="es" className={`${robotoCondensed.variable} ${figtree.variable} ${jetbrains.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
