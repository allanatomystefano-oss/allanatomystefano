"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Venía de meses con dolor lumbar que no me dejaba entrenar cómodo. Con los ajustes quiroprácticos y la descompresión axial recuperé mi movilidad en pocas sesiones. El trato de los especialistas es impecable.",
    author: "Alejandro Garza",
    role: "Corredor Amateur / Triatleta",
    rating: 5,
    tag: "Terapia Deportiva",
    initials: "AG",
    color: "#7c3aed",
  },
  {
    quote:
      "Tengo hernias discales diagnosticadas y me recomendaban cirugía. Decidí probar la técnica de Descompresión Axial aquí en All Anatomy y el cambio es increíble. El dolor bajó un 90% y volví a mis actividades diarias.",
    author: "Sofía Villarreal",
    role: "Paciente de Descompresión Axial",
    rating: 5,
    tag: "Hernia Discal",
    initials: "SV",
    color: "#ea580c",
  },
  {
    quote:
      "Excelente servicio y atención médica regulada. Como deportista de alto rendimiento busco profesionales con certificaciones SEP y COFEPRIS. Aquí encontré el nivel de especialización que mi cuerpo necesita.",
    author: "Ricardo Treviño",
    role: "Fisicoculturista Competición",
    rating: 5,
    tag: "Alto Rendimiento",
    initials: "RT",
    color: "#e63327",
  },
  {
    quote:
      "La punción seca me ayudó muchísimo a liberar la tensión muscular acumulada en los hombros. Recomiendo ampliamente la clínica por su profesionalismo y sus instalaciones premium.",
    author: "Mariana Cantú",
    role: "Diseñadora de Interiores",
    rating: 5,
    tag: "Punción Seca",
    initials: "MC",
    color: "#f5c518",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideWidth = 100;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const handleDotClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
    resetTimer();
  };

  const current = testimonials[index];

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      id="testimonios"
      style={{
        background: "var(--black-soft)",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          background: "radial-gradient(circle, rgba(234,88,12,0.03) 0%, transparent 60%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
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
            Opiniones reales
          </div>
          <h2
            className="section-title"
            style={{ marginBottom: "1rem", fontSize: "clamp(2.25rem, 5vw, 3rem)" }}
          >
            Lo que dicen{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              nuestros pacientes
            </span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", color: "rgba(255,255,255,0.45)" }}
          >
            Experiencias y testimonios reales recopilados de directorios locales y redes sociales.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: "relative", minHeight: "360px" }}>
          {/* Glass Card */}
          <div
            style={{
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(24px) saturate(1.5)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "2rem",
              padding: "3.5rem 3rem",
              boxShadow: "0 30px 70px rgba(0, 0, 0, 0.7)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote watermark icon */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                color: "rgba(255,255,255,0.03)",
                pointerEvents: "none",
              }}
            >
              <Quote size={140} style={{ transform: "rotate(180deg)" }} />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Stars and Tag row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.25rem" }}>
                    {[...Array(current.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill="#f5c518"
                        style={{ color: "#f5c518" }}
                      />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: current.color,
                      background: `${current.color}15`,
                      border: `1px solid ${current.color}25`,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {current.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
                    fontWeight: 500,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "2.25rem",
                    borderLeft: `3px solid ${current.color}`,
                    paddingLeft: "1.25rem",
                  }}
                >
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author row */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  {/* Styled Avatar initials */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${current.color}, rgba(5,5,5,0.8))`,
                      border: `1.5px solid ${current.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#fff",
                      boxShadow: `0 8px 20px ${current.color}20`,
                    }}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <cite
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#fff",
                        fontStyle: "normal",
                        display: "block",
                      }}
                    >
                      {current.author}
                    </cite>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2.5rem",
              alignItems: "center",
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Opinión anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicator dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonials.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    style={{
                      width: active ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "9999px",
                      background: active
                        ? "var(--gradient-brand-h)"
                        : "rgba(255,255,255,0.15)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    aria-label={`Ir a opinión ${i + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Opinión siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
