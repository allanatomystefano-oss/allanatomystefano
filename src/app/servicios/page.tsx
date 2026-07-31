"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BranchModal from "@/components/BranchModal";
import { CONTACT_INFO } from "@/constants/contact";

const services = [
  {
    id: "quiropractica",
    emoji: "🦴",
    color: "#7c3aed",
    title: "Quiropráctica",
    subtitle: "Ajustes vertebrales especializados",
    price: "$850",
    priceNote: "Sesión individual / Incluye ajuste y terapia manual",
    description: `La quiropráctica es una disciplina de salud enfocada en el diagnóstico y tratamiento de los trastornos del sistema musculoesquelético, especialmente de la columna vertebral. En All Anatomy, nuestros especialistas aplican técnicas de ajuste manual para restaurar la función articular, aliviar el dolor y mejorar la calidad de vida del paciente.

Indicada para: dolor de espalda, dolor cervical, cefaleas tensionales, ciática, hernia discal, postura incorrecta, bruxismo relacionado con tensión cervical, y secuelas de lesiones musculares.`,
    benefits: [
      "Alivio del dolor sin medicamentos",
      "Mejora de la postura y movilidad",
      "Restauración de la función nerviosa",
      "Tratamiento de hernias y ciática",
      "Prevención de lesiones recurrentes",
    ],
  },
  {
    id: "descompresion",
    emoji: "⚡",
    color: "#ea580c",
    title: "Descompresión Axial",
    subtitle: "Técnica propia certificada — exclusiva de All Anatomy",
    price: "$1,200",
    priceNote: "Sesión clínica especializada / Certificación SEP",
    description: `La Descompresión Axial es la técnica insignia de All Anatomy, desarrollada y perfeccionada por nuestro equipo con reconocimiento oficial del Gobierno de México (SEP-Conocer / UNT México). Es especialmente efectiva para casos de hernia discal, estenosis espinal y compresión vertebral crónica.

La técnica crea presión negativa intradiscal que favorece la retracción del material herniado, la hidratación del disco y la reducción del dolor, sin necesidad de cirugía.`,
    benefits: [
      "Tratamiento no invasivo de hernias discales",
      "Reducción de la presión intradiscal",
      "Alternativa real a la cirugía de columna",
      "Certificada y avalada oficialmente",
      "Aplicada con éxito a atletas de alto rendimiento",
    ],
    featured: true,
  },
  {
    id: "masaje",
    emoji: "💪",
    color: "#e63327",
    title: "Masaje Deportivo",
    price: "$800",
    priceNote: "Sesión de 50 minutos / Descarga muscular y fascias",
    subtitle: "Recuperación y rendimiento para atletas",
    description: `El masaje deportivo en All Anatomy va más allá de la relajación. Nuestras técnicas especializadas abordan el tejido muscular profundo, los tendones y las fascias para acelerar la recuperación, prevenir lesiones y optimizar el rendimiento físico.

Ideal tanto para deportistas competitivos como para personas con actividad física moderada que buscan mantener su cuerpo en condiciones óptimas.`,
    benefits: [
      "Recuperación muscular acelerada",
      "Reducción del DOMS (dolor post-entrenamiento)",
      "Prevención de lesiones deportivas",
      "Mejora de la circulación y oxigenación muscular",
      "Aumento de flexibilidad y rango de movimiento",
    ],
  },
  {
    id: "puncion",
    emoji: "🎯",
    color: "#f5c518",
    title: "Punción Seca",
    price: "$750",
    priceNote: "Sesión de tratamiento de puntos gatillo miofasciales",
    subtitle: "Tratamiento efectivo del dolor miofascial",
    description: `La punción seca es una técnica terapéutica que utiliza agujas de acupuntura (sin medicación) para tratar los puntos gatillo miofasciales — nódulos de tensión muscular que generan dolor referido y limitación funcional.

Es especialmente efectiva para tendinitis, contracturas crónicas, dolor cervical, lumbalgia y recuperación post-lesión deportiva. Los resultados suelen notarse desde la primera o segunda sesión.`,
    benefits: [
      "Desactivación de puntos gatillo activos",
      "Alivio rápido del dolor crónico",
      "Recuperación de contracturas musculares",
      "Tratamiento de tendinitis y fascitis",
      "Sin medicamentos ni efectos secundarios",
    ],
  },
];

