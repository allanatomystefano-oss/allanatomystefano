"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Reconocimiento oficial SEP-Conocer",
  "Avalado por UNT México",
  "Certificaciones para profesionales de la salud",
  "Cursos presenciales y en línea",
];

export default function InstitutoCTA() {
  return (
    <section
      id="instituto"
      style={{
        background: "var(--black)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(20,20,20,1) 50%, rgba(234,88,12,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "2rem",
            padding: "clamp(2rem, 5vw, 4rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-30%",
              left: "-10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                borderRadius: "9999px",
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                marginBottom: "1.25rem",
              }}
            >
              <GraduationCap size={14} style={{ color: "#7c3aed" }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#7c3aed",
                }}
              >
                All Anatomy Institute
              </span>
            </div>

            <h2
              className="section-title"
              style={{ marginBottom: "1rem", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              ¿Eres profesional{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de la salud?
              </span>
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                marginBottom: "1.75rem",
                maxWidth: "46ch",
              }}
            >
              Certifícate en nuestra técnica exclusiva de Descompresión Axial y
              lleva tu práctica al siguiente nivel. Programa avalado oficialmente
              por el Gobierno de México.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {highlights.map((h) => (
                <li
                  key={h}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <CheckCircle size={15} style={{ color: "#7c3aed", flexShrink: 0 }} />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/instituto"
              className="btn-primary"
              id="instituto-cta-link"
              style={{ display: "inline-flex" }}
            >
              Conocer el Instituto <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right visual */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(234,88,12,0.15))",
                border: "1px solid rgba(124,58,237,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <GraduationCap size={48} style={{ color: "#7c3aed", opacity: 0.8 }} />
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                +50
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                Profesionales certificados
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
