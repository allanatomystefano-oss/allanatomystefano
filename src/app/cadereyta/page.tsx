"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Star, Trophy, Clock, X } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  city: string;
  age: string;
  pain: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Ochoa",
    role: "Corredor de Maratón",
    quote: "Es el único tratamiento que realmente funcionó después de probar fisioterapia e inyecciones.",
    rating: 5,
    city: "Cadereyta",
    age: "34 años",
    pain: "Dolor lumbar crónico desde hacía 8 meses",
    result: "Pude volver a correr y entrenar sin molestias desde la primera sesión.",
  },
  {
    name: "Dra. Sofía Garza",
    role: "Médico Pediatra",
    quote: "La técnica de ajuste de Edgar Delgado y el profesionalismo de All Anatomy son insuperables.",
    rating: 5,
    city: "Cadereyta",
    age: "42 años",
    pain: "Dolor cervical severo y migraña por estrés",
    result: "Desapareció la tensión del cuello y los dolores de cabeza disminuyeron un 90%.",
  },
  {
    name: "Ivan Huerta",
    role: "Triatleta de Alto Rendimiento",
    quote: "El ajuste y la descompresión me devolvieron la movilidad completa.",
    rating: 5,
    city: "Cadereyta",
    age: "29 años",
    pain: "Compresión discal y ciática en pierna derecha",
    result: "Alivio inmediato de la ciática y recuperación de fuerza muscular.",
  },
];

const galleryImages = [
  { src: "/edgar/edgar-quiropractica-real.jpg", alt: "Ajuste manual clínico" },
  { src: "/edgar/edgar-descompresion-real.jpg", alt: "Terapia de descompresión física" },
  { src: "/edgar/edgar-action-1.jpg", alt: "Ajuste cervical de precisión" },
  { src: "/edgar/edgar-action-3.jpg", alt: "Terapia física y deportiva" },
];

