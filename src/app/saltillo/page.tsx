"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, DollarSign, Users, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, Star, Trophy, Clock, Image as ImageIcon } from "lucide-react";
import BranchModal from "@/components/BranchModal";
import { CONTACT_INFO } from "@/constants/contact";

// Define TypeScript interfaces for structural clean codes
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Ochoa",
    role: "Corredor de Maratón / Saltillo",
    quote: "Tenía meses con un dolor lumbar que no me dejaba entrenar. Viajé a Monterrey por recomendación y ahora que vienen a Saltillo ya agendé a toda mi familia. El cambio es inmediato.",
    rating: 5,
  },
  {
    name: "Dra. Sofía Garza",
    role: "Médico Pediatra / Paciente Regular",
    quote: "Como profesional de la salud soy exigente. La técnica de ajuste de Edgar y el profesionalismo de All Anatomy son insuperables. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Ivan Huerta",
    role: "Atleta de Alto Rendimiento / Triatleta",
    quote: "La combinación de ajuste y descarga muscular deportiva me devolvió el rendimiento para mi competencia. La mejor inversión para mi salud física.",
    rating: 5,
  },
];

const galleryTabs = ["Ajustes en Acción", "Instalaciones Clínicas", "Tecnología"];
const galleryImages = {
  "Ajustes en Acción": [
    { src: "/patient-herrera.jpg", alt: "Ajuste a Miguel Herrera" },
    { src: "/patient-carioca.jpg", alt: "Ajuste a Rafael Carioca" },
  ],
  "Instalaciones Clínicas": [
    { src: "/clinic.png", alt: "Instalaciones Premium" },
    { src: "/hero-bg.png", alt: "Cabina de Tratamiento" },
  ],
  "Tecnología": [
    { src: "/anatomy-bg.png", alt: "Descompresión Axial Columna" },
    { src: "/service-chiro.png", alt: "Scanner y Valoración" },
  ],
};

