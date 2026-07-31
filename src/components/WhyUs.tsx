"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FlaskConical, Trophy, Users, MapPin } from "lucide-react";

const differentiators = [
  {
    id: "verificado",
    icon: BadgeCheck,
    color: "#7c3aed",
    title: "Cuenta Verificada",
    description:
      "Somos una de las pocas clínicas quiroprácticas con cuenta verificada en Instagram y más de 49,000 seguidores en comunidad activa.",
  },
  {
    id: "cofepris",
    icon: FlaskConical,
    color: "#ea580c",
    title: "Permiso COFEPRIS Vigente",
    description:
      "Contamos con permiso oficial de publicidad médica COFEPRIS, lo que nos distingue en transparencia regulatoria dentro del sector.",
  },
  {
    id: "instituto",
    icon: Trophy,
    color: "#f5c518",
    title: "Instituto Reconocido por SEP",
    description:
      "Nuestro Instituto tiene reconocimiento oficial del Gobierno de México, SEP-Conocer y UNT México. Formamos a los mejores profesionales.",
  },
  {
    id: "roberto-carlos",
    icon: Users,
    color: "#e63327",
    title: "Caso Roberto Carlos",
    description:
      "Referente de alto perfil: el exfutbolista Roberto Carlos ha sido atendido con nuestra técnica de Descompresión Axial, validando nuestra efectividad.",
  },
  {
    id: "rating",
    icon: Trophy,
    color: "#7c3aed",
    title: "4.9 ★ en Directorios Locales",
    description:
      "Calificación externa de 4.9 estrellas en directorios verificados. Cientos de reseñas de pacientes reales hablan por nosotros.",
  },
  {
    id: "sucursales",
    icon: MapPin,
    color: "#ea580c",
    title: "2 Sucursales Estratégicas",
    description:
      "Ubicados en Valle del Campestre (Parque Arboleda, San Pedro) y zona Contry — accesibles para toda el área metropolitana de Monterrey.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      style={{
        background: "var(--black-soft)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(234,88,12,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem", maxWidth: "640px" }}
        >
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
            Nuestros diferenciadores
          </div>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            ¿Por qué elegir{" "}
            <span
              style={{
                background: "var(--gradient-red-yellow)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              All Anatomy?
            </span>
          </h2>
          <p className="section-subtitle">
            En un sector donde la confianza lo es todo, nuestras credenciales y
            resultados hablan por sí solos.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--black-border)",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid var(--black-border)",
          }}
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={item.id}
              id={`why-item-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "var(--black-soft)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s",
              }}
              whileHover={{ background: "rgba(20,20,20,1)" }}
            >
              {/* Hover glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <item.icon size={20} style={{ color: item.color }} />
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
