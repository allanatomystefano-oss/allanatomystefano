import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstitutoClient from "@/components/InstitutoClient";

export const metadata: Metadata = {
  title: "All Anatomy Institute",
  description:
    "Certifícate en Descompresión Axial y otras técnicas exclusivas de All Anatomy. Reconocimiento oficial SEP-Conocer y UNT México.",
};

export default function InstitutoPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "var(--black)", minHeight: "100vh" }}>
        <section style={{ padding: "3rem 1.5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
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
            Para profesionales de la salud
          </div>
          <h1
            className="section-title"
            style={{ marginBottom: "1rem", maxWidth: "680px" }}
          >
            All Anatomy{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Institute
            </span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "54ch" }}>
            El brazo educativo de All Anatomy. Formamos a los próximos especialistas en Descompresión Axial con reconocimiento oficial del Gobierno de México.
          </p>
        </section>
        
        {/* Interactive Client Section */}
        <InstitutoClient />
      </main>
      <Footer />
    </>
  );
}