export default function SaltilloPage() {
  const [activeTab, setActiveTab] = useState<"Ajustes en Acción" | "Instalaciones Clínicas" | "Tecnología">("Ajustes en Acción");
  const [selectedPass, setSelectedPass] = useState<"basico" | "completo">("basico");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    timeSlot: "9:00 AM - 11:00 AM",
    symptoms: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const passPricing = {
    basico: {
      title: "Ajuste Quiropráctico",
      price: "$1,000",
      details: "Incluye Valoración Postural + Ajuste de toda la columna vertebral realizado por Edgar Delgado.",
    },
    completo: {
      title: "Tratamiento VIP Completo",
      price: "$1,800",
      details: "Incluye Valoración + Ajuste Quiropráctico Completo + 1 Terapia de Punción Seca o Masaje Deportivo de Descarga Localizado.",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    const currentPass = passPricing[selectedPass];
    const message = `¡Hola All Anatomy! Acabo de registrarme para la Edición Especial de Ajustes en Saltillo el jueves 20 de agosto.\n\nDetalles del Registro:\n- Nombre: ${formData.name}\n- WhatsApp: ${formData.phone}\n- Pase Elegido: ${currentPass.title} (${currentPass.price} MXN)\n- Horario sugerido: ${formData.timeSlot}\n- Síntomas: ${formData.symptoms || "Check-up general"}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/528134173857?text=${encodedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "6.5rem", background: "#020202", minHeight: "100vh", position: "relative" }}>
        
        {/* Glow ambient background like Bieneq */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

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
            padding: "4rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "900px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "9999px",
                color: "var(--yellow)",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "2.5rem",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Sparkles size={13} className="animate-pulse" />
              Edición Especial Coahuila
            </div>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                marginBottom: "2rem",
              }}
            >
              <span style={{ display: "block" }}>Clínica de</span>
              <span style={{ display: "block", background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ajuste Vertebral</span>
              <span style={{ display: "block" }}>en Saltillo</span>
            </h1>

            {/* Event Specs row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2.5rem",
                color: "rgba(255,255,255,0.45)",
                fontSize: "1.1rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                marginBottom: "3rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Calendar size={18} style={{ color: "#7c3aed" }} />
                <span>Jueves 20 de Agosto</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={18} style={{ color: "#e63327" }} />
                <span>Residencial Valle Real, Saltillo</span>
              </div>
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Scroll para explorar</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight size={16} style={{ transform: "rotate(90deg)", color: "rgba(255,255,255,0.3)" }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section (Grid Column) */}
        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem 8rem",
            display: "grid",
            gridTemplateColumns: "1fr",
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
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.01em", italic: "true" } as any}>
                    Misión Clínica en Saltillo ✨
                  </h2>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "2rem",
                    padding: "2.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontWeight: 300, fontStyle: "italic", fontFamily: "'Inter', sans-serif" }}>
                    "Trasladamos temporalmente nuestro consultorio clínico a Saltillo para acercar la quiropráctica de alto rendimiento a pacientes que buscan corregir dolores de columna de raíz, guiados bajo el estándar médico que nos caracteriza en Monterrey."
                  </p>
                </div>
              </div>

              {/* Instructor/Specialist Bio */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>
                    Tu Especialista 🎓
                  </h2>
                </div>

                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "2.5rem",
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <div style={{ position: "relative", width: "100px", height: "100px", borderRadius: "2rem", overflow: "hidden", border: "2px solid rgba(255,255,255,0.1)" }}>
                      <Image
                        src="/patient-herrera-clean.jpg"
                        alt="Edgar Delgado"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>Edgar Delgado</h4>
                      <p style={{ fontSize: "0.82rem", color: "var(--orange)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Director Clínico & Fundador
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontStyle: "italic" }}>
                    "Creador de la técnica de Descompresión Axial en All Anatomy con validez SEP. Ha tratado con éxito a leyendas del fútbol mexicano y mundial, brindando el mismo cuidado clínico a pacientes de toda la república."
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)" }} />
                      <span>Especialista en Quiropráctica y Biomecánica</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)" }} />
                      <span>Avalado oficialmente por SEP y cuenta verificada</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                      <Trophy size={14} style={{ color: "var(--yellow)" }} />
                      <span>+49,000 Ajustes Espinales realizados</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery with Tabs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--gradient-brand)" }} />
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", textTransform: "uppercase" }}>
                    Galería Clínica 📷
                  </h2>
                </div>

                {/* Tabs switcher */}
                <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
                  {galleryTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      style={{
                        padding: "0.75rem 1.5rem",
                        borderRadius: "1.25rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        fontFamily: "'Inter', sans-serif",
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: activeTab === tab ? "#fff" : "rgba(255,255,255,0.03)",
                        color: activeTab === tab ? "#000" : "rgba(255,255,255,0.45)",
                        cursor: "pointer",
                        transition: "all 0.25s",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content Images Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {galleryImages[activeTab].map((img, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        aspectRatio: "1.33",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.01)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        quality={85}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (Booking Pass Funnel) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  background: "rgba(12, 12, 12, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "2.5rem",
                  padding: "2.5rem 2rem",
                  backdropFilter: "blur(30px)",
                  boxShadow: "0 50px 100px -30px rgba(0,0,0,0.9)",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  {/* Spots Alert */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "rgba(230, 51, 39, 0.12)",
                      border: "1px solid rgba(230, 51, 39, 0.3)",
                      borderRadius: "9999px",
                      padding: "0.35rem 0.85rem",
                      color: "#e63327",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1rem",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <ShieldAlert size={12} />
                    ¡Solo 50 Lugares en total!
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>
                    Reserva tu Cita 🎟️
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                    Selecciona tu nivel de tratamiento clínico
                  </p>
                </div>

                {/* Level selection buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", marginLeft: "0.5rem" }}>
                    Tipo de Pase
                  </span>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <button
                      onClick={() => setSelectedPass("basico")}
                      style={{
                        padding: "1rem",
                        borderRadius: "1.5rem",
                        border: selectedPass === "basico" ? "1px solid #fff" : "1px solid rgba(255,255,255,0.06)",
                        background: selectedPass === "basico" ? "#fff" : "rgba(255,255,255,0.02)",
                        color: selectedPass === "basico" ? "#000" : "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.25rem",
                        transition: "all 0.25s",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>Ajuste</span>
                      <span style={{ fontSize: "0.95rem", fontWeight: 800 }}>$1,000</span>
                      <span style={{ fontSize: "0.62rem", opacity: 0.6 }}>Básico</span>
                    </button>

                    <button
                      onClick={() => setSelectedPass("completo")}
                      style={{
                        padding: "1rem",
                        borderRadius: "1.5rem",
                        border: selectedPass === "completo" ? "1px solid var(--grad-start)" : "1px solid rgba(255,255,255,0.06)",
                        background: selectedPass === "completo" ? "rgba(124, 58, 237, 0.1)" : "rgba(255,255,255,0.02)",
                        color: selectedPass === "completo" ? "#fff" : "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.25rem",
                        transition: "all 0.25s",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>Ajuste + VIP</span>
                      <span style={{ fontSize: "0.95rem", fontWeight: 800 }}>$1,800</span>
                      <span style={{ fontSize: "0.62rem", color: "var(--grad-start)", fontWeight: 700 }}>Tratamiento Completo</span>
                    </button>
                  </div>

                  {/* Pass Description Box */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.01)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "1.25rem",
                      padding: "1.25rem",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    <strong>Incluye:</strong> {passPricing[selectedPass].details}
                  </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
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
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
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
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                      Horario sugerido
                    </label>
                    <select
                      className="input-premium"
                      style={{ background: "#141414", cursor: "pointer" }}
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                      <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                      <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                      <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
                      Síntomas / Motivo de consulta
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej. Dolor lumbar crónico, postura"
                      className="input-premium"
                      style={{ resize: "none" }}
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      borderRadius: "1.25rem",
                      padding: "1.1rem 2rem",
                      marginTop: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 10px 30px -10px rgba(37,211,102,0.4)",
                    }}
                  >
                    {submitted ? "Redirigiendo..." : "Confirmar Mi Registro"}
                    <ArrowRight size={16} />
                  </button>
                </form>

                {/* Cash warning */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    background: "rgba(234, 88, 12, 0.05)",
                    border: "1px solid rgba(234, 88, 12, 0.15)",
                    borderRadius: "1.25rem",
                    padding: "1rem 1.25rem",
                    marginTop: "2rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ShieldAlert size={16} style={{ color: "var(--orange)", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                    <strong>Pago en efectivo:</strong> Los montos se liquidan directamente el día del evento en la recepción clínica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Communidad All Anatomy) */}
        <section
          style={{
            padding: "6rem 1.5rem 8rem",
            background: "#020202",
            borderTop: "1px solid rgba(255,255,255,0.03)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
                Voces de nuestra{" "}
                <span style={{ color: "var(--orange)", fontStyle: "italic", fontWeight: 400 }}>Comunidad.</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
                Lo que dicen nuestros pacientes tras recibir el ajuste vertebral de All Anatomy.
              </p>
            </div>

            {/* Testimonials cards list */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "2rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "260px",
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="var(--yellow)" style={{ color: "var(--yellow)" }} />
                      ))}
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", fontStyle: "italic", marginBottom: "1.5rem" }}>
                      "{t.quote}"
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>{t.name}</h4>
                      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
