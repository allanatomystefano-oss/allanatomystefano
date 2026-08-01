"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Star, Shield, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BranchModal from "./BranchModal";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "49K+", label: "Seguidores verificados" },
  { value: "4.9★", label: "Calificación" },
  { value: "2", label: "Sucursales MTY" },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="inicio"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Full-bleed background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          {/* Desktop version (hidden on mobile) */}
          <div className="hide-on-mobile" style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/hero-bg-new.jpg"
              alt="All Anatomy — Clínica de Quiropráctica y Terapia Deportiva"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={95}
            />
          </div>

          {/* Mobile version (shown only on mobile) */}
          <div className="show-only-on-mobile" style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/hero-bg-mobile.jpg"
              alt="All Anatomy — Clínica de Quiropráctica y Terapia Deportiva"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={95}
            />
          </div>

          {/* Multi-layer dark overlay for text legibility */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.2) 40%, rgba(5,5,5,0.7) 75%, rgba(5,5,5,0.98) 100%)",
            }}
          />
          {/* Left-side fade for text zone */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.6) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Animated grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "8rem 2rem 4rem",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            {/* Pre-badge row */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
              <Link href="/saltillo" style={{ textDecoration: "none" }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(234, 88, 12, 0.4)",
                    background: "rgba(234, 88, 12, 0.12)",
                    cursor: "pointer",
                  }}
                >
                  <Sparkles size={11} style={{ color: "var(--orange)" }} />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                  >
                    📍 Saltillo: 14 Ago — Agendar Lugar
                  </span>
                </motion.div>
              </Link>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(245,197,24,0.35)",
                  background: "rgba(245,197,24,0.08)",
                }}
              >
                <Star size={11} fill="#f5c518" style={{ color: "#f5c518" }} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#f5c518",
                  }}
                >
                  #1 Clínica de Quiropráctica en Monterrey
                </span>
              </motion.div>
            </div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              Tu cuerpo
              <br />
              merece{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                atención
              </span>
              <br />
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de élite.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "2.5rem",
              }}
            >
              Especialistas en Quiropráctica, Terapia Deportiva y nuestra técnica
              exclusiva de{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>
                Descompresión Axial
              </strong>{" "}
              — certificada por SEP y COFEPRIS. 2 sucursales en Monterrey.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "4rem",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-whatsapp"
                id="hero-cta-whatsapp"
                style={{ fontSize: "1rem", padding: "1rem 2rem", cursor: "pointer" }}
              >
                <MessageCircle size={18} />
                Agendar Cita — WhatsApp
              </button>
              <a
                href="/servicios"
                className="btn-secondary"
                id="hero-cta-services"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "1.75rem",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 800,
                      background: "var(--gradient-brand)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust badges row at very bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            position: "relative",
            zIndex: 2,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 2rem",
            background: "rgba(5,5,5,0.7)",
            backdropFilter: "blur(12px)",
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { icon: Shield, text: "Permiso COFEPRIS vigente" },
            { icon: Award, text: "Reconocimiento SEP-Conocer" },
            { icon: Star, text: "4.9★ en directorios locales" },
          ].map((badge) => (
            <div
              key={badge.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.78rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.02em",
              }}
            >
              <badge.icon size={13} style={{ color: "#f5c518", flexShrink: 0 }} />
              {badge.text}
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: "4.5rem",
            right: "2rem",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'Inter', sans-serif",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.2)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Branch selection modal */}
      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
