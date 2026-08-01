"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Cuenta Instagram verificada · 49K+ seguidores",
  "Permiso de publicidad COFEPRIS vigente",
  "Instituto con reconocimiento SEP-Conocer / UNT México",
  "Caso de alto perfil: Roberto Carlos",
  "4.9★ en directorios externos verificados",
  "Técnica exclusiva de Descompresión Axial",
];

export default function AboutPreview() {
  return (
    <section
      id="nosotros-preview"
      style={{
        background: "var(--black-soft)",
        padding: "7rem 2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Image stack */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative" }}
        >
          {/* Main image */}
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src="/clinic-real.jpg"
              alt="All Anatomy — Clínica de quiropráctica en Monterrey"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              quality={85}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              background: "rgba(10,10,10,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "1.25rem",
              padding: "1.25rem 1.5rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
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
                marginBottom: "0.25rem",
              }}
            >
              4.9★
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
              }}
            >
              Calificación promedio
              <br />
              en directorios verificados
            </div>
          </motion.div>

          {/* Floating image badge top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "-1.5rem",
              background: "rgba(10,10,10,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(245,197,24,0.25)",
              borderRadius: "1rem",
              padding: "0.85rem 1.1rem",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#f5c518",
                marginBottom: "0.2rem",
              }}
            >
              ✓ COFEPRIS
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Permiso vigente
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Por qué elegirnos
          </div>

          <h2
            className="section-title"
            style={{ marginBottom: "1.25rem" }}
          >
            Más que una clínica,{" "}
            <span
              style={{
                background: "var(--gradient-red-yellow)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              un referente.
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "50ch",
            }}
          >
            En un sector donde la confianza lo es todo, nuestras credenciales,
            certificaciones y resultados hablan por sí solos. Somos la clínica
            quiropráctico-deportiva más reconocida de Monterrey.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.72)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "#7c3aed", flexShrink: 0, marginTop: "2px" }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/nosotros"
            className="btn-primary"
            id="about-preview-cta"
            style={{ display: "inline-flex" }}
          >
            Conocer nuestra historia <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
