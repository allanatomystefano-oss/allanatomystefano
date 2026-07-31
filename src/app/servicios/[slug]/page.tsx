"use client";

import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BranchModal from "@/components/BranchModal";
import { CheckCircle2, Calendar, Phone, ArrowLeft, ShieldAlert, Sparkles, Clock, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contact";

// Define TypeScript interfaces for service data
interface ServiceDetail {
  title: string;
  emoji: string;
  color: string;
  price: string;
  priceNote: string;
  subtitle: string;
  description: string;
  scientificBasis: string;
  symptoms: string[];
  benefits: string[];
  sessionFlow: string[];
  contraindications: string[];
}

const serviceData: Record<string, ServiceDetail> = {
  quiropractica: {
    title: "Quiropráctica",
    emoji: "🦴",
    color: "#7c3aed",
    price: "$850",
    priceNote: "Sesión individual / Incluye valoración funcional y ajuste completo",
    subtitle: "Ajuste e higiene de la columna vertebral para una vida sin límites",
    description: "La quiropráctica es una disciplina de salud enfocada en diagnosticar y corregir subluxaciones (desalineaciones) en la columna vertebral que interfieren con la señal de tu sistema nervioso. A través de ajustes manuales rápidos y de baja fuerza, liberamos la presión sobre los nervios espinales, mejorando drásticamente el dolor de espalda, la postura y la movilidad general.",
    scientificBasis: "El ajuste articular de alta velocidad y baja amplitud (HVLA) estimula los mecanorreceptores de la articulación, bloqueando la transmisión del dolor al cerebro (mecanismo de compuerta) y restaurando de inmediato los arcos de movimiento naturales de la vértebra.",
    symptoms: [
      "Dolor cervical (cuello) y lumbar (espalda baja)",
      "Dolores de cabeza de origen tensional (migrañas posturales)",
      "Escoliosis postural o desalineación de cadera",
      "Hormigueo o entumecimiento en piernas o brazos",
      "Tensión acumulada en la mandíbula (bruxismo)",
    ],
    benefits: [
      "Alivio del dolor rápido y sin fármacos",
      "Alineación postural y biomecánica óptima",
      "Mayor flexibilidad y rango de movimiento",
      "Reducción del estrés en el sistema nervioso",
      "Prevención del desgaste articular prematuro",
    ],
    sessionFlow: [
      "Valoración inicial: Análisis clínico de tu postura, arcos de movimiento e historial de lesiones.",
      "Palpación estática y dinámica: Localización precisa de vértebras desalineadas o bloqueadas.",
      "Ajuste Quiropráctico: Maniobras manuales seguras sobre las vértebras indicadas.",
      "Recomendaciones posturales: Consejos finales y ejercicios específicos para mantener el ajuste.",
    ],
    contraindications: [
      "Fracturas espinales recientes",
      "Osteoporosis severa avanzada",
      "Tumores o infecciones óseas en la zona de ajuste",
      "Inestabilidad ligamentosa severa",
    ],
  },
  "descompresion-axial": {
    title: "Descompresión Axial",
    emoji: "⚡",
    color: "#ea580c",
    price: "$1,200",
    priceNote: "Sesión clínica especializada / Avalado por SEP-Conocer",
    subtitle: "La alternativa no invasiva nº 1 a la cirugía de hernias discales",
    description: "Nuestra técnica patentada y certificada es la solución más avanzada para tratar hernias discales y compresión nerviosa. A través de una tracción mecánica controlada digitalmente, se crea una presión negativa intradiscal (vacío) que jala el material herniado hacia el centro del disco, liberando al nervio ciático o espinal y reduciendo la inflamación de forma sustancial.",
    scientificBasis: "Al aplicar una curva de descompresión logarítmica, evitamos que los músculos de la espalda se contraigan en defensa (espasmo reflejo). Esto permite que el disco se expanda, succione nutrientes/oxígeno hacia su interior y comience su proceso de regeneración natural.",
    symptoms: [
      "Hernias discales simples y múltiples (cervicales y lumbares)",
      "Ciática (dolor punzante que baja por el glúteo y pierna)",
      "Estenosis de canal espinal (estrechamiento)",
      "Degeneración discal (Artrosis y disco deshidratado)",
      "Adormecimiento crónico de las extremidades inferiores",
    ],
    benefits: [
      "Evita cirugías de columna riesgosas e invasivas",
      "Reduce al instante la presión sobre el nervio ciático",
      "Favorece la rehidratación y nutrición del disco dañado",
      "Técnica certificada oficialmente en México (SEP)",
      "Apto para pacientes con dolor crónico agudo",
    ],
    sessionFlow: [
      "Revisión de estudios: Análisis obligatorio de tu Resonancia Magnética o Radiografías.",
      "Colocación de arnés: Sujeción segura y cómoda según el segmento a tratar (cervical o lumbar).",
      "Ciclo de Descompresión: Sesión de 25-30 minutos en nuestra camilla robotizada computarizada.",
      "Crioterapia o Láser: Aplicación de frío clínico o fotomodulación para desinflamar el área trabajada.",
    ],
    contraindications: [
      "Espondilolistesis severa (Grado 3 o mayor)",
      "Cirugías previas con implantes (tornillos o placas) en la zona",
      "Embarazo (en tratamiento lumbar)",
      "Osteoporosis severa",
    ],
  },
  "masaje-deportivo": {
    title: "Masaje Deportivo",
    emoji: "💪",
    color: "#e63327",
    price: "$800",
    priceNote: "Sesión de 50 minutos / Descarga muscular completa",
    subtitle: "Optimización muscular y prevención de lesiones para atletas de élite",
    description: "Un tratamiento riguroso diseñado para descargar la musculatura de atletas de alto rendimiento y personas físicamente activas. Enfocado en eliminar toxinas musculares, estirar las fascias y liberar contracturas severas causadas por el entrenamiento repetitivo, acelerando el proceso de recuperación y mejorando la biomecánica corporal.",
    scientificBasis: "La compresión y el amasado muscular profundo aumentan la circulación sanguínea local y el drenaje linfático, reduciendo los niveles de cortisol y el dolor muscular de aparición tardía (DOMS).",
    symptoms: [
      "Contracturas musculares severas por sobreentrenamiento",
      "Fatiga muscular generalizada y sensación de pesadez",
      "Acumulación de ácido láctico tras competencias",
      "Pérdida de flexibilidad y rango de movimiento",
      "Prevención de desgarros musculares",
    ],
    benefits: [
      "Acelera la recuperación post-entrenamiento hasta un 50%",
      "Elimina puntos gatillo superficiales y adherencias miofasciales",
      "Incrementa la elasticidad muscular y previene lesiones",
      "Mejora el aporte de oxígeno y nutrientes al músculo",
      "Favorece el descanso y la relajación neuromuscular profunda",
    ],
    sessionFlow: [
      "Entrevista del atleta: Conocer el tipo de deporte, carga semanal de entrenamiento y zonas de mayor fatiga.",
      "Fase de calentamiento: Fricciones suaves para preparar el tejido muscular.",
      "Técnicas de descarga: Amasado profundo, presiones y estiramientos miofasciales activos.",
      "Estiramiento asistido: Maniobras finales de estiramiento para normalizar el tono muscular.",
    ],
    contraindications: [
      "Desgarros musculares agudos (primeras 72 horas)",
      "Trombosis venosa profunda",
      "Infecciones en la piel o heridas abiertas",
      "Fiebre o procesos infecciosos sistémicos",
    ],
  },
  "puncion-seca": {
    title: "Punción Seca",
    emoji: "🎯",
    color: "#f5c518",
    price: "$750",
    priceNote: "Sesión de tratamiento con agujas monopunto en zonas de dolor",
    subtitle: "Desactivación inmediata de contracturas y nudos musculares profundos",
    description: "Una técnica mínimamente invasiva que utiliza agujas delgadas de acupuntura (sin inyectar sustancias) para llegar de forma directa a los Puntos Gatillo Miofasciales (nudos musculares). Al pinchar el punto de tensión máxima, el músculo realiza una micro-contracción refleja que lo relaja de inmediato, eliminando dolores referidos que el masaje manual no puede alcanzar.",
    scientificBasis: "La aguja destruye mecánicamente las placas motoras disfuncionales donde el músculo está contraído de forma permanente. Esto interrumpe el ciclo del dolor y provoca un aumento del flujo de sangre que oxigena y repara el tejido.",
    symptoms: [
      "Dolor miofascial crónico refractario",
      "Tendinitis crónicas (codo de tenista, tendón de Aquiles, hombro)",
      "Contracturas severas en glúteos, trapecios o pantorrillas",
      "Fascitis plantar y espolón calcáneo doloroso",
      "Síndrome de dolor piramidal (falsa ciática)",
    ],
    benefits: [
      "Relajación muscular casi instantánea del nudo profundo",
      "Alivio del dolor referido en áreas distantes del cuerpo",
      "Acelera la curación de tendinopatías crónicas",
      "Excelente complemento para el ajuste quiropráctico",
      "Resultados rápidos desde la primera o segunda sesión",
    ],
    sessionFlow: [
      "Localización diagnóstica: Identificación manual del punto gatillo activo mediante palpación transversal.",
      "Asepsia de la zona: Desinfección completa de la piel con alcohol clínico.",
      "Inserción de la aguja: Introducción rápida de la aguja con tubo guía para minimizar molestias.",
      "Estimulación y espasmo: Búsqueda del espasmo muscular reflejo y retiro de la aguja.",
    ],
    contraindications: [
      "Fobia extrema a las agujas (belonefobia)",
      "Pacientes en tratamiento con anticoagulantes severos",
      "Linfedema o extirpación de ganglios linfáticos en la zona",
      "Primer trimestre de embarazo (en ciertas zonas corporales)",
    ],
  },
};

export default function ServicioDetallePage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "var(--black)", minHeight: "100vh", position: "relative" }}>
        {/* Decorative background glow based on service color */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "80vw",
            background: `radial-gradient(circle, ${service.color}06 0%, transparent 60%)`,
            filter: "blur(100px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Back Link */}
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1.5rem 1.5rem 0", position: "relative", zIndex: 1 }}>
          <Link
            href="/servicios"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            <ArrowLeft size={16} /> Volver a Servicios
          </Link>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "3rem 1.5rem", maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Header badges */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <div style={{ fontSize: "2.5rem" }}>{service.emoji}</div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                  borderRadius: "9999px",
                  padding: "0.35rem 0.95rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Sparkles size={11} style={{ color: service.color }} />
                Servicio Especializado
              </div>
            </div>

            {/* Title & Subtitle */}
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.4,
                maxWidth: "60ch",
              }}
            >
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Main Grid Content */}
        <section style={{ padding: "0 1.5rem 6rem", maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left Side: Long Description & Clinical Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {/* Description */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>
                  ¿En qué consiste el tratamiento?
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.85,
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Scientific Basis */}
              <div
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "1.75rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Sparkles size={16} style={{ color: service.color }} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Fundamento Fisiológico / Científico
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {service.scientificBasis}
                </p>
              </div>

              {/* Step by Step Flow */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>
                  ¿Cómo es tu sesión paso a paso?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {service.sessionFlow.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "1.25rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: `${service.color}15`,
                          border: `1px solid ${service.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        {idx + 1}
                      </div>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "rgba(255,255,255,0.65)",
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: 1.5,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Sidebar with Price, Symptoms, Contraindications */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Cost & Booking Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(12, 12, 12, 0.95) 100%)",
                  border: `1px solid ${service.color}25`,
                  borderRadius: "2rem",
                  padding: "2.5rem 2rem",
                  boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px -10px ${service.color}05`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.45)", marginBottom: "0.5rem" }}>
                    Costo de la Sesión
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                    <span style={{ fontSize: "3rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: "#fff" }}>
                      {service.price}
                    </span>
                    <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                      MXN / sesión
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", marginTop: "0.5rem", lineHeight: 1.45 }}>
                    {service.priceNote}
                  </p>
                </div>

                {/* Scheduling tools */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-whatsapp"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      borderRadius: "1.25rem",
                      padding: "1rem 2rem",
                      cursor: "pointer",
                    }}
                  >
                    <Calendar size={16} />
                    Agendar Cita en Línea
                  </button>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "1.25rem",
                      fontSize: "0.78rem",
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>San Pedro:</span>
                      <a href={`tel:${CONTACT_INFO.branches.colorines.phoneRaw}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                        {CONTACT_INFO.branches.colorines.phone}
                      </a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Contry:</span>
                      <a href={`tel:${CONTACT_INFO.branches.contry.phoneRaw}`} style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                        {CONTACT_INFO.branches.contry.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Symptoms */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  ¿Para qué síntomas está indicado?
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {service.symptoms.map((symptom, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: service.color, flexShrink: 0, marginTop: "2px" }} />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contraindications Card */}
              <div
                style={{
                  background: "rgba(230, 51, 39, 0.03)",
                  border: "1px solid rgba(230, 51, 39, 0.15)",
                  borderRadius: "1.5rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--red)" }}>
                  <AlertTriangle size={16} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    Contraindicaciones Clínicas
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}>
                  No se recomienda realizar este tratamiento bajo las siguientes condiciones de salud:
                </p>
                <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {service.contraindications.map((contra, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.65)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {contra}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <BranchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
