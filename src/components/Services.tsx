"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "quiropractica",
    emoji: "🦴",
    title: "Quiropráctica",
    description:
      "Ajustes vertebrales profesionales para aliviar el dolor, mejorar la postura y restaurar la función nerviosa. Sin medicamentos.",
    color: "#7c3aed",
    href: "/servicios/quiropractica",
    image: "/edgar/edgar-quiropractica-real.jpg",
  },
  {
    id: "descompresion",
    emoji: "⚡",
    title: "Descompresión Axial",
    description:
      "Nuestra técnica propia con reconocimiento oficial SEP-Conocer. Indicada para hernias discales, ciática y compresión vertebral crónica.",
    color: "#ea580c",
    href: "/servicios/descompresion-axial",
    image: "/edgar/edgar-descompresion-real.jpg",
    featured: true,
  },
  {
    id: "masaje",
    emoji: "💪",
    title: "Masaje Deportivo",
    description:
      "Técnicas especializadas para atletas y personas activas. Recuperación muscular, prevención de lesiones y rendimiento óptimo.",
    color: "#e63327",
    href: "/servicios/masaje-deportivo",
    image: "/edgar/edgar-action-3.jpg",
  },
  {
    id: "puncion",
    emoji: "🎯",
    title: "Punción Seca",
    description:
      "Tratamiento efectivo de puntos gatillo y dolor miofascial. Rápida recuperación de lesiones musculares crónicas sin medicamentos.",
    color: "#f5c518",
    href: "/servicios/puncion-seca",
    image: "/edgar/edgar-hq-1.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        background: "var(--black)",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "60vw",
          maxWidth: "900px",
          maxHeight: "700px",
          background:
            "radial-gradient(ellipse, rgba(234,88,12,0.05) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
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
              Lo que hacemos
            </div>
            <h2
              className="section-title"
              style={{ marginBottom: "0.5rem" }}
            >
              Nuestros{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Servicios
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Respaldados por evidencia clínica y ejecutados por especialistas certificados.
            </p>
          </div>
          <Link
            href="/servicios"
            className="btn-secondary"
            id="services-view-all"
            style={{ flexShrink: 0 }}
          >
            Ver todos <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              id={`service-card-${service.id}`}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: `1px solid ${
                  service.featured
                    ? "rgba(234,88,12,0.3)"
                    : "rgba(255,255,255,0.06)"
                }`,
                cursor: "pointer",
                minHeight: "380px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {/* Background image */}
              <div style={{ position: "absolute", inset: 0 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={80}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.5) 40%, rgba(5,5,5,0.92) 75%, rgba(5,5,5,0.98) 100%)`,
                  }}
                />
                {/* Color tint */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${service.color}18 0%, transparent 60%)`,
                  }}
                />
              </div>

              {/* Featured badge */}
              {service.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    background: "var(--gradient-brand)",
                    borderRadius: "9999px",
                    padding: "0.2rem 0.7rem",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    zIndex: 1,
                  }}
                >
                  ★ Técnica Exclusiva
                </div>
              )}

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "1.75rem",
                }}
              >
                {/* Color accent line */}
                <div
                  style={{
                    width: "2.5rem",
                    height: "3px",
                    background: service.color,
                    borderRadius: "2px",
                    marginBottom: "1rem",
                  }}
                />

                <div
                  style={{ fontSize: "1.75rem", marginBottom: "0.6rem" }}
                >
                  {service.emoji}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    color: service.color,
                    textDecoration: "none",
                  }}
                  id={`service-link-${service.id}`}
                >
                  Saber más <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