export default function CadereytaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "9:00 AM - 10:00 AM",
    symptoms: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    // Target event: August 29, 2026 at 9:00 AM
    const targetDate = new Date("2026-08-29T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    const message = `¡Hola All Anatomy! Me gustaría agendar mi cita para el Ajuste Quiropráctico en Cadereyta el sábado 29 de agosto.\n\nDetalles del Registro:\n- Nombre: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Horario sugerido: ${formData.timeSlot}\n- Síntomas/Molestia: ${formData.symptoms || "Check-up general"}\n- Costo: $1,000 MXN (Efectivo)`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528116394613?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "#020202", minHeight: "100vh", position: "relative" }}>

        {/* Glow ambient background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Urgency Announcement Bar */}
        <div
          style={{
            background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)",
            color: "#fff",
            padding: "0.85rem 1rem",
            textAlign: "center",
            fontSize: "clamp(0.72rem, 1.5vw, 0.85rem)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            zIndex: 3,
            boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          <ShieldAlert size={15} style={{ animation: "pulse 1.5s infinite" }} />
          <span>⚠️ Cupo Especial: ¡Lugares limitados para Cadereyta! — Sábado 29 de Agosto</span>
        </div>

        {/* Hero Section */}
        <section
          style={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            padding: "6rem 1.5rem",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <div className="hide-on-mobile" style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/hero-bg-new.jpg"
                alt="All Anatomy Ajuste Quiropráctico en Cadereyta"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
              />
            </div>
            <div className="show-only-on-mobile" style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/hero-bg-mobile.jpg"
                alt="All Anatomy Ajuste Quiropráctico en Cadereyta"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={90}
              />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,2,2,0.85) 0%, rgba(2,2,2,0.55) 40%, rgba(2,2,2,0.88) 75%, #020202 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, rgba(2,2,2,0.9) 90%)" }} />
          </div>

          <div style={{ maxWidth: "950px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                background: "rgba(124,58,237,0.18)",
                border: "1px solid rgba(124,58,237,0.4)",
                borderRadius: "9999px",
                color: "#c084fc",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "2rem",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 20px rgba(124,58,237,0.15)",
              }}
            >
              <Sparkles size={13} style={{ color: "#c084fc" }} />
              Fecha Especial en Nuevo León
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.3rem, 6.2vw, 4.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
                textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              }}
            >
              <span style={{ display: "block", color: "var(--yellow)" }}>¿Te duele la espalda, cuello o ciática?</span>
              <span style={{ display: "block", fontSize: "0.52em", fontWeight: 600, marginTop: "1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>
                Elimina tu dolor desde la primera sesión con un ajuste quiropráctico profesional en Cadereyta.
              </span>
            </h1>

            {/* Dynamic Countdown Timer */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { value: timeLeft.days, label: "Días" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Minutos" },
                { value: timeLeft.seconds, label: "Segundos" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(12, 12, 12, 0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "1rem",
                    padding: "0.8rem 1.2rem",
                    minWidth: "75px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#c084fc",
                      lineHeight: 1,
                    }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.6rem", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.06em", marginTop: "0.3rem" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Event Specs row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2.5rem",
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.05rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                marginBottom: "2.5rem",
                background: "rgba(2, 2, 2, 0.55)",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Calendar size={18} style={{ color: "#7c3aed" }} />
                <span>Sábado 29 de Agosto</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Clock size={18} style={{ color: "#f5c518" }} />
                <span>9:00 AM – 1:00 PM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={18} style={{ color: "#e63327" }} />
                <span>Olympus Fitness Gym, Cadereyta</span>
              </div>
            </div>

            {/* Hero CTA Button */}
            <button
              onClick={() => {
                const element = document.getElementById("registro-formulario");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-whatsapp"
              style={{
                background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)",
                border: "none",
                padding: "1.1rem 2.5rem",
                fontSize: "1rem",
                fontWeight: 800,
                borderRadius: "1.25rem",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)",
                marginBottom: "2rem",
              }}
            >
              Reservar mi lugar (cupo limitado)
            </button>
          </div>
        </section>

        {/* Trust & Authority Bar */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto 4rem",
            padding: "1.5rem 2rem",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {[
            { value: "+49,000", label: "Pacientes Atendidos" },
            { value: "10 Años", label: "Experiencia Clínica" },
            { value: "SEP-Conocer", label: "Técnica Registrada" },
            { value: "Especialista", label: "Columna & Deporte" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--orange)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1 }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem 8rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left Info Area */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>

              {/* Mission Statement */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Fecha Clínica Especial 📍
                  </h2>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    borderRadius: "2rem",
                    padding: "2.5rem",
                  }}
                >
                  <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                    Esta fecha especial está diseñada exclusivamente para brindar el <strong style={{ color: "#fff" }}>servicio de ajuste quiropráctico</strong> a pacientes de Cadereyta Jiménez que nos conocen pero que se les complica trasladarse a nuestras sucursales en Monterrey.
                  </p>
                  <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif", marginTop: "1rem" }}>
                    Abriremos una jornada única de ajustes individuales en el <strong style={{ color: "#fff" }}>Olympus Fitness Gym</strong> para ayudarte a aliviar tensiones musculares y corregir desalineaciones de forma directa.
                  </p>
                </div>
              </div>

              {/* Flyer Image */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Flyer del Evento 📋
                  </h2>
                </div>
                <div
                  onClick={() => setSelectedImg("/flyer-cadereyta.jpg")}
                  style={{
                    position: "relative",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    border: "1px solid rgba(124,58,237,0.2)",
                    aspectRatio: "1.25",
                    width: "100%",
                    background: "rgba(10,10,10,0.5)",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/flyer-cadereyta.jpg"
                    alt="Flyer Oficial Cadereyta Ajuste Quiropráctico"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    quality={95}
                  />
                  {/* Hover indicator */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.4)",
                      opacity: 0,
                      transition: "opacity 0.25s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                  >
                    <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600, padding: "0.5rem 1rem", background: "rgba(0,0,0,0.6)", borderRadius: "9999px" }}>
                      🔎 Ver en Grande
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialist Bio */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Tu Quiropráctico 🎓
                  </h2>
                </div>

                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "2.5rem",
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", width: "90px", height: "90px", borderRadius: "1.5rem", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)" }}>
                      <Image src="/edgar/edgar-profile.jpg" alt="Edgar Delgado" fill style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Edgar Delgado</h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Director Clínico & Especialista
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    Especialista en quiropráctica deportiva de alto rendimiento. Ha ajustado a leyendas mundiales y futbolistas de Tigres UANL y Rayados. Creador de la técnica de Descompresión Axial registrada ante la SEP.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>Especialista Certificado en Quiropráctica y Biomecánica</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)", flexShrink: 0 }} />
                      <span>+49,000 Ajustes Espinales en pacientes clínicos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    El Ajuste en Acción 📷
                  </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {galleryImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImg(img.src)}
                      style={{
                        position: "relative",
                        aspectRatio: "1.33",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.01)",
                        cursor: "pointer",
                      }}
                    >
                      <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} quality={80} />
                      <div
                        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", opacity: 0, transition: "opacity 0.25s", display: "flex", alignItems: "center", justifyContent: "center" }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                      >
                        <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: 600, padding: "0.35rem 0.75rem", background: "rgba(0,0,0,0.6)", borderRadius: "9999px" }}>🔎 Ver</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Registration Form Box */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

              {/* Benefits list card */}
              <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "2rem", padding: "2rem" }}>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                  ¿Tienes alguno de estos dolores?
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
                  {["Dolor lumbar", "Dolor cervical", "Ciática", "Contracturas", "Dolor por oficina", "Migrañas por tensión"].map((symptom, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 size={12} style={{ color: "var(--orange)", flexShrink: 0 }} />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Box */}
              <div
                id="registro-formulario"
                style={{
                  background: "rgba(12, 12, 12, 0.9)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "2.5rem",
                  padding: "2.5rem 2rem",
                  boxShadow: "0 50px 100px -30px rgba(0,0,0,0.9)",
                  position: "sticky",
                  top: "8.5rem",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "rgba(124, 58, 237, 0.12)",
                      border: "1px solid rgba(124, 58, 237, 0.3)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.85rem",
                      color: "#c084fc",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <ShieldAlert size={12} />
                    Alta Demanda — Cupo Limitado
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                    Reserva tu lugar 🎟️
                  </h3>

                  {/* Scarcity Progress Bar */}
                  <div style={{ margin: "1rem 0 1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.4rem", fontFamily: "'Inter', sans-serif" }}>
                      <span>Reservado: <strong>72%</strong></span>
                      <span style={{ color: "#c084fc", fontWeight: 600 }}>🔥 ¡Quedan pocos lugares!</span>
                    </div>
                    <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg, #7c3aed 0%, #c084fc 100%)", borderRadius: "3px" }} />
                    </div>
                  </div>

                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}>
                    Solo se atenderán 30 pacientes este sábado. Registra tu horario preferido abajo para asegurar tu lugar.
                  </p>

                  {/* Live Viewers Indicator */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", fontSize: "0.72rem", color: "#c084fc", fontFamily: "'Inter', sans-serif", marginTop: "1rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c084fc", animation: "pulse 1.5s infinite", display: "inline-block" }} />
                    <span>7 personas viendo esta página ahora</span>
                  </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="input-premium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Número de WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 8116394613"
                      className="input-premium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Bloque de Horario Sugerido
                    </label>
                    <select
                      className="input-premium"
                      style={{ background: "#141414", cursor: "pointer" }}
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      Síntomas o dolor principal
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej. Dolor lumbar, dolor de cuello"
                      className="input-premium"
                      style={{ resize: "none" }}
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  {/* Pricing Box */}
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1.5rem", padding: "1.5rem", marginTop: "0.5rem" }}>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", fontWeight: 700 }}>
                      Tu Sesión Especial Incluye:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>
                      {["Valoración inicial detallada", "Ajuste Quiropráctico Profesional", "Recomendaciones y ejercicios de cuidado"].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <CheckCircle2 size={13} style={{ color: "var(--yellow)" }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.75rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 700 }}>Todo por solo:</span>
                      <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--yellow)", fontFamily: "'Space Grotesk', sans-serif" }}>$1,000 MXN</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.5rem", fontFamily: "'Inter', sans-serif" }}>
                      💵 Solo pago en efectivo en el evento.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      borderRadius: "1.25rem",
                      padding: "1.1rem 2rem",
                      marginTop: "0.5rem",
                      cursor: "pointer",
                      background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)",
                      boxShadow: "0 10px 30px -10px rgba(124,58,237,0.5)",
                    }}
                  >
                    {submitted ? "Redirigiendo..." : "Quiero mi cita"}
                    <ArrowRight size={16} />
                  </button>
                  <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", textAlign: "center", fontFamily: "'Inter', sans-serif", marginTop: "0.5rem", lineHeight: 1.4 }}>
                    💬 Te atenderá la sucursal <strong style={{ color: "rgba(255,255,255,0.5)" }}>San Pedro (Colorines)</strong> — número exclusivo para citas en Saltillo, GDL y Cadereyta.
                  </p>
                </form>

                {/* Important terms */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    background: "rgba(124, 58, 237, 0.05)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                    borderRadius: "1.25rem",
                    padding: "1rem 1.25rem",
                    marginTop: "2rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ShieldAlert size={16} style={{ color: "#c084fc", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                    <strong>Cupo Limitado:</strong> Mínimo de 30 personas confirmadas para activar la fecha, con un máximo de 50 citas. Solo pago en efectivo en la recepción del evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose All Anatomy */}
        <section style={{ padding: "5rem 1.5rem", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.03)", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "3rem" }}>
              ¿Por qué elegir <span style={{ color: "var(--orange)" }}>All Anatomy?</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem" }}>
              {[
                { title: "Atención 100% Personalizada", desc: "Ajuste enfocado en tu diagnóstico y dolor particular.", icon: "🤝" },
                { title: "Sin Medicamentos ni Cirugías", desc: "Terapia manual no invasiva enfocada en la biomecánica.", icon: "🌱" },
                { title: "Ajustes Clínicos Seguros", desc: "Procedimientos controlados realizados por profesional certificado.", icon: "🛡️" },
                { title: "+49,000 Pacientes Satisfechos", desc: "Amplia trayectoria en alivio del dolor y terapia deportiva.", icon: "👥" },
                { title: "Técnicas Certificadas SEP", desc: "Descompresión Axial con validez y registro oficial.", icon: "🎓" },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: "6rem 1.5rem 8rem", background: "#020202", borderTop: "1px solid rgba(255,255,255,0.03)", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Opiniones de nuestros{" "}
                <span style={{ color: "var(--orange)", fontStyle: "italic", fontWeight: 400 }}>Pacientes.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Esto dicen las personas que ya se atienden con nosotros.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "1.5rem" }}>
              {testimonials.map((t, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "2rem", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "320px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                  <div>
                    <div style={{ display: "flex", gap: "0.3rem", marginBottom: "1.25rem" }}>
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="var(--yellow)" style={{ color: "var(--yellow)" }} />)}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem", borderLeft: "2px solid var(--orange)", paddingLeft: "0.85rem" }}>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>🤕 <strong>Dolor anterior:</strong> {t.pain}</div>
                      <div style={{ fontSize: "0.8rem", color: "#ff8c3a" }}>✨ <strong>Resultado:</strong> {t.result}</div>
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", fontStyle: "italic", marginBottom: "1.5rem" }}>"{t.quote}"</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--gradient-brand)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{t.name}</h4>
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>{t.role} · {t.city} ({t.age})</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
              <button onClick={() => { const el = document.getElementById("registro-formulario"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="btn-whatsapp" style={{ background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)", border: "none", padding: "1rem 2.5rem", fontSize: "0.95rem", fontWeight: 800, borderRadius: "1.25rem", cursor: "pointer", boxShadow: "0 10px 25px rgba(124,58,237,0.25)" }}>
                Quiero agendar mi cita →
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ padding: "6rem 1.5rem", background: "#020202", borderTop: "1px solid rgba(255,255,255,0.03)", position: "relative" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Preguntas{" "}
                <span style={{ color: "var(--orange)", fontStyle: "italic", fontWeight: 400 }}>Frecuentes.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Todo lo que necesitas saber sobre la fecha especial de All Anatomy en Cadereyta.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { q: "¿Cuándo y dónde será el evento?", a: "Se llevará a cabo el Sábado 29 de Agosto, de 9:00 AM a 1:00 PM, en Olympus Fitness Gym, Blvd. Benito Juárez 415, Cadereyta Jiménez, 67480, NL. La ubicación exacta y detalles de acceso se te enviarán por WhatsApp tras confirmar tu lugar." },
                { q: "¿Cuál es el costo y cómo se realiza el pago?", a: "El costo es de $1,000 MXN por una sesión completa de ajuste quiropráctico. El pago se realiza únicamente en efectivo en el lugar del evento durante tu recepción." },
                { q: "¿Tienen cupo limitado?", a: "Sí, es cupo estrictamente limitado de 30 a 50 citas para garantizar una atención personalizada y de la más alta calidad. Recomendamos agendar lo antes posible para asegurar tu horario." },
                { q: "¿Quién realizará los ajustes?", a: "Todos los ajustes clínicos serán realizados personalmente por el quiropráctico Edgar Delgado, especialista certificado con más de 49,000 ajustes espinales realizados." },
                { q: "¿Qué sucede después de llenar el formulario?", a: "Al dar clic en 'Quiero mi cita', se abrirá un chat de WhatsApp prellenado con nuestros asesores de la sucursal San Pedro (Colorines) para confirmar tu horario disponible y las indicaciones de llegada." },
                { q: "¿Duele el ajuste?", a: "No, el ajuste quiropráctico no es doloroso. Es posible sentir una liberación de presión o un sonido de chasquido, el cual es simplemente gas liberándose de las articulaciones, seguido de un alivio inmediato." },
                { q: "¿Cuánto dura la sesión?", a: "La sesión dura aproximadamente de 30 a 40 minutos, incluyendo la valoración inicial detallada del especialista, pruebas físicas y el ajuste quiropráctico completo." },
                { q: "¿Aceptan tarjeta?", a: "Para esta fecha especial en Cadereyta, únicamente se aceptarán pagos en efectivo al momento de tu recepción para agilizar el registro y asignación de consultorio." },
              ].map((faq, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "1.5rem", padding: "1.5rem 2rem" }}>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>{faq.q}</h4>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
              <button onClick={() => { const el = document.getElementById("registro-formulario"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="btn-whatsapp" style={{ background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)", border: "none", padding: "1rem 2.5rem", fontSize: "0.95rem", fontWeight: 800, borderRadius: "1.25rem", cursor: "pointer", boxShadow: "0 10px 25px rgba(124,58,237,0.25)" }}>
                Reserva tu lugar ahora →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Footer Bar */}
      <div className="show-only-on-mobile" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1rem 1.5rem", boxShadow: "0 -10px 30px rgba(0,0,0,0.6)" }}>
        <button
          onClick={() => { const el = document.getElementById("registro-formulario"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
          className="btn-whatsapp"
          style={{ width: "100%", background: "linear-gradient(90deg, #7c3aed 0%, #4f1fc2 100%)", border: "none", padding: "1.1rem 2rem", fontSize: "0.95rem", fontWeight: 800, borderRadius: "1.25rem", cursor: "pointer", justifyContent: "center", boxShadow: "0 4px 15px rgba(124,58,237,0.3)" }}
        >
          🎟️ Reservar mi lugar — Sáb 29 Ago
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(5,5,5,0.95)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
          >
            <button
              onClick={() => setSelectedImg(null)}
              style={{ position: "absolute", top: "2rem", right: "2rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", transition: "all 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", width: "90%", maxWidth: "750px", height: "80vh" }}
            >
              <Image src={selectedImg} alt="Imagen ampliada" fill style={{ objectFit: "contain" }} quality={95} priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
