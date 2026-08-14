import type { Metadata } from "next";
import SaltilloClient from "./SaltilloClient";

export const metadata: Metadata = {
  title: "Ajuste Quiropráctico en Saltillo — All Anatomy | Jueves 21 de Agosto",
  description:
    "Fecha especial de ajuste quiropráctico en Saltillo, Coahuila. Jueves 21 de agosto, 9 AM a 1 PM. Solo $1,000 MXN en efectivo. Edgar Delgado, especialista certificado SEP. ¡Cupo limitado!",
  openGraph: {
    title: "Ajuste Quiropráctico en Saltillo — All Anatomy",
    description:
      "📍 Jueves 21 de Agosto · 9 AM – 1 PM · Solo $1,000 MXN en efectivo. Ajuste quiropráctico profesional con Edgar Delgado. ¡Cupo limitado de 30 lugares!",
    url: "https://allanatomy.com.mx/saltillo",
    siteName: "All Anatomy",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/flyer-saltillo-real.jpg",
        width: 1080,
        height: 1080,
        alt: "Flyer Ajuste Quiropráctico Saltillo — All Anatomy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajuste Quiropráctico en Saltillo — All Anatomy",
    description:
      "📍 Jueves 21 de Agosto · 9 AM – 1 PM · $1,000 MXN efectivo. ¡Cupo limitado!",
    images: ["/flyer-saltillo-real.jpg"],
  },
};

export default function SaltilloPage() {
  return <SaltilloClient />;
}
