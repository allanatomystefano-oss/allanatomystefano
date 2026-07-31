"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, ShieldAlert, CheckCircle } from "lucide-react";
import Link from "next/link";
import BranchModal from "./BranchModal";

// Define TypeScript interfaces
interface SymptomZone {
  id: string;
  name: string;
  emoji: string;
  color: string;
  symptoms: string[];
  cause: string;
  solution: string;
  solutionDescription: string;
  targetServiceUrl: string;
}

const symptomZones: SymptomZone[] = [
  {
    id: "cervical",
    name: "Cervical / Cuello",
    emoji: "💆‍♂️",
    color: "#7c3aed", // Violeta
    symptoms: [
      "Dolor o rigidez en el cuello al girar la cabeza",
      "Dolores de cabeza constantes (cefaleas tensionales)",
      "Bruxismo / tensión acumulada en la mandíbula",
      "Hormigueo o debilidad en hombros, brazos o manos",
    ],
    cause: "Pérdida de curvatura cervical, contracturas en trapecios y subluxaciones vertebrales debido a mala postura o estrés.",
    solution: "Ajuste Quiropráctico Cervical + Punción Seca",
    solutionDescription: "Combinamos el ajuste manual preciso de las vértebras del cuello para liberar la presión nerviosa con punción seca para desactivar los puntos gatillo más profundos de los trapecios.",
    targetServiceUrl: "/servicios/quiropractica",
  },
  {
    id: "dorsal",
    name: "Espalda Alta / Dorsales",
    emoji: "🧍‍♂️",
    color: "#e63327", // Rojo
    symptoms: [
      "Dolor punzante entre los omóplatos (paletillas)",
      "Sensación de pesadez o 'nudos' musculares constantes",
      "Dificultad para mantener la espalda erguida",
      "Tensión acumulada al estar mucho tiempo sentado frente a la computadora",
    ],
    cause: "Postura cifótica (espalda encorvada), fatiga muscular por sobrecarga y contracturas crónicas en el músculo romboides.",
    solution: "Masaje Deportivo + Ajuste Dorsal",
    solutionDescription: "Descarga profunda de los tejidos musculares contracturados de la espalda alta combinada con ajustes quiroprácticos específicos para recuperar la movilidad de la caja torácica.",
    targetServiceUrl: "/servicios/masaje-deportivo",
  },
  {
    id: "lumbar",
    name: "Lumbar / Ciática / Hernias",
    emoji: "⚡",
    color: "#ea580c", // Naranja
    symptoms: [
      "Dolor agudo o sordo en la parte baja de la espalda",
      "Dolor punzante que irradia hacia el glúteo y baja por la pierna (Ciática)",
      "Rigidez intensa por las mañanas al levantarse de la cama",
      "Imposibilidad de permanecer parado o sentado por periodos largos",
    ],
    cause: "Compresión de discos intervertebrales, hernias discales, o pinzamiento del nervio ciático por desalineación pélvica.",
    solution: "Descompresión Axial + Ajuste Lumbar",
    solutionDescription: "Nuestra técnica insignia certificada. Generamos presión negativa en los discos lumbares para retraer hernias e hidratar el disco, complementado con alineación de la pelvis y lumbares.",
    targetServiceUrl: "/servicios/descompresion-axial",
  },
  {
    id: "articulaciones",
    name: "Articulaciones y Extremidades",
    emoji: "🏃‍♂️",
    color: "#f5c518", // Amarillo
    symptoms: [
      "Dolor o limitación de movimiento en hombros, codos o rodillas",
      "Sensación de 'traba' o chasquido doloroso al entrenar",
      "Inflamación persistente después de hacer ejercicio",
      "Tendinitis (de Aquiles, rotuliana, hombro)",
    ],
    cause: "Desgaste articular, sobrecarga por mala biomecánica deportiva, microdesgarros o tendinopatías crónicas.",
    solution: "Terapia Manual + Punción Seca",
    solutionDescription: "Liberación miofascial activa de los tendones comprometidos y punción seca enfocada en acelerar la regeneración de los tejidos inflamados para recuperar la fuerza del atleta.",
    targetServiceUrl: "/servicios/puncion-seca",
  },
];

export default function SymptomSelector() {
  const [activeZoneId, setActiveZoneId] = useState<string>("cervical");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeZone = symptomZones.find((z) => z.id === activeZoneId) || symptomZones[0];

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "var(--black-soft)",
        borderTop: "1px solid rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(124,58,237,0.02) 0%, transparent 60%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Activity size={14} />
            Autoevaluación Rápida
          </div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "1.25rem" }}
          >
            ¿En dónde sientes{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              malestar o tensión?
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "550px",
              margin: "0 auto",
            }}
          >
            Haz clic en la zona de tu cuerpo donde experimentas dolor para ver síntomas comunes y nuestra recomendación de tratamiento.
          </p>
        </div>

        {/* Interactive layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Buttons Panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {symptomZones.map((zone) => {
              const isActive = zone.id === activeZoneId;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneId(zone.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.5rem 1.75rem",
                    borderRadius: "1.5rem",
                    background: isActive ? `${zone.color}08` : "rgba(255, 255, 255, 0.01)",
                    border: isActive ? `1px solid ${zone.color}50` : "1px solid rgba(255, 255, 255, 0.05)",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#fff",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    outline: "none",
                    boxShadow: isActive ? `0 10px 30px -10px ${zone.color}25` : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.01)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.75rem",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {zone.emoji}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        display: "block",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {zone.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: isActive ? zone.color : "rgba(255,255,255,0.35)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Ver diagnóstico sugerido
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    style={{
                      color: isActive ? zone.color : "rgba(255,255,255,0.15)",
                      transform: isActive ? "translateX(4px)" : "translateX(0)",
                      transition: "all 0.3s",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Recommendation Card */}
          <div
            style={{
              background: "rgba(12, 12, 12, 0.8)",
              border: `1px solid ${activeZone.color}25`,
              borderRadius: "2.25rem",
              padding: "2.5rem",
              backdropFilter: "blur(20px)",
              boxShadow: `0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 40px -10px ${activeZone.color}05`,
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border 0.5s ease, box-shadow 0.5s ease",
            }}
          >
            {/* Symptoms list */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <ShieldAlert size={18} style={{ color: activeZone.color }} />
                <span
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Síntomas Frecuentes
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {activeZone.symptoms.map((sym, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.92rem",
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle size={15} style={{ color: activeZone.color, flexShrink: 0, marginTop: "2px" }} />
                    {sym}
                  </li>
                ))}
              </ul>

              {/* Cause paragraph */}
              <div style={{ borderLeft: `2px solid ${activeZone.color}40`, paddingLeft: "1.25rem", marginBottom: "2rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}
                >
                  Causa Común
                </span>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
                  {activeZone.cause}
                </p>
              </div>
            </div>

            {/* Recommendation Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "1.5rem",
                padding: "1.5rem",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: activeZone.color,
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                }}
              >
                Tratamiento Recomendado:
              </span>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                {activeZone.solution}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "1.25rem",
                }}
              >
                {activeZone.solutionDescription}
              </p>

              {/* Actions row inside solution card */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-whatsapp"
                  style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.8rem",
                    borderRadius: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  Agendar Cita
                </button>
                <Link
                  href={activeZone.targetServiceUrl}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  Ver Tratamiento <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
