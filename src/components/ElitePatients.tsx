"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";

// Inline Instagram SVG icon
function InstagramIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#e1306c" }}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const patients = [
  {
    name: "Roberto Carlos",
    role: "Leyenda Mundial del Fútbol / Campeón del Mundo con Brasil / Real Madrid Icon",
    image: "/patient-robertocarlos.png",
    instagram: "https://www.instagram.com/robertocarlosofficiel",
    handle: "@robertocarlosofficiel",
    accent: "#ea580c",
  },
  {
    name: "André-Pierre Gignac",
    role: "Máximo goleador histórico de Tigres UANL / Ex-Seleccionado Francés",
    image: "/patient-gignac.jpg",
    instagram: "https://www.instagram.com/10apg",
    handle: "@10apg",
    accent: "#f5c518",
  },
  {
    name: "Emanuel Noir",
    role: "Cantante y Líder de Ke Personajes",
    image: "/patient-noir.jpg",
    instagram: "https://www.instagram.com/emanuelnoir",
    handle: "@emanuelnoir",
    accent: "#7c3aed",
  },
  {
    name: "Maxi Meza",
    role: "Ex-Jugador de Rayados de Monterrey / River Plate / Selección Argentina",
    image: "/patient-meza.jpg",
    instagram: "https://www.instagram.com/maximeza7",
    handle: "@maximeza7",
    accent: "#f5c518",
  },
  {
    name: "Miguel 'Piojo' Herrera",
    role: "Director Técnico Profesional / Ex-DT Selección Mexicana",
    image: "/patient-herrera-clean.jpg",
    instagram: "https://www.instagram.com/miguelherreradt",
    handle: "@miguelherreradt",
    accent: "#ea580c",
  },
  {
    name: "Rafael Carioca",
    role: "Mediocampista de Tigres UANL / Campeón de Liga MX",
    image: "/patient-carioca.jpg",
    instagram: "https://www.instagram.com/rafaelcarioca",
    handle: "@rafaelcarioca",
    accent: "#7c3aed",
  },
];

export default function ElitePatients() {
  return (
    <section
      id="pacientes-elite"
      style={{
        background: "var(--black-soft)",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 60%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "4rem" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--yellow)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              <ShieldCheck size={14} style={{ color: "var(--yellow)" }} />
              Testimonio de Élite
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Atletas de{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Alto Rendimiento
              </span>
            </h2>
            <p className="section-subtitle">
              Personalidades del deporte mundial y la música confían la salud de su columna en las manos de All Anatomy.
            </p>
          </div>

          <a
            href="https://www.instagram.com/all_anatomy"
            target="_blank"
            rel="noopener noreferrer"
            id="elite-instagram-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              color: "#fff",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "0.75rem 1.5rem",
              borderRadius: "1rem",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver más en Instagram <ChevronRight size={15} />
          </a>
        </div>

        {/* Gallery Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {patients.map((patient, idx) => (
            <motion.div
              key={patient.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              style={{
                background: "rgba(15, 15, 15, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderRadius: "2.5rem",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.75)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                aspectRatio: "3/4",
              }}
              whileHover={{
                y: -10,
                borderColor: `${patient.accent}40`,
                boxShadow: `0 35px 70px rgba(0, 0, 0, 0.9), 0 0 35px ${patient.accent}12`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Photo */}
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                  src={patient.image}
                  alt={patient.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={85}
                />
                {/* Visual dark fades */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(5,5,5,0.02) 0%, rgba(5,5,5,0.2) 35%, rgba(5,5,5,0.75) 65%, rgba(5,5,5,0.98) 100%)",
                  }}
                />
                {/* Color tone glow on hover */}
                <div
                  className="color-tint"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${patient.accent}12 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Card Content (Bottom Aligned) */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "2rem",
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {/* Social handle tag */}
                <a
                  href={patient.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "9999px",
                    background: "rgba(5, 5, 5, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                    e.currentTarget.style.background = "rgba(5, 5, 5, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.background = "rgba(5, 5, 5, 0.7)";
                  }}
                >
                  <InstagramIcon size={12} />
                  {patient.handle}
                </a>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {patient.name}
                </h3>

                {/* Role description */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.55)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.45,
                  }}
                >
                  {patient.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
