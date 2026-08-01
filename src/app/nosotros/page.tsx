"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    emoji: "🎯",
    title: "Evidencia clínica",
    desc: "Cada técnica que aplicamos está respaldada por investigación científica y validada por resultados reales en cientos de pacientes en Monterrey.",
    color: "#7c3aed",
  },
  {
    emoji: "🔬",
    title: "Transparencia regulatoria",
    desc: "Operamos bajo un estricto cumplimiento legal. Contamos con permiso oficial COFEPRIS y priorizamos la educación de nuestros pacientes.",
    color: "#ea580c",
  },
  {
    emoji: "🏆",
    title: "Excelencia y formación",
    desc: "A través de nuestro propio brazo educativo, All Anatomy Institute, certificamos y formamos a los mejores profesionales quiroprácticos del país.",
    color: "#e63327",
  },
  {
    emoji: "❤️",
    title: "Atención personalizada",
    desc: "Entendemos que cada cuerpo es diferente. Diseñamos planes de rehabilitación a la medida de tus actividades físicas y estilo de vida.",
    color: "#f5c518",
  },
];

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "49K+", label: "Seguidores Instagram" },
  { value: "4.9★", label: "Calificación Promedio" },
  { value: "2", label: "Sucursales MTY" },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6rem", background: "var(--black)", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "80vw",
            background: "radial-gradient(circle, rgba(124,58,237,0.03) 0%, transparent 60%)",
            filter: "blur(90px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Hero */}
        <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center", marginBottom: "5rem" }}>
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--yellow)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                Quiénes somos
              </div>
              <h1
                className="section-title"
                style={{ marginBottom: "1.25rem", fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
              >
                Más que una clínica,{" "}
                <span
                  style={{
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  un referente
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                All Anatomy nació con la firme misión de democratizar el acceso a atención quiropráctico-deportiva de alta calidad en Monterrey. Desde nuestros inicios, hemos combinado técnicas avanzadas, evidencia clínica rigurosa y calidez humana para restaurar la movilidad y eliminar el dolor crónico de nuestros pacientes.
              </p>

              {/* Stats Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.25rem",
                }}
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "1.25rem",
                      padding: "1.25rem",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "2.25rem",
                        fontWeight: 800,
                        background: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1.1,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "2rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <Image
                src="/clinic-real.jpg"
                alt="All Anatomy Monterrey"
                fill
                style={{ objectFit: "cover" }}
                quality={85}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent, rgba(5,5,5,0.85))",
                }}
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <div style={{ marginTop: "6rem" }}>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--yellow)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Nuestros pilares fundamentales
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                marginBottom: "3.5rem",
                letterSpacing: "-0.03em",
              }}
            >
              Valores que nos{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                definen.
              </span>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-dark"
                  style={{
                    padding: "2.25rem",
                    borderTop: `2px solid ${v.color}35`,
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: v.color,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `${v.color}12`,
                      border: `1px solid ${v.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {v.emoji}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.75,
                    }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
