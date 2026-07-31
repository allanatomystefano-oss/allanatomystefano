"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Qué es el ajuste quiropráctico y duele al realizarse?",
    answer: "El ajuste quiropráctico es una maniobra manual rápida y precisa realizada sobre una articulación para restaurar su alineación y movilidad. En manos de un profesional certificado, no duele; por el contrario, los pacientes suelen reportar una sensación inmediata de alivio y liberación de tensión acumulada.",
  },
  {
    question: "¿Qué es la Descompresión Axial y cómo ayuda con las hernias discales?",
    answer: "Es nuestra técnica insignia certificada. Utiliza un sistema especializado para traccionar suavemente la columna en puntos específicos. Esto reduce la presión interna en los discos intervertebrales, permitiendo que la hernia vuelva a su lugar, hidratando el disco y aliviando la compresión de los nervios sin necesidad de cirugía.",
  },
  {
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer: "La mayoría de los pacientes experimentan una mejoría significativa desde la primera o segunda sesión. Sin embargo, para una recuperación duradera y corrección postural, solemos recomendar planes de 4 a 8 sesiones, dependiendo de la cronicidad y tipo de lesión de cada persona.",
  },
  {
    question: "¿Necesito llevar estudios o radiografías a mi primera cita?",
    answer: "Si cuentas con radiografías, resonancias magnéticas o estudios previos recientes, es altamente recomendable traerlos. En caso de no tenerlos, nuestros especialistas realizarán una valoración física exhaustiva durante tu primera consulta para determinar si es necesario solicitar estudios antes de iniciar ciertos tratamientos complejos.",
  },
  {
    question: "¿Es seguro el tratamiento quiropráctico para todas las edades?",
    answer: "Sí, es totalmente seguro. Ajustamos las técnicas según la edad, complexión física y condiciones preexistentes del paciente. Atendemos a desde jóvenes deportistas hasta adultos mayores, adaptando la fuerza y el método a cada cuerpo.",
  },
  {
    question: "¿Aceptan tarjetas de crédito y seguros de gastos médicos?",
    answer: "Aceptamos pagos en efectivo, transferencias bancarias y todas las tarjetas de crédito/débito. Aunque no facturamos directamente a las aseguradoras, te proporcionamos una factura legal con todos los requisitos fiscales de México para que puedas tramitar tu reembolso con tu seguro de gastos médicos mayores si tu póliza cubre quiropráctica/fisioterapia.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(234,88,12,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            <HelpCircle size={14} />
            Dudas Frecuentes
          </div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "1rem" }}
          >
            Preguntas{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frecuentes
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.45)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Resolvemos tus dudas sobre nuestros tratamientos de quiropráctica, hernias discales y sesiones.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 15, 15, 0.6)",
                  border: isOpen ? "1px solid rgba(124, 58, 237, 0.25)" : "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  backdropFilter: "blur(16px)",
                  boxShadow: isOpen ? "0 10px 30px -10px rgba(124, 58, 237, 0.15)" : "none",
                }}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5rem 2rem",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#fff",
                    outline: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.08rem",
                      color: isOpen ? "#fff" : "rgba(255,255,255,0.85)",
                      transition: "color 0.2s",
                      paddingRight: "1rem",
                    }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                      color: isOpen ? "var(--grad-start)" : "rgba(255,255,255,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          padding: "0 2rem 1.75rem",
                          fontSize: "0.93rem",
                          color: "rgba(255,255,255,0.6)",
                          lineHeight: 1.7,
                          fontFamily: "'Inter', sans-serif",
                          borderTop: "1px solid rgba(255,255,255,0.03)",
                          paddingTop: "1rem",
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
