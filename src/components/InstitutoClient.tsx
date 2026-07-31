"use client";

import { useState } from "react";
import InstitutoCTA from "@/components/InstitutoCTA";
import BranchModal from "@/components/BranchModal";

export default function InstitutoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InstitutoCTA />

      {/* Coming soon notice */}
      <section style={{ padding: "0 1.5rem 5rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            background: "var(--black-card)",
            border: "1px solid var(--black-border)",
            borderRadius: "1rem",
            padding: "2rem",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🚧</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.5rem",
            }}
          >
            Plataforma de cursos en construcción
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
            }}
          >
            Estamos desarrollando nuestra plataforma LMS para que puedas acceder a los cursos en línea. Por ahora, contáctanos por WhatsApp para información sobre los próximos grupos presenciales.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-whatsapp"
            id="instituto-wa-cta"
            style={{ marginTop: "1.5rem", display: "inline-flex", cursor: "pointer" }}
          >
            Consultar disponibilidad por WhatsApp
          </button>
        </div>
      </section>

      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