export default function ServiciosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6rem", background: "var(--black)", minHeight: "100vh", position: "relative" }}>
        {/* Glow behind layout */}
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
        <section style={{ padding: "4rem 1.5rem 3rem", maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            Nuestros Tratamientos
          </div>
          <h1
            className="section-title"
            style={{ marginBottom: "1.25rem", maxWidth: "680px" }}
          >
            Servicios que{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              transforman vidas
            </span>
          </h1>
          <p className="section-subtitle">
            Cada tratamiento en All Anatomy está diseñado con base en evidencia clínica y ejecutado por especialistas certificados.
          </p>
        </section>

        {/* Services detail */}
        <section style={{ padding: "0 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: service.featured
                    ? "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(124,58,237,0.06) 100%)"
                    : "rgba(12, 12, 12, 0.7)",
                  border: service.featured ? "1px solid rgba(234,88,12,0.25)" : "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "2rem",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "3rem",
                  alignItems: "start",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  boxShadow: service.featured
                    ? "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(234,88,12,0.05)"
                    : "0 25px 50px -15px rgba(0, 0, 0, 0.8)",
                }}
              >
                {service.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.75rem",
                      right: "1.75rem",
                      background: "var(--gradient-brand)",
                      borderRadius: "9999px",
                      padding: "0.3rem 0.85rem",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    ★ Técnica Exclusiva
                  </div>
                )}

                {/* Left Side: Title & Description */}
                <div>
                  <div style={{ fontSize: "2.75rem", marginBottom: "1rem" }}>
                    {service.emoji}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "0.45rem",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: service.color,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      marginBottom: "1.5rem",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.65)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.85,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {service.description}
                  </div>
                </div>

                {/* Right Side: Benefits, Prices & Direct Booking */}
                <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "2.5rem" }}>
                  {/* Pricing Box */}
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "1.5rem",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>
                      Costo del Servicio
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                      <span style={{ fontSize: "2.25rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: "#fff" }}>
                        {service.price}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                        MXN / sesión
                      </span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.25rem" }}>
                      {service.priceNote}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "1rem",
                      }}
                    >
                      Beneficios clínicos principales
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                      {service.benefits.map((b) => (
                        <li
                          key={b}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            fontSize: "0.925rem",
                            color: "rgba(255,255,255,0.75)",
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2 size={16} style={{ color: service.color, flexShrink: 0, marginTop: "3px" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Booking & Branch Phones */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-whatsapp"
                        id={`service-book-btn-${service.id}`}
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          borderRadius: "1.25rem",
                          padding: "1rem 1.5rem",
                          cursor: "pointer",
                          fontSize: "0.82rem",
                        }}
                      >
                        <Calendar size={15} />
                        Agendar Sesión
                      </button>
                      <Link
                        href={`/servicios/${service.id === "descompresion" ? "descompresion-axial" : service.id === "quiropractica" ? "quiropractica" : service.id === "masaje" ? "masaje-deportivo" : "puncion-seca"}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.4rem",
                          padding: "1rem 1.5rem",
                          borderRadius: "1.25rem",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#fff",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.25s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                      >
                        Ver detalles <ArrowRight size={14} style={{ color: service.color }} />
                      </Link>
                    </div>

                    {/* Quick branch contact row */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.78rem",
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255,255,255,0.45)",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "1rem",
                      }}
                    >
                      <span>
                        📞 San Pedro:{" "}
                        <a href={`tel:${CONTACT_INFO.branches.colorines.phoneRaw}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                          {CONTACT_INFO.branches.colorines.phone}
                        </a>
                      </span>
                      <span>
                        📞 Contry:{" "}
                        <a href={`tel:${CONTACT_INFO.branches.contry.phoneRaw}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                          {CONTACT_INFO.branches.contry.phone}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
