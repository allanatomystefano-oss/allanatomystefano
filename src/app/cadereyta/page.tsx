import type { Metadata } from "next";
import CadereytaClient from "./CadereytaClient";

export const metadata: Metadata = {
  title: "Ajuste Quiropráctico en Cadereyta — All Anatomy | Sábado 29 de Agosto",
  description:
    "Fecha especial de ajuste quiropráctico en Cadereyta Jiménez, NL. Sábado 29 de agosto, 9 AM a 1 PM en Olympus Fitness Gym. Solo $1,000 MXN en efectivo. ¡Cupo limitado!",
  openGraph: {
    title: "Ajuste Quiropráctico en Cadereyta — All Anatomy",
    description:
      "📍 Sábado 29 de Agosto · 9 AM – 1 PM · Olympus Fitness Gym · Solo $1,000 MXN en efectivo. Ajuste quiropráctico profesional con Edgar Delgado. ¡Cupo limitado!",
    url: "https://allanatomy.com.mx/cadereyta",
    siteName: "All Anatomy",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/flyer-cadereyta.jpg",
        width: 1080,
        height: 1080,
        alt: "Flyer Ajuste Quiropráctico Cadereyta — All Anatomy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajuste Quiropráctico en Cadereyta — All Anatomy",
    description:
      "📍 Sábado 29 de Agosto · 9 AM – 1 PM · $1,000 MXN efectivo. ¡Cupo limitado!",
    images: ["/flyer-cadereyta.jpg"],
  },
};

export default function CadereytaPage() {
  return <CadereytaClient />;
}
