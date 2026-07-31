import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";

export const metadata: Metadata = {
  title: "Sucursales",
  description:
    "All Anatomy cuenta con 2 sucursales en Monterrey: Parque Arboleda (Valle del Campestre, San Pedro) y zona Contry. Horarios y ubicaciones.",
};

export default function SucursalesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "var(--black)", minHeight: "100vh" }}>
        <section style={{ padding: "3rem 1.5rem 0", maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Dónde estamos
          </div>
          <h1
            className="section-title"
            style={{ marginBottom: "1rem", maxWidth: "580px" }}
          >
            Nuestras{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              2 Sucursales
            </span>
          </h1>
          <p className="section-subtitle">
            Monterrey, Nuevo León. Visítanos sin cita previa o agenda por WhatsApp.
          </p>
        </section>
        <Locations />
      </main>
      <Footer />
    </>
  );
}
