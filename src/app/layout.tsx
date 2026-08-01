import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "All Anatomy | Quiropráctica y Terapia Deportiva en Monterrey",
    template: "%s | All Anatomy",
  },
  description:
    "Clínica de quiropráctica y terapia deportiva en Monterrey. Especialistas en Descompresión Axial, Masaje Deportivo y Punción Seca. 2 sucursales, cuenta verificada, permiso COFEPRIS.",
  keywords: [
    "quiropráctica Monterrey",
    "terapia deportiva Monterrey",
    "descompresión axial",
    "masaje deportivo Monterrey",
    "punción seca Monterrey",
    "all anatomy",
    "clínica deportiva San Pedro",
  ],
  authors: [{ name: "All Anatomy" }],
  creator: "All Anatomy",
  metadataBase: new URL("https://allanatomy.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://allanatomy.com",
    siteName: "All Anatomy",
    title: "All Anatomy | Quiropráctica y Terapia Deportiva en Monterrey",
    description:
      "Clínica premium de quiropráctica y terapia deportiva en Monterrey. Técnica propia de Descompresión Axial con reconocimiento oficial.",
    images: [
      {
        url: "/logo-white-v2.png",
        width: 1200,
        height: 630,
        alt: "All Anatomy — Chiropractic & Athletic Therapy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Anatomy | Quiropráctica y Terapia Deportiva en Monterrey",
    description:
      "Clínica premium de quiropráctica y terapia deportiva en Monterrey.",
    images: ["/logo-white-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body>
        {children}
        <WhatsAppFloat />
        <SpeedInsights />
      </body>
    </html>
  );
}
